---
id: "task-101-red-green-raf"
title: "Red-green: rAF clock"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-100-spec-raf"
sprint: "web-tracers"
slice: "slice-74-raf-clock"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T20:44:45Z"
---

# Red-green: rAF clock

## Blocked by

[[task-100-spec-raf]]: spec first.

## Done

Clock ticks from requestAnimationFrame. Signals still replace build dirtying only.

## Context

TDD: failing tests/raf-clock.test.mjs, red, implement framework clock, green. Then slice-74 oracle. Engine does not own animation state.

## Verify

`node --test tests/raf-clock.test.mjs` pass.

scope: library clocks module, tests/raf-clock.test.mjs

## Links

- [[slice-74-raf-clock]]
- [[task-100-spec-raf]]

## Gauntlet

- **round 1**: `node --test tests/raf-clock.test.mjs` win. 2 pass. Done line holds.
