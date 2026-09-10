---
id: "task-225-align-slice-125-check-paths"
title: "Align slice-125 CHECK paths"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-224-component-check-paths"
tags: []
created_at: "2026-09-10T22:07:00Z"
updated_at: "2026-09-10T22:11:00Z"
---

# Align slice-125 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-125-component-model-honesty]] oracle CHECK and EVIDENCE lines name `tests/component-model/no-class-components.test.mjs`, `tests/component-model/no-fiber-vdom.test.mjs`, and `tests/component-model/no-forked-tree.test.mjs`.

## Context

[[ticket-192-slice-125-stale-check-paths]]: CHECK commands still name missing flat `tests/no-class-components.test.mjs`, `tests/no-fiber-vdom.test.mjs`, and `tests/no-forked-tree.test.mjs`. Spec already names the `tests/component-model/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-125 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The three CHECK commands on archived slice-125 match `docs/specs/ui-framework/component-model/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-125-component-model-honesty.md`

## Links

- [[slice-224-component-check-paths]]
- [[ticket-192-slice-125-stale-check-paths]]
- [[slice-125-component-model-honesty]]
