---
id: "task-222-align-slice-121-check-paths"
title: "Align slice-121 CHECK paths"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "web-hygiene"
slice: "slice-221-dom-only-host-check-paths"
tags: []
created_at: "2026-09-10T22:01:56Z"
updated_at: "2026-09-10T22:01:56Z"
---

# Align slice-121 CHECK paths

## Blocked by

None.

## Done

Archived [[slice-121-dom-only-web-host]] oracle CHECK and EVIDENCE lines name `tests/dom-only-host/no-web-canvas.test.mjs`, `tests/dom-only-host/no-wasm-web.test.mjs`, and `tests/dom-only-host/no-host-io-dom.test.mjs`.

## Context

[[ticket-188-slice-121-stale-check-paths]]: CHECK commands still name missing flat `tests/no-web-canvas.test.mjs`, `tests/no-wasm-web.test.mjs`, and `tests/no-host-io-dom.test.mjs`. Spec already names the `tests/dom-only-host/` paths. Those tests pass.

Rewrite only CHECK and EVIDENCE on the archived slice-121 file to the spec commands. Leave Done, Why, and Pool alone. Do not edit `docs/specs/`. Do not add or move tests. Do not add product code. Do not reopen `web-tracers`.

## Verify

The three CHECK commands on archived slice-121 match `docs/specs/ui-framework/dom-only-host/test.md` and each exits 0.

scope: `.heio/archive/planning/sprints/web-tracers/slice-121-dom-only-web-host.md`

## Links

- [[slice-221-dom-only-host-check-paths]]
- [[ticket-188-slice-121-stale-check-paths]]
- [[slice-121-dom-only-web-host]]
