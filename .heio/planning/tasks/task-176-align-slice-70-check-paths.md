---
id: "task-176-align-slice-70-check-paths"
title: "Align slice-70 CHECK paths"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-175-counter-check-paths"
tags: []
created_at: "2026-09-10T20:14:00Z"
updated_at: "2026-09-10T20:14:00Z"
---

# Align slice-70 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-70-counter-on-dom]] oracle CHECK and EVIDENCE lines name `tests/counter/counter-static-h.test.mjs`, `tests/counter/counter-signal-patch.test.mjs`, and `tests/counter/counter-run-once.test.mjs`.

## Context

[[ticket-173-slice-70-stale-check-paths]]: CHECK commands still name missing flat `tests/counter-*.test.mjs` paths. Spec already names the `tests/counter/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-70 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The three CHECK commands on archived slice-70 match `docs/specs/ui-framework/counter/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-70-counter-on-dom.md`

## Links

- [[slice-175-counter-check-paths]]
- [[ticket-173-slice-70-stale-check-paths]]
- [[slice-70-counter-on-dom]]
