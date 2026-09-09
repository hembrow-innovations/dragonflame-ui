---
id: "task-110-red-green-composite-children"
title: "Red-green: composite children"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-109-red-green-composite-h"
sprint: "web-tracers"
slice: "slice-107-composite-on-dom"
tags: []
created_at: "2026-09-10T22:30:00Z"
updated_at: "2026-09-10T22:30:00Z"
---

# Red-green: composite children

## Blocked by

[[task-109-red-green-composite-h]]: function type mounts first.

## Done

`props.children` nest through a composite onto DOM.

## Context

TDD: failing tests/composite-children.test.mjs, red, pass children through a composite to host leaves, green. Children stay in `props.children`. No Show. No keyed For. No extra `h` child arguments. Nested children are host leaves or further composites, not HTML.

## Verify

`node --test tests/composite-children.test.mjs` pass.

scope: src/renderer/, tests/composite-children.test.mjs

## Links

- [[slice-107-composite-on-dom]]
- [[task-109-red-green-composite-h]]
