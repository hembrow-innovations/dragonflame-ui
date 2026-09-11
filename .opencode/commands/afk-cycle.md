---
description: Run one unattended sitting of /afk-plan, /afk-slice, or /afk-verify, whichever is due. Loop with LOOP_COMMAND=afk-cycle.
agent: build
---

Load nothing extra. Do not run scripts under `.loop/`.

`.heio/` is hidden. Glob skips it. Read a known path, Grep, or bash `ls`.

Spawn one `explore` subagent to choose the sitting. It returns exactly one line: `afk-slice <id>`, `afk-plan`, `afk-verify <id>`, or `IDLE`. Then run that command or exit. Do not walk the map in the parent.

If spawn is missing, pick in the parent with Read, Grep, or bash `ls`:

1. Drainable `frozen` or `active` slice with an unblocked ready AFK task: run `/afk-slice` then exit.
2. Else no ready AFK tasks, and a pickable open ticket, shaping slice, or unplanned funded location grain: run `/afk-plan` then exit.
3. Else a `met` slice missing from the afk-verify ledger: run `/afk-verify` then exit.
4. Else end with `VERDICT: IDLE`. Do not invent work.

Find tasks under `.heio/planning/tasks/`, slices under `.heio/planning/sprints/`, tickets under `.heio/planning/tickets/`, ledger under rounds tagged `afk-verify`. Read frontmatter. Sort by filename number.

This sitting does not wait for a human. Auto-confirm. All tasks `mode: afk`.
