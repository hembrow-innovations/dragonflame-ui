---
id: "task-99-red-green-testid"
title: "Red-green: test ID pressable"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-98-spec-testid"
sprint: "web-tracers"
slice: "slice-73-testid-pressable"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Red-green: test ID pressable

## Blocked by

[[task-98-spec-testid]]: spec first.

## Done

A test finds pressable by test ID. A11y props present as first-class props.

## Context

TDD: failing tests/testid-a11y.test.mjs, red, implement, green. Then slice-73 oracle. Do not bolt props on after a second leaf pass.

## Verify

`node --test tests/testid-a11y.test.mjs` pass.

scope: library leaves, tests/testid-a11y.test.mjs

## Links

- [[slice-73-testid-pressable]]
- [[task-98-spec-testid]]
