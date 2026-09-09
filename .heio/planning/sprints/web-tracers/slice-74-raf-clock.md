---
id: "slice-74-raf-clock"
title: "rAF clock"
kind: slice
status: active
sprint: "web-tracers"
blocked_by:
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-10T06:40:00Z"
---

# rAF clock

## Why

Time-source demo. Clocks live in the Framework library. Web vsync is requestAnimationFrame.

## Done

An animation clock ticks from rAF. Signals still replace build dirtying only. The engine does not own animation state. There is no engine yet.

## Blocked by

[[slice-70-counter-on-dom]]: signals exist first.

## Non-goals

Engine-owned animation state. setState as ticker.

## Oracle checklist

- [ ] O1: rAF clock ticks
  CHECK: node --test tests/raf-clock.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/raf-clock.test.mjs: 2 pass

## Pool

- [[task-100-spec-raf]]
- [[task-101-red-green-raf]]

## See also

- [[location-60-animation-clocks]]
