---
id: "task-228-align-slice-129-check-paths"
title: "Align slice-129 CHECK paths"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-227-signal-dirtying-check-paths"
tags: []
created_at: "2026-09-10T22:13:26Z"
updated_at: "2026-09-10T22:16:15Z"
---

# Align slice-129 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-129-signal-dirtying-honesty]] oracle CHECK and EVIDENCE lines name `tests/signal-dirtying/no-setstate-dirty.test.mjs`, `tests/signal-dirtying/no-signal-pipeline.test.mjs`, and `tests/signal-dirtying/no-shared-signals.test.mjs`.

## Context

[[ticket-196-slice-129-stale-check-paths]]: CHECK commands still name missing flat `tests/no-setstate-dirty.test.mjs`, `tests/no-signal-pipeline.test.mjs`, and `tests/no-shared-signals.test.mjs`. Spec already names the `tests/signal-dirtying/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-129 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The three CHECK commands on archived slice-129 match `docs/specs/ui-framework/signal-dirtying/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-129-signal-dirtying-honesty.md`

## Links

- [[slice-227-signal-dirtying-check-paths]]
- [[ticket-196-slice-129-stale-check-paths]]
- [[slice-129-signal-dirtying-honesty]]
