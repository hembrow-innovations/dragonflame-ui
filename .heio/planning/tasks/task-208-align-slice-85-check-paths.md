---
id: "task-208-align-slice-85-check-paths"
title: "Align slice-85 CHECK paths"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-207-absence-check-paths"
tags: []
created_at: "2026-09-10T21:37:12Z"
updated_at: "2026-09-10T21:37:12Z"
---

# Align slice-85 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-85-first-version-without-sugar]] oracle CHECK and EVIDENCE lines name `tests/absence/no-jsx-here.test.mjs`, `tests/absence/no-lowerer-here.test.mjs`, and `tests/git-package/git-package.test.mjs`.

## Context

[[ticket-181-slice-85-stale-check-paths]]: CHECK commands still name missing flat `tests/no-jsx-here.test.mjs`, `tests/no-lowerer-here.test.mjs`, and `tests/git-package.test.mjs`. Spec already names the `tests/absence/` and `tests/git-package/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-85 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `sugar-later`.

## Verify

The three CHECK commands on archived slice-85 match `docs/specs/ui-framework/absence/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/sugar-later/slice-85-first-version-without-sugar.md`

## Links

- [[slice-207-absence-check-paths]]
- [[ticket-181-slice-85-stale-check-paths]]
- [[slice-85-first-version-without-sugar]]
