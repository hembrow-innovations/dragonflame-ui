---
id: "task-231-align-slice-133-check-paths"
title: "Align slice-133 CHECK paths"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-230-crate-workspace-check-paths"
tags: []
created_at: "2026-09-10T22:18:12Z"
updated_at: "2026-09-10T22:22:27Z"
---

# Align slice-133 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-133-crate-workspace-honesty]] oracle CHECK and EVIDENCE lines name `tests/crate-workspace/funded-cargo-workspace.test.mjs` and `tests/crate-workspace/no-toolchain-workspace.test.mjs`.

## Context

[[ticket-197-slice-133-stale-check-path]]: CHECK commands still name missing flat `tests/no-cargo-workspace.test.mjs` and `tests/no-toolchain-workspace.test.mjs`. Spec already names `tests/crate-workspace/funded-cargo-workspace.test.mjs` and `tests/crate-workspace/no-toolchain-workspace.test.mjs`. Those tests pass. Native is funded, so O1 is the funded-workspace command, not a path move of no-cargo-workspace.

Rewrite CHECK and EVIDENCE on the archived slice-133 file to the spec commands. Update the O1 oracle label to match the funded-workspace test. Leave Why, Done, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The two CHECK commands on archived slice-133 match `docs/specs/ui-framework/crate-workspace/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-133-crate-workspace-honesty.md`

## Links

- [[slice-230-crate-workspace-check-paths]]
- [[ticket-197-slice-133-stale-check-path]]
- [[slice-133-crate-workspace-honesty]]
