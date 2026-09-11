---
description: Autonomously complete one frozen or active slice by running /afk-task on each of its tasks via subagents
agent: build
---

You are an autonomous agent completing exactly ONE slice, then exiting.

Load **management** for paths, status, and frontmatter. A slice lives at `.heio/planning/sprints/<sprint_name>/slice-<NN>-<slug>.md`.

Arguments: $ARGUMENTS

Do not run scripts under `.loop/`. `.heio/` is hidden. Glob skips it. Read a known path, Grep, or bash `ls`.

- If a slice path, id, or slug is given, Read that file.
- Otherwise spawn one `explore` subagent to name the lowest-numbered `frozen` or `active` slice whose `blocked_by` is `met` or `abandoned` and whose Pool has at least one unblocked `ready` + `mode: afk` task. If none, IDLE. Parent does not read every slice body to decide.

Do not start a `shaping` slice. Do not start a slice whose `blocked_by` ids are not `met` or `abandoned`.

## Workflow

1. Read the slice file in full. Inventory Pool `[[id]]` links. Read each linked task under `.heio/planning/tasks/` and `.heio/archive/planning/tasks/`.
2. Set the slice `status: active` if it is still `frozen`.
3. Build the drain order. A task is runnable when it is `kind: task`, `status: ready`, `mode: afk`, and every `blocked_by` id is `completed` or none. If a linked task is `mode: hitl`, set `mode: afk` and drain it. Do not wait.
4. For each runnable task, spawn a subagent that executes `/afk-task` with that task id. Unblocked tasks may run in parallel. A task that waits on another waits until that subagent returns `completed`.
5. After each subagent, re-read the task file. If it is not `completed` in `.heio/archive/planning/tasks/`, stop that line. Do not mark the slice `met`.
6. When every linked task id is `completed`, run the slice oracles (`CHECK` / `EXPECT`). Record `EVIDENCE:` on the slice. If an oracle fails, stop. Do not invent a pass.
7. If every oracle holds, set the slice `status: met`. If leftover oracles cannot hold, `ABANDON:` with a named home (ticket id or drop from sprint) and set `abandoned`.
8. `git add -- <slice path>` then `git commit -m "chore(slice): <slice id>" -- <slice path>`. Then exit. Do not start another slice.

## Rules

- One slice. Never touch other slice files except this one's `blocked_by` reads.
- `/afk-task` is the only way a task gets implemented. It claims by editing that task file.
- Same checkout as `/afk-plan` and `/afk-verify`. No git branch. No worktree. Do not run an `/afk-slice` loop beside an `/afk-task` loop.
- Create a ticket if something belongs to the project, not this slice.
- End with `VERDICT: TASK | TICKET | ESCALATE | VERIFY`.
