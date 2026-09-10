---
id: "task-191-align-slice-72-check-paths"
title: "Align slice-72 CHECK paths"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-190-leaf-kit-check-paths"
tags: []
created_at: "2026-09-10T21:13:00Z"
updated_at: "2026-09-10T21:13:00Z"
---

# Align slice-72 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-72-leaf-kit-on-dom]] oracle CHECK and EVIDENCE lines name `tests/leaf-kit/leaf-view-text-style.test.mjs`, `tests/leaf-kit/leaf-image-scroll.test.mjs`, and `tests/leaf-kit/leaf-input-pressable.test.mjs`.

## Context

[[ticket-177-slice-72-stale-check-paths]]: CHECK commands still name missing flat `tests/leaf-view-text-style.test.mjs`, `tests/leaf-image-scroll.test.mjs`, and `tests/leaf-input-pressable.test.mjs`. Spec already names the `tests/leaf-kit/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-72 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The three CHECK commands on archived slice-72 match `docs/specs/ui-framework/leaf-kit/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-72-leaf-kit-on-dom.md`

## Links

- [[slice-190-leaf-kit-check-paths]]
- [[ticket-177-slice-72-stale-check-paths]]
- [[slice-72-leaf-kit-on-dom]]
