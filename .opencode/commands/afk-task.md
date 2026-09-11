---
description: Autonomously complete exactly one ready unit — a ready task from .heio/planning/tasks (TDD, in-scope only), then exit
agent: build
---

You are an autonomous agent completing exactly ONE ready unit from `.heio/planning/tasks`, then exiting.
A **ready unit** is a **task** under `.heio/planning/tasks`
(`status: ready` + `kind: task`) , carrying a `## Agent Brief` with scope/verification/
acceptance/oracles).

Arguments: $ARGUMENTS

- If a task path/name is given, pass that id to claim-ready.
- Otherwise pass no id. claim-ready picks the lowest unblocked `ready` + `mode: afk` task.

Workflow (follow AGENTS.md and project conventions throughout):

1. Claim first: `node .loop/claim-ready.mjs` with the argument id or with no id. Do not hand-edit `status: claimed`. If the helper exits 2, stop. Do not start another task. Same checkout as `/afk-plan` and `/afk-verify`. No git branch. No worktree.
2. Read the claimed task file. **Vault pack:** load skill **vault-pack** and run `pnpm vault:pack -- --unit <path-to-unit.md>`; **Read every Must-read path in full** (intent ladder, agent-gotchas, purpose + contracts for `area`). Skim Related only if needed. Do not freestyle-grep half the vault. Then any relevant slice under `.heio/planning/sprints/<sprint_name>/slice-<NN>-<slug>.md`. Broad code exploration → subagent summary only.
3. Implement the unit 100% — TDD, no stubs, no skipped scope. Respect its scope (a task's "Scope (may touch)" list, or the ticket's `## Agent Brief`); do not make repo-wide changes. Behaviour work must **name contract promise ids** from the pack; never invent product rules. UI must use the ui packages: 
	- React Native packages: `ui-components-native`/`ui-infra-native`, 
	- Web packages: `ui-components-web`/`ui-infra-web`, 
	- design tokens.
4. Verify: run the checks the task lists (jest/vitest/playwright-cli/typecheck/biome as applicable) until green. 
5. Spawn ONE subagent to adversarially review your diff for defects and convention violations; require it to check **diff vs named promise ids** (and purpose out-of-scope) when behaviour changed; fix what it confirms.
6. Update docs: tick the matching checkboxes; add change to changelog. Then close by kind (use **obsidian-axi** `mv` so links survive). Set the task `status: completed`, move it to `.heio/archive/planning/tasks/`, then commit with `node .loop/commit-lane.mjs drain -m "<type>(<scope>): <description>" -- <paths>` (old task path, archive path, parent slice if you edited it, and this unit's scope only).
7. If the only block is a missing product decision, pick the smallest reversible default from the location destination plus `docs/`, write it into the spec or round as needed, and continue. Unclaim only for a broken precondition that code cannot fix. Do not wait for a human.

Rules: never touch other ticket/task files except this unit's own (and, for a task, its source slice/ticket); never run vault-wide or store-wide fixes. Any issues arise, create a ticket for reviewing.
