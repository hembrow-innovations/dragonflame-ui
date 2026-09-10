---
id: "task-204-align-slice-75-check-paths"
title: "Align slice-75 CHECK paths"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-203-portable-check-paths"
tags: []
created_at: "2026-09-10T21:31:30Z"
updated_at: "2026-09-10T21:34:15Z"
---

# Align slice-75 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-75-portable-web-import]] oracle CHECK and EVIDENCE lines name `tests/renderer-portability/portable-import.test.mjs` and `tests/renderer-portability/portable-wrong-target.test.mjs`.

## Context

[[ticket-180-slice-75-stale-check-paths]]: CHECK commands still name missing flat `tests/portable-import.test.mjs` and `tests/portable-wrong-target.test.mjs`. Spec already names the `tests/renderer-portability/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-75 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The two CHECK commands on archived slice-75 match `docs/specs/ui-framework/renderer-portability/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-75-portable-web-import.md`

## Links

- [[slice-203-portable-check-paths]]
- [[ticket-180-slice-75-stale-check-paths]]
- [[slice-75-portable-web-import]]
