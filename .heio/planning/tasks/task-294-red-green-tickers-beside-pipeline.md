---
id: "task-294-red-green-tickers-beside-pipeline"
title: "Red-green tickers beside pipeline"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-293-spec-tickers-beside-pipeline"
sprint: "framework-in-draconic"
slice: "slice-292-tickers-beside-pipeline"
tags: []
created_at: "2026-09-12T09:20:00Z"
updated_at: "2026-09-12T09:20:00Z"
---

# Red-green tickers beside pipeline

## Blocked by

[[task-293-spec-tickers-beside-pipeline]]: ladder must lock the leftover promises before tests.

## Done

`node --test tests/animation-clocks/tickers-beside-pipeline.test.mjs` and `node --test tests/animation-clocks/no-engine-animation-state.test.mjs` pass.

## Context

Callers keep `Clock`. Tickers sit beside pipeline, layers, input, and a11y. A ticker tick is not layout, hit-test, compositing, gesture arena, or a semantics pass. The engine crate does not own animation state. setState is not the ticker.

Do not add a public Ticker, SchedulerBinding, or AnimationController. Do not retarget `Clock` onto desktop embedder vsync. Do not repeat rAF clock tests. Do not repeat signals-are-not-layout tests. Do not repeat desktop vsync-window tests.

TDD: red tests, then the smallest green that locks the two oracles.

## Verify

Both oracle commands pass. No public Ticker. No public SchedulerBinding. No public AnimationController.

scope: tests/animation-clocks/ src/clocks/ crates/engine/

## Links

- [[slice-292-tickers-beside-pipeline]]
- [[task-293-spec-tickers-beside-pipeline]]
- [[location-60-animation-clocks]]
- [[purpose-animation-clocks]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green tickers beside pipeline and no engine animation state.

**Intent (required when product behaviour changes):**
- Promise ids: `animation-clocks.tickers:beside-pipeline`, `animation-clocks.engine:forbid-owned-state`, `animation-clocks.tickers:forbid-setstate`
- Purpose: [[purpose-animation-clocks]] after the spec task
- Contract-first: tests named in test.md must pass

**Current behavior:**
`Clock` ticks from rAF. Beside-pipeline, engine-owned animation state, and setState-as-ticker have no tests.

**Desired behavior:**
The two oracle commands pass. Callers still import `Clock`. Tickers are not pipeline phases. Engine does not own animation state. setState is not the ticker.

**Key interfaces:**
- Existing `Clock(onTick) => stop`
- No public Ticker, SchedulerBinding, or AnimationController

**Acceptance criteria:**
- [ ] `node --test tests/animation-clocks/tickers-beside-pipeline.test.mjs` passes
- [ ] `node --test tests/animation-clocks/no-engine-animation-state.test.mjs` passes
- [ ] No public Ticker, SchedulerBinding, or AnimationController
- [ ] rAF clock tests still pass

**Out of scope:**
- Native embedder vsync driving Clock
- Repeating rAF oracles
- Repeating signal-dirtying pipeline oracles
- Repeating desktop vsync-window oracles
- Implementing the compiler
