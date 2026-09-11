# AFK lanes

Same checkout as `/afk-plan`, `/afk-task`, `/afk-slice`, and `/afk-verify`. No git branch. No worktree.

Do not run `/afk-plan` beside an `/afk-task` or `/afk-slice` loop.

`.heio/` is hidden. Glob skips it. Read a known path, Grep, or bash `ls`. See **management**.

Do not run scripts under `.loop/`.

Allocate ids with `node .opencode/skills/management/scripts/planning-next-id.mjs` immediately before each new file. Never eyeball ids.

`/afk-plan` commit paths stay under `.heio/planning/sprints/`, `tasks/`, `tickets/`, `rounds/`, and archive tickets or rounds.

`/afk-verify` commit paths stay under tickets and the afk-verify round.

`/afk-task` commits the unit scope, the old task path, the archive path, and the parent slice if edited. Do not commit `intent.md`, `roadmap.md`, locations, or `shape.md` from drain.
