---
id: "task-214-align-slice-112-check-paths"
title: "Align slice-112 CHECK paths"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-213-js-backend-check-paths"
tags: []
created_at: "2026-09-10T21:48:35Z"
updated_at: "2026-09-10T21:48:35Z"
---

# Align slice-112 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-112-js-backend-honesty]] oracle CHECK and EVIDENCE lines name `tests/js-backend/no-eval-here.test.mjs`, `tests/js-backend/no-native-stubs.test.mjs`, and `tests/js-backend/no-emit-here.test.mjs`.

## Context

[[ticket-183-slice-112-stale-check-paths]]: CHECK commands still name missing flat `tests/no-eval-here.test.mjs`, `tests/no-native-stubs.test.mjs`, and `tests/no-emit-here.test.mjs`. Spec already names the `tests/js-backend/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-112 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The three CHECK commands on archived slice-112 match `docs/specs/ui-framework/js-backend/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-112-js-backend-honesty.md`

## Links

- [[slice-213-js-backend-check-paths]]
- [[ticket-183-slice-112-stale-check-paths]]
- [[slice-112-js-backend-honesty]]
