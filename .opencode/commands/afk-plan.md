---
description: Publish exactly one next slice and its tasks from roadmap, locations, or tickets, then exit. Planner loop beside /afk-task or /afk-slice on this checkout.
agent: build
argument-hint: "[slice | location | ticket]"
---

Load **afk-plan**. Run one sitting, then exit.

Arguments: $ARGUMENTS

Do not run scripts under `.loop/`. Glob and read the notes.

- Empty: pick the next unplanned slice target from `.heio/planning/`.
- A slice, location, or ticket id: glob that note, if it is allowed to freeze.

This is not `/afk-task`, not `/afk-slice`, and not `/afk-verify`. Do not implement product code. Do not create a git branch or worktree. Same checkout as the drain and verify loops. One slice plus its tasks, then exit. Auto-confirm. Do not wait for a human.
