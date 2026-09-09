---
id: "task-109-red-green-composite-h"
title: "Red-green: composite h"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-108-spec-composite"
sprint: "web-tracers"
slice: "slice-107-composite-on-dom"
tags: []
created_at: "2026-09-10T22:30:00Z"
updated_at: "2026-09-10T22:30:00Z"
---

# Red-green: composite h

## Blocked by

[[task-108-spec-composite]]: spec first.

## Done

`h(CompositeFn, props)` mounts through to host leaves. The composite function runs once. A text patch does not re-run it.

## Context

TDD: failing tests/composite-h.test.mjs and tests/composite-run-once.test.mjs, red, implement function-type expansion inside the existing renderer, green. Keep expansion private. Do not add a public `compose` helper. Do not add a public RenderObject type. Host leaves stay the closed set.

## Verify

`node --test tests/composite-h.test.mjs tests/composite-run-once.test.mjs` pass.

scope: src/renderer/, src/hyperscript/, tests/composite-h.test.mjs, tests/composite-run-once.test.mjs

## Links

- [[slice-107-composite-on-dom]]
- [[task-108-spec-composite]]
