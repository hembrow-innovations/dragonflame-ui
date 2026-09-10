---
id: "task-234-align-slice-137-check-paths"
title: "Align slice-137 CHECK paths"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-233-render-object-check-paths"
tags: []
created_at: "2026-09-10T22:25:24Z"
updated_at: "2026-09-10T22:29:29Z"
---

# Align slice-137 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-137-render-object-honesty]] oracle CHECK and EVIDENCE lines name `tests/render-object/no-widget-retain.test.mjs` and `tests/render-object/no-collapsed-render-names.test.mjs`.

## Context

[[ticket-201-slice-137-stale-check-paths]]: CHECK commands still name missing flat `tests/no-widget-retain.test.mjs` and `tests/no-collapsed-render-names.test.mjs`. Spec already names the `tests/render-object/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-137 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The two CHECK commands on archived slice-137 match `docs/specs/ui-framework/render-object/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-137-render-object-honesty.md`

## Links

- [[slice-233-render-object-check-paths]]
- [[ticket-201-slice-137-stale-check-paths]]
- [[slice-137-render-object-honesty]]
