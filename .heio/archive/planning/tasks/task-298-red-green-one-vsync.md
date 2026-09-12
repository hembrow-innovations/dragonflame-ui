---
id: "task-298-red-green-one-vsync"
title: "Red-green one vsync"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-297-spec-one-vsync"
sprint: "framework-in-draconic"
slice: "slice-296-one-vsync"
tags: []
created_at: "2026-09-12T10:30:00Z"
updated_at: "2026-09-12T16:50:00Z"
---

# Red-green one vsync

## Blocked by

[[task-297-spec-one-vsync]]: ladder must lock `animation-clocks.vsync:one-source` before tests.

## Done

`node --test tests/animation-clocks/one-vsync.test.mjs` passes.

## Context

Callers keep `Clock`. A private vsync owner fans one embedder pulse to every subscriber. Two `Clock` callbacks share one vsync and the same `t`. Stopping one leaves the other ticking. Last stop cancels the pulse. Web adapter is requestAnimationFrame. Clock owns subscribe and stop. The private source owns the pulse.

Do not add a public Ticker, SchedulerBinding, AnimationController, or VsyncPort. Do not retarget `Clock` onto desktop embedder vsync. Do not repeat rAF clock tests. Do not repeat tickers-beside-pipeline tests. Do not repeat desktop vsync-window tests.

TDD: red test, then the smallest green that locks the oracle.

## Verify

The oracle command passes. No public Ticker. No public SchedulerBinding. No public AnimationController. No public VsyncPort.

scope: tests/animation-clocks/ src/clocks/

## Links

- [[slice-296-one-vsync]]
- [[task-297-spec-one-vsync]]
- [[location-60-animation-clocks]]
- [[purpose-animation-clocks]]
- [[rounds-295-freeze-one-vsync]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green shared one-vsync: two Clock subscribers share one embedder pulse.

**Intent (required when product behaviour changes):**
- Promise ids: `animation-clocks.vsync:one-source`
- Purpose: [[purpose-animation-clocks]] after the spec task
- Contract-first: the test named in test.md must pass

**Current behavior:**
Each `Clock` call starts its own `requestAnimationFrame` loop in `src/clocks/clock.js`. Shared one-vsync has no test.

**Desired behavior:**
The oracle command passes. Callers still import `Clock`. Two subscribers share one pulse and the same `t`. A private vsync owner is the later native bind point. Native embedder vsync is not implemented.

**Key interfaces:**
- Existing `Clock(onTick) => stop`
- Private vsync owner under `src/clocks/`, not exported
- No public Ticker, SchedulerBinding, AnimationController, or VsyncPort

**Acceptance criteria:**
- [x] `node --test tests/animation-clocks/one-vsync.test.mjs` passes
- [x] Two `Clock` subscribers share one vsync and the same `t`
- [x] No public Ticker, SchedulerBinding, AnimationController, or VsyncPort
- [x] rAF clock tests still pass

**Out of scope:**
- Native embedder vsync driving Clock
- Repeating rAF oracles
- Repeating tickers-beside-pipeline oracles
- Repeating desktop vsync-window oracles
- Implementing the compiler

## Gauntlet

- **Round 1**: win. `node --test tests/animation-clocks/one-vsync.test.mjs` pass. Two Clock subscribers share one rAF pulse and the same t. Stop one leaves the other ticking. Last stop cancels. No public Ticker, SchedulerBinding, AnimationController, or VsyncPort. `raf-clock.test.mjs` still pass.
