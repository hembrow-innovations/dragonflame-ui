# Lanes

Three AFK loops share this checkout. Planner is `/afk-plan`. Drain is `/afk-task` or `/afk-slice`. Verify is `/afk-verify`. No extra branch. No worktree.

## Write sets

- **Planner writes**: new or just-frozen slice, new `ready` or `draft` tasks, ticket `promoted` or `parked`, sprint `shape.md` Slices in, the sitting round
- **Planner never writes**: product code, `docs/specs/`, claimed or completed tasks, `intent` / `roadmap` / location destinations, slice oracles on a slice it did not just freeze
- **Drain writes**: one claimed task, that task's scope, parent slice `active` / `met` / `EVIDENCE`, archive move of that task, a new ticket when something belongs to the project not this slice
- **Drain never writes**: new slices, new tasks except that ticket, other ready task files, location / roadmap / intent destinations, sprint `shape.md`
- **Verify writes**: new `open` tickets, the afk-verify round ledger
- **Verify never writes**: product code, `docs/specs/`, tests, slices, tasks, claimed work, `intent` / `roadmap` / locations, `shape.md`, slice oracles

## Lock

`.loop/lanes.lock` is the shared lease. Pid inside. Dead pid is stolen. Same pid is reentrant.

- **Claim**: drain must run `node .loop/claim-ready.mjs <task-id>` before editing code. Lowest unblocked `ready` + `mode: afk` wins when the id is omitted. Exit 2 means not claimable
- **Pick**: verify must run `node .loop/pick-verify.mjs` before auditing. Lowest `met` slice not in the ledger wins when the id is omitted. Exit 2 means IDLE. Do not claim a task
- **Pick**: planner must run `node .loop/pick-plan.mjs` before writing a round. Lowest pickable `open` ticket wins, else the lowest `shaping` slice whose `blocked_by` is `met`. Exit 2 means IDLE. Do not append a round. The dedicated plan loop stops when remaining is 0. `afk-cycle` does not stop when drain owns ready tasks.
- **Ids**: run `planning-next-id.mjs` only inside `withLaneLock` or immediately after a claim/commit helper that already holds it
- **Commit**: `node .loop/commit-lane.mjs <plan|drain|audit> -m "<type>(<scope>): <description>" -- <paths>`

Plan commit paths stay under `.heio/planning/sprints/`, `tasks/`, `tickets/`, `rounds/`, and archive tickets or rounds. Drain commit may include the claimed task, its scope, the parent slice, and archive task moves. Drain must not commit `intent.md`, `roadmap.md`, locations, or `shape.md`. Audit commit paths stay under tickets and the afk-verify round. Audit must not commit slices, tasks, tests, or product code.

If git index.lock appears, retry the helper. Do not create a branch to dodge it.

## One terminal

```
LOOP_COMMAND=afk-cycle node .loop/opencode-loop.mjs 200
```

`pick-cycle.mjs` chooses `/afk-slice`, then `/afk-plan`, then `/afk-verify`. Idle means no drainable slice, no pickable ticket or shaping slice, and no unaudited `met` slice.

Split terminals still work. Pick one drain command. Do not run `/afk-slice` and `/afk-task` loops together.
