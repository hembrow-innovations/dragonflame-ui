---
id: "slice-73-testid-pressable"
title: "Test ID pressable"
kind: slice
status: met
sprint: "web-tracers"
blocked_by:
  - "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-10T14:30:00Z"
---

# Test ID pressable

## Why

First-class props demo, not bolted on after leaves.

## Done

Accessibility and test IDs are first-class props on the web leaves. A test finds a pressable by test ID.

## Blocked by

[[slice-72-leaf-kit-on-dom]]: pressable leaf exists first.

## Non-goals

ARIA-only as the native model. Native semantics tree is [[slice-83-talk-and-measure]].

## Oracle checklist

- [x] O1: test ID and a11y props
  CHECK: node --test tests/a11y-test-ids/testid-a11y.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/a11y-test-ids/testid-a11y.test.mjs; 2 pass 0 fail

## Pool

- [[task-98-spec-testid]]
- [[task-99-red-green-testid]]

## See also

- [[location-34-a11y-test-ids]]
