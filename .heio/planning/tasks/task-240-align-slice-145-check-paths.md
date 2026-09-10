---
id: "task-240-align-slice-145-check-paths"
title: "Align slice-145 CHECK paths"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-239-host-leaves-check-paths"
tags: []
created_at: "2026-09-10T22:40:10Z"
updated_at: "2026-09-10T22:40:10Z"
---

# Align slice-145 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-145-host-leaves-honesty]] oracle CHECK and EVIDENCE lines name `tests/host-leaves/no-html-leaves.test.mjs` and `tests/host-leaves/no-uikit-leaves.test.mjs`.

## Context

[[ticket-215-slice-145-stale-check-paths]]: CHECK commands still name missing flat `tests/no-html-leaves.test.mjs` and `tests/no-uikit-leaves.test.mjs`. Spec already names the `tests/host-leaves/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-145 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The two CHECK commands on archived slice-145 match `docs/specs/ui-framework/host-leaves/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-145-host-leaves-honesty.md`

## Links

- [[slice-239-host-leaves-check-paths]]
- [[ticket-215-slice-145-stale-check-paths]]
- [[slice-145-host-leaves-honesty]]
