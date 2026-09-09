---
id: "task-96-red-green-image-scroll"
title: "Red-green: image and scroll"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-95-red-green-view-text-style"
sprint: "web-tracers"
slice: "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T20:16:49Z"
---

# Red-green: image and scroll

## Blocked by

[[task-95-red-green-view-text-style]]: view and text first.

## Done

Image and scroll leaves render on DOM.

## Context

TDD: failing tests/leaf-image-scroll.test.mjs, red, implement, green. Extra leaf types outside the closed set must fail a contract test if added. Do not add HTML leaves.

## Verify

`node --test tests/leaf-image-scroll.test.mjs` pass.

scope: library host leaves, tests/leaf-image-scroll.test.mjs

## Links

- [[slice-72-leaf-kit-on-dom]]
- [[task-95-red-green-view-text-style]]

## Gauntlet

- **round 1**: `node --test tests/leaf-image-scroll.test.mjs` win. Gap: none.
