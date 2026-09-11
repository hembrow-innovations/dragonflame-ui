---
description: Run one unattended sitting of /afk-plan, /afk-slice, or /afk-verify, whichever is due. Loop with LOOP_COMMAND=afk-cycle.
agent: build
---

Load nothing extra. Run `node .loop/pick-cycle.mjs`. The printed command is the sitting.

- `afk-slice`: run `/afk-slice` then exit.
- `afk-plan`: run `/afk-plan` then exit.
- `afk-verify`: run `/afk-verify` then exit.

If the helper exits 2, end with `VERDICT: IDLE`. Do not invent work.

This sitting does not wait for a human. Auto-confirm. All tasks `mode: afk`.
