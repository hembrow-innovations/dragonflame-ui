---
id: "task-243-align-slice-149-check-paths"
title: "Align slice-149 CHECK paths"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-242-style-as-data-check-paths"
tags: []
created_at: "2026-09-10T22:45:25Z"
updated_at: "2026-09-10T22:45:25Z"
---

# Align slice-149 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-149-style-as-data-honesty]] oracle CHECK and EVIDENCE lines name `tests/style-as-data/no-css-language.test.mjs` and `tests/style-as-data/no-css-engine.test.mjs`.

## Context

[[ticket-219-slice-149-stale-check-paths]]: CHECK commands still name missing flat `tests/no-css-language.test.mjs` and `tests/no-css-engine.test.mjs`. Spec already names the `tests/style-as-data/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-149 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The two CHECK commands on archived slice-149 match `docs/specs/ui-framework/style-as-data/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-149-style-as-data-honesty.md`

## Links

- [[slice-242-style-as-data-check-paths]]
- [[ticket-219-slice-149-stale-check-paths]]
- [[slice-149-style-as-data-honesty]]
