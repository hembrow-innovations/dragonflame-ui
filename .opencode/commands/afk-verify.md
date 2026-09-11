---
description: Re-run one met slice's oracles, confirm gaps, file tickets for /afk-plan, then exit. Verify loop beside /afk-plan and /afk-task on this checkout.
agent: build
argument-hint: "[slice | task | continue | status]"
---

Load **afk-verify**. Run one sitting, then exit.

Arguments: $ARGUMENTS

Do not run scripts under `.loop/`. Glob and read the notes.

- Empty or `continue`: lowest-numbered `met` slice not in the afk-verify ledger.
- A slice or task id: that slice, if it is `met`.
- `status`: progress only. No tests. No tickets.

This is not `/afk-task`, not `/afk-slice`, not `/afk-plan`, and not `/verify-ticket`. Do not implement product code. Do not claim a ready task. Do not create a git branch or worktree. Same checkout as the plan and drain loops. One met slice, then exit.
