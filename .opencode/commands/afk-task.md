---
description: Autonomously complete exactly one ready unit — a ready task from .heio/planning/tasks (TDD, in-scope only), then exit
agent: build
---

You are an autonomous agent completing exactly ONE ready unit from `.heio/planning/tasks`, then exiting.
A **ready unit** is a **task** under `.heio/planning/tasks`
(`status: ready` + `kind: task`) , carrying a `## Agent Brief` with scope/verification/
acceptance/oracles).

Arguments: $ARGUMENTS

Do not run scripts under `.loop/`. `.heio/` is hidden. Glob skips it. Read a known path, Grep, or bash `ls`.

- If a task path/name is given, Read that file under `.heio/planning/tasks/`.
- Otherwise spawn one `explore` subagent to name the lowest-numbered unblocked `ready` + `mode: afk` task. If none, stop. Parent does not read every task body to decide.

Workflow (follow AGENTS.md and project conventions throughout):

1. Claim first. Read the task file. Confirm `kind: task`, `status: ready`, `mode: afk`, and every `blocked_by` id is `completed` (check `.heio/archive/planning/tasks/` too). Set `status: claimed` and stamp `updated_at`. Re-read. If it is not claimable, stop. Do not start another task. Same checkout as `/afk-plan` and `/afk-verify`. No git branch. No worktree. Read `.opencode/skills/afk-plan/references/lanes.md` before allocating ids or committing.
2. Read the claimed task file. Load **vault-pack**. Spawn one `explore` subagent to assemble the pack for that unit (see **vault-pack**). **Read every Must-read path in full**. Skim Related only if needed. Do not freestyle-grep half the vault. Then any relevant slice under `.heio/planning/sprints/<sprint_name>/slice-<NN>-<slug>.md`. Broad code exploration → subagent summary only.
3. Implement the unit 100% — TDD, no stubs, no skipped scope. Respect its scope (a task's "Scope (may touch)" list, or the ticket's `## Agent Brief`); do not make repo-wide changes. Behaviour work must **name contract promise ids** from the pack; never invent product rules. UI must use the ui packages: 
	- React Native packages: `ui-components-native`/`ui-infra-native`, 
	- Web packages: `ui-components-web`/`ui-infra-web`, 
	- design tokens.
4. Verify: run the checks the task lists (jest/vitest/playwright-cli/typecheck/biome as applicable) until green. 
5. Spawn ONE subagent to adversarially review your diff for defects and convention violations; require it to check **diff vs named promise ids** (and purpose out-of-scope) when behaviour changed; fix what it confirms.
6. Update docs: tick the matching checkboxes; add change to changelog. Then close by kind (use **obsidian-axi** `mv` so links survive). Set the task `status: completed`, move it to `.heio/archive/planning/tasks/`, then `git add -- <paths>` and `git commit -m "<type>(<scope>): <description>" -- <paths>` (old task path, archive path, parent slice if you edited it, and this unit's scope only). Do not commit `intent.md`, `roadmap.md`, locations, or `shape.md`.
7. If the only block is a missing product decision, pick the smallest reversible default from the location destination plus `docs/`, write it into the spec or round as needed, and continue. Unclaim only for a broken precondition that code cannot fix. Do not wait for a human.

Rules: never touch other ticket/task files except this unit's own (and, for a task, its source slice/ticket); never run vault-wide or store-wide fixes. Any issues arise, create a ticket for reviewing.
