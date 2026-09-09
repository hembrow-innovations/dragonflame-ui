# Lanes

Two AFK loops share this checkout. Planner is `/afk-plan`. Drain is `/afk-task` or `/afk-slice`. No extra branch. No worktree.

## Write sets

- **Planner writes**: new or just-frozen slice, new `ready` or `draft` tasks, ticket `promoted`, sprint `shape.md` Slices in, the sitting round
- **Planner never writes**: product code, `docs/specs/`, claimed or completed tasks, `intent` / `roadmap` / location destinations, slice oracles on a slice it did not just freeze
- **Drain writes**: one claimed task, that task's scope, parent slice `active` / `met` / `EVIDENCE`, archive move of that task, a new ticket when something belongs to the project not this slice
- **Drain never writes**: new slices, new tasks except that ticket, other ready task files, location / roadmap / intent destinations, sprint `shape.md`

## Lock

`.loop/lanes.lock` is the shared lease. Pid inside. Dead pid is stolen. Same pid is reentrant.

- **Claim**: drain must run `node .loop/claim-ready.mjs <task-id>` before editing code. Lowest unblocked `ready` + `mode: afk` wins when the id is omitted. Exit 2 means not claimable
- **Ids**: run `planning-next-id.mjs` only inside `withLaneLock` or immediately after a claim/commit helper that already holds it
- **Commit**: `node .loop/commit-lane.mjs <plan|drain> -m "<type>(<scope>): <description>" -- <paths>`

Plan commit paths stay under `.heio/planning/sprints/`, `tasks/`, `tickets/`, `rounds/`, and archive tickets or rounds. Drain commit may include the claimed task, its scope, the parent slice, and archive task moves. Drain must not commit `intent.md`, `roadmap.md`, locations, or `shape.md`.

If git index.lock appears, retry the helper. Do not create a branch to dodge it.

## Two terminals

```
LOOP_COMMAND=afk-plan node .loop/opencode-loop.mjs 200
LOOP_COMMAND=afk-task node .loop/opencode-loop.mjs 200
```

Pick one drain command. Do not run `/afk-slice` and `/afk-task` loops together.
