---
id: "task-218-align-slice-116-check-paths"
title: "Align slice-116 CHECK paths"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-217-dom-patch-check-paths"
tags: []
created_at: "2026-09-10T21:55:34Z"
updated_at: "2026-09-10T21:55:34Z"
---

# Align slice-116 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-116-patch-attrs-children]] oracle CHECK and EVIDENCE lines name `tests/dom-patch/patch-style.test.mjs` and `tests/dom-patch/patch-children.test.mjs`.

## Context

[[ticket-187-slice-116-stale-check-paths]]: CHECK commands still name missing flat `tests/patch-style.test.mjs` and `tests/patch-children.test.mjs`. Spec already names the `tests/dom-patch/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-116 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The two CHECK commands on archived slice-116 match `docs/specs/ui-framework/dom-patch/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-116-patch-attrs-children.md`

## Links

- [[slice-217-dom-patch-check-paths]]
- [[ticket-187-slice-116-stale-check-paths]]
- [[slice-116-patch-attrs-children]]
