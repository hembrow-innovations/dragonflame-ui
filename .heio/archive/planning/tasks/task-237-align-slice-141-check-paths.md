---
id: "task-237-align-slice-141-check-paths"
title: "Align slice-141 CHECK paths"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-236-web-layout-check-paths"
tags: []
created_at: "2026-09-10T22:31:36Z"
updated_at: "2026-09-10T22:35:38Z"
---

# Align slice-141 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-141-web-layout-honesty]] oracle CHECK and EVIDENCE lines name `tests/web-layout/no-taffy-on-web.test.mjs` and `tests/web-layout/no-impeller-dom.test.mjs`.

## Context

[[ticket-205-slice-141-stale-check-paths]]: CHECK commands still name missing flat `tests/no-taffy-on-web.test.mjs` and `tests/no-impeller-dom.test.mjs`. Spec already names the `tests/web-layout/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-141 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The two CHECK commands on archived slice-141 match `docs/specs/ui-framework/web-layout/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-141-web-layout-honesty.md`

## Links

- [[slice-236-web-layout-check-paths]]
- [[ticket-205-slice-141-stale-check-paths]]
- [[slice-141-web-layout-honesty]]
