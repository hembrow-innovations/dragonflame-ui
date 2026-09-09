---
id: "slice-71-unmount-disposes"
title: "Unmount disposes"
kind: slice
status: frozen
sprint: "web-tracers"
blocked_by:
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Unmount disposes

## Why

Lifecycle demo. Unmount disposes effects and nested owners.

## Done

Unmounting the counter tree disposes effects and nested owners. No Fiber. No Element dirty flag.

## Blocked by

[[slice-70-counter-on-dom]]: need a tree to unmount.

## Non-goals

InheritedWidget, native persist as a second ownership model.

## Oracle checklist

- [ ] O1: unmount disposes
  CHECK: node --test tests/owner-dispose.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

- [[task-92-spec-owner]]
- [[task-93-red-green-unmount]]

## See also

- [[location-25-owner]]
