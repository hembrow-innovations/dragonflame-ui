---
id: "task-95-red-green-view-text-style"
title: "Red-green: view text style"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-94-spec-leaf-kit"
sprint: "web-tracers"
slice: "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T20:11:33Z"
---

# Red-green: view text style

## Blocked by

[[task-94-spec-leaf-kit]]: spec first.

## Done

View and text on DOM with CSS and style data.

## Context

TDD: failing tests/leaf-view-text-style.test.mjs, red, implement view and text leaves plus style-as-data, green. Host config stays only at the adapter. Portable code does not import document.

## Verify

`node --test tests/leaf-view-text-style.test.mjs` pass.

scope: library host leaves, style module, tests/leaf-view-text-style.test.mjs

## Links

- [[slice-72-leaf-kit-on-dom]]
- [[task-94-spec-leaf-kit]]

## Gauntlet

- **round 1**: `node --test tests/leaf-view-text-style.test.mjs` win. Gap: none.
