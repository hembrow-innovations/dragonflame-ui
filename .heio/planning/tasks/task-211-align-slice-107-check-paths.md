---
id: "task-211-align-slice-107-check-paths"
title: "Align slice-107 CHECK paths"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-210-composite-check-paths"
tags: []
created_at: "2026-09-10T21:42:07Z"
updated_at: "2026-09-10T21:42:07Z"
---

# Align slice-107 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-107-composite-on-dom]] oracle CHECK and EVIDENCE lines name `tests/composite/composite-h.test.mjs`, `tests/composite/composite-children.test.mjs`, and `tests/composite/composite-run-once.test.mjs`.

## Context

[[ticket-182-slice-107-stale-check-paths]]: CHECK commands still name missing flat `tests/composite-h.test.mjs`, `tests/composite-children.test.mjs`, and `tests/composite-run-once.test.mjs`. Spec already names the `tests/composite/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-107 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The three CHECK commands on archived slice-107 match `docs/specs/ui-framework/composite/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-107-composite-on-dom.md`

## Links

- [[slice-210-composite-check-paths]]
- [[ticket-182-slice-107-stale-check-paths]]
- [[slice-107-composite-on-dom]]
