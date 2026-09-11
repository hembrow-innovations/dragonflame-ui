# Lanes

Three AFK loops share this checkout. Planner is `/afk-plan`. Drain is `/afk-task` or `/afk-slice`. Verify is `/afk-verify`. No extra branch. No worktree.

Do not run scripts under `.loop/` for pick, claim, or commit. Glob and read the notes. Then `git add` and `git commit` the lane paths.

## Write sets

- **Planner writes**: new or just-frozen slice, new `ready` or `draft` tasks, ticket `promoted` or `parked`, sprint `shape.md` Slices in, the sitting round
- **Planner never writes**: product code, `docs/specs/`, claimed or completed tasks, `intent` / `roadmap` / location destinations, slice oracles on a slice it did not just freeze
- **Drain writes**: one claimed task, that task's scope, parent slice `active` / `met` / `EVIDENCE`, archive move of that task, a new ticket when something belongs to the project not this slice
- **Drain never writes**: new slices, new tasks except that ticket, other ready task files, location / roadmap / intent destinations, sprint `shape.md`
- **Verify writes**: new `open` tickets, the afk-verify round ledger
- **Verify never writes**: product code, `docs/specs/`, tests, slices, tasks, claimed work, `intent` / `roadmap` / locations, `shape.md`, slice oracles

## Find notes

Glob these trees. Read frontmatter. Sort by the number in the filename.

- **Tasks**: `.heio/planning/tasks/task-*.md` and `.heio/archive/planning/tasks/task-*.md`
- **Slices**: `.heio/planning/sprints/**/slice-*.md` and `.heio/archive/planning/sprints/**/slice-*.md`
- **Tickets**: `.heio/planning/tickets/ticket-*.md` and `.heio/archive/planning/tickets/ticket-*.md`
- **Rounds**: `.heio/planning/rounds/rounds-*.md` and `.heio/archive/planning/rounds/rounds-*.md`

A blocker is resolved when the id is a `met` or `abandoned` slice, or a `completed` task. Look in live and archive.

- **Claim (drain)**: find the task file. Given id, or lowest-numbered `status: ready` + `mode: afk` whose `blocked_by` is resolved. Set `status: claimed` and stamp `updated_at`. Re-read. If it was not ready when you read it, or none is claimable, stop.
- **Pick (verify)**: given slice or task id, or lowest-numbered `status: met` slice whose id is not a ledger line in the `afk-verify` round (`- **slice-...**:`). `status` argument: report remaining, then IDLE. If none, IDLE. Do not claim a task.
- **Pick (plan)**: if any unblocked ready AFK task exists, IDLE. Else lowest-numbered pickable `open` ticket, else lowest-numbered `shaping` slice whose `blocked_by` is resolved. A ticket is pickable when unblocked, and no `afk-plan` round mentions `[[id]]` unless the ticket `updated_at` is newer than that round. If none, IDLE. Do not append a round on IDLE. The dedicated plan loop stops when remaining is 0. `afk-cycle` does not stop when drain owns ready tasks.
- **Pick (slice)**: lowest-numbered `frozen` or `active` slice whose `blocked_by` is resolved and whose Pool has at least one unblocked ready AFK task. If none, IDLE.
- **Pick (cycle)**: drainable slice, then plan target, then unaudited met slice. Idle means none of those.
- **Ids**: run `node .opencode/skills/management/scripts/planning-next-id.mjs` immediately before each new file. Never eyeball ids.
- **Commit**: `git add -- <paths>` then `git commit -m "<type>(<scope>): <description>" -- <paths>`. Retry if index.lock appears. Do not create a branch to dodge it.

Plan commit paths stay under `.heio/planning/sprints/`, `tasks/`, `tickets/`, `rounds/`, and archive tickets or rounds. Drain commit may include the claimed task, its scope, the parent slice, and archive task moves. Drain must not commit `intent.md`, `roadmap.md`, locations, or `shape.md`. Audit commit paths stay under tickets and the afk-verify round. Audit must not commit slices, tasks, tests, or product code.

## One terminal

```
LOOP_COMMAND=afk-cycle node .loop/opencode-loop.mjs 200
```

Cycle sittings choose `/afk-slice`, then `/afk-plan`, then `/afk-verify`. Idle means no drainable slice, no pickable ticket or shaping slice, and no unaudited `met` slice.

Split terminals still work. Pick one drain command. Do not run `/afk-slice` and `/afk-task` loops together.
