---
id: "task-90-red-green-static-h"
title: "Red-green: static h() on DOM"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-89-spec-counter"
sprint: "web-tracers"
slice: "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-10T12:30:00Z"
---

# Red-green: static h() on DOM

## Blocked by

[[task-89-spec-counter]]: spec first.

## Done

`h(type, props)` text appears in the DOM on the JS backend.

## Context

Current: package imports, no renderer. Desired: static hyperscript text on DOM.

TDD: write failing `tests/counter-static-h.test.mjs`, run, see red, implement hyperscript plus DOM create, green. Retained render object may appear if the test requires it. Do not implement signal patch yet. Do not copy emit sources from the sibling toolchain. If sibling CLI flags cannot be named from existing docs, stop and leave a ticket. Do not invent flags.

## Verify

`node --test tests/counter-static-h.test.mjs` pass.

scope: library hyperscript, DOM renderer, tests/counter-static-h.test.mjs

## Gauntlet

- **round 1**: `node --test tests/counter-static-h.test.mjs` win. Gap: none.

## Links

- [[slice-70-counter-on-dom]]
- [[task-89-spec-counter]]
