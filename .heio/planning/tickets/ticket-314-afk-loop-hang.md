---
id: "ticket-314-afk-loop-hang"
title: "AFK plan and slice loops hang on orphan running tools"
kind: ticket
status: parked
ticket_type: bug
blocked_by: []
tags:
  - afk-plan
  - afk-slice
created_at: "2026-09-12T03:24:20Z"
updated_at: "2026-09-12T11:25:32Z"
---

# AFK plan and slice loops hang on orphan running tools

## Signal

Two loop terminals looked frozen. One was `node .loop/opencode-loop.mjs 200 /afk-plan` on ttys012. One was `node .loop/opencode-loop.mjs 200 /afk-slice` on ttys010. Both still had a living OpenCode child, but that child was idle: no CPU, no children, no LLM sockets, last session write hours earlier.

They are not dead. They are waiting for a tool result that will never arrive. The loop wrapper only starts the next sitting after that OpenCode process exits, so one hung sitting freezes the remaining 199.

## Fit

This project, later slice. Harness and OpenCode `task` completion, not a location destination. Does not rewrite a map sentence.

## Notes

Facts from the 2026-09-12 sitting. PIDs and session ids are from that machine at the time of the check.

### How the loop is supposed to work

`.loop/opencode-loop.mjs` runs one `opencode run --auto --format json <prompt>` at a time. It inherits stdin and stderr from the TTY. It pipes stdout into a line reader that pretty-prints JSON events. The `for` loop `await`s `child.on("close")`. There is no timeout. There is no watchdog. If OpenCode never exits, that iteration never ends, and later sittings never start.

`--auto` is supposed to approve permissions that are not denied. The TTY never shows a permission prompt because stdout is JSON, not the interactive UI.

`/afk-plan` and `/afk-slice` both require a parent agent to spawn a `task` subagent and wait for it. Plan pick is an `explore` subagent. Slice drain is a `general` subagent that runs `/afk-task`. Parent progress is blocked on that `task` tool moving from `running` to `completed`.

### What the two hung processes were doing

- **ttys012 `/afk-plan`**: loop PID 74910 started 09:27. It did finish sittings. Last plan commit was `chore(plan): slice-311-js-backend` at 10:26. Current OpenCode PID 49996 started 10:26:18 and was still alive at 13:18 with about 0.5 percent CPU. Session `ses_f6cfdfa28ffebkLN22luD8J239`. Last parent write 10:26:25. Last parent part is `task` tool `prt_093024667001EXrCoJVE5k2ztR`, status `running`, title "Pick AFK-plan target", child `ses_f6cfdb8f9ffew9d6FVyRjhl2kI`.
- **ttys010 `/afk-slice`**: loop PID 6496 and OpenCode PID 6517 both started 09:49:42. First iteration never finished. Session `ses_f6d1f7aebffe7YU4rjX4pWfaxI`. Pick of [[slice-81-android-counter]] completed. Last parent write 09:50:51. Last parent part is `task` tool `prt_092e1f71d001xbCYkJ7xdSI4If`, status `running`, title "Drain task-272", child `ses_f6d1e08d9ffepYKjNu2LeqyoMM`.

Both OpenCode processes were in `kevent64` on the main thread. No child processes. No established HTTPS. Physical footprint had dropped from a 500 to 600 MB peak to about 160 MB RSS. That is an idle event loop, not a stuck compile or a live model stream.

### Where each subagent actually stopped

The plan pick subagent did not return a PICK block. Its last part is `prt_09304cd2a001mZEr371Ls2BBwL`, a `read` tool, status `running` since 10:29:20, path `/Users/jaredhembrow/.config/opencode/skills/afk-plan/SKILL.md`. That path does not exist. Skills live in this repo under `.opencode/skills/`. OpenCode logs for that session stop at 00:29:18 UTC (10:29 local). No later tool completion, error, or parent resume.

The slice drain subagent claimed [[task-272-red-green-counter-on-emulator]] (`status: ready` to `status: claimed`, `updated_at` 2026-09-11T23:51:33Z) and then fired a parallel tool batch at 09:53:49. Three of four finished within a second. One bash stayed `running`: `prt_092e447380011twJm6zXiLu8J0`. That command cats AVD ini files, runs `adb devices`, looks for gradle, and runs `rustc --print cfg --target x86_64-linux-android`. No bash child exists under PID 6517 now. The tool row is still `running`. An `adb` server PID 67591 has been up about 18 hours on `tcp:5037`. `adb devices` can block on a wedged server. Even if that bash later died, OpenCode never marked the part complete.

### Why the parent never continues

Same chain on both terminals.

1. Subagent issues a tool.
2. That tool's `part.state.status` stays `running`.
3. The OS process for the tool is gone, so nothing can complete the part.
4. The subagent session never emits a final assistant message, so the parent's `task` tool stays `running`.
5. The parent never starts the next model turn. No network, no children.
6. `opencode run` never exits.
7. `.loop/opencode-loop.mjs` never fires `close`, so loop `i` of 200 is permanent.

This is not "the model is thinking". Session `time_updated` and the last `part` timestamps are the stop clock. Plan parent stopped at 10:26, pick tool at 10:29. Slice parent stopped at 09:50, drain bash at 09:53.

### Why a missing Read can hang

The hung Read is outside the workspace. `--auto` should allow it, and a missing file should fail fast. It did neither. With stdout piped, there is no interactive permission UI. If that Read waited on a permission or tool-runner callback that never came, the subagent waits forever, and so does the parent.

### Why the loop looks "stuck" in the terminal

The harness only prints when a new JSON event arrives. After the last `task` start event, OpenCode emits nothing. The banner `===== loop i/200 =====` stays on screen. stderr is quiet. CPU is near zero. That matches a wait, not a spin.

### Leftover checkout state

`git status` had a dirty [[task-272-red-green-counter-on-emulator]]: claimed, not completed, not archived. The drain subagent mutated the task file and then hung, so the next `/afk-slice` can see a claimed AFK task with no living worker.

Lanes say do not run `/afk-plan` beside `/afk-slice`. Both loops were on the same checkout.

### Other processes on the same morning (not the hung pair)

A third loop on ttys000, `node .loop/opencode-loop.mjs 4 /afk-slice`, started 13:16. Session `ses_f6c623cbcffeyWirLGmKGOc6ql`. At 13:17:46 it spawned `task` "AFK task 812", child `ses_f6c60fed6ffeL0Rl9h1H4JW2d6`. That OpenCode PID 31571 still had live HTTPS to the model. Treat it as a live sitting, not this hang, unless its `task` part is still `running` after the child goes idle.

There was already a session titled "Stuck afk-slice while running" at 09:40 the same morning. This failure mode repeated.

OpenCode's shared db was about 5.8 GB and the shared log about 418 MB. That did not cause the wait. It is background health, not the hang mechanism.

### What will not recover on its own

Killing nothing leaves both loops parked on one sitting. The pick and drain parts will not complete. There is no child to finish them. There is no LLM socket to time out. Recovery is to kill the hung `opencode` PIDs (loops then start the next sitting) or kill the loop wrappers too.

Do not implement a product fix from this ticket. A later slice owns timeouts, tool-orphan detection, or a loop watchdog.

## Comments

> *This was generated by AI during triage.*

## Triage Notes

**What we've established so far:**

- Signal is a confirmed harness hang: an orphan OpenCode tool part stays `running` after the OS process is gone, so `opencode run` never exits and `.loop/opencode-loop.mjs` never starts the next sitting.
- Redundancy check: `dd554f9` added an idle watchdog in `.loop/watchdog.mjs` (default 1800s). That recovers a frozen loop iteration. It does not complete orphan tool parts, unstick a missing-file Read, or unclaim a leftover AFK task.
- Prior rejection: none in `docs/`. Not out of scope.
- Not a location destination. Do not promote from this ticket. Do not implement a product fix here.

**Outcome:** `ticket_type: bug`, `status: parked`. Remaining work is a later slice: OpenCode tool-orphan detection, plus claimed-task leftovers after a hung drain.
