---
id: "task-93-red-green-unmount"
title: "Red-green: unmount disposes"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-92-spec-owner"
sprint: "web-tracers"
slice: "slice-71-unmount-disposes"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Red-green: unmount disposes

## Blocked by

[[task-92-spec-owner]]: spec first.

## Done

Unmount disposes effects and nested owners.

## Context

TDD: failing tests/owner-dispose.test.mjs, red, implement Owner, green. Then slice-71 oracle. No Fiber. No Element dirty flag.

## Verify

`node --test tests/owner-dispose.test.mjs` pass.

scope: library owner module, tests/owner-dispose.test.mjs

## Links

- [[slice-71-unmount-disposes]]
- [[task-92-spec-owner]]
