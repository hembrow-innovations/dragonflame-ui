---
id: "test-animation-clocks"
title: "Animation clocks tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: animation-clocks
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-12"
---

# Animation clocks tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `animation-clocks.framework:in-library`, `animation-clocks.vsync:web-raf`, `animation-clocks.signals:not-tickers`, `animation-clocks.tickers:beside-pipeline`, `animation-clocks.engine:forbid-owned-state`, and `animation-clocks.tickers:forbid-setstate`. Oracle commands:

- node --test tests/animation-clocks/raf-clock.test.mjs
- node --test tests/animation-clocks/tickers-beside-pipeline.test.mjs
- node --test tests/animation-clocks/no-engine-animation-state.test.mjs

The rAF command is the existing oracle. It is not a new oracle. Keep `animation-clocks.vsync:web-raf`.

## Tests

- **tests/animation-clocks/raf-clock.test.mjs**: `rAF clock ticks`
  - **How:** an animation clock in the Framework library ticks from requestAnimationFrame
  - **Why:** promises `animation-clocks.framework:in-library` and `animation-clocks.vsync:web-raf`
- **tests/animation-clocks/raf-clock.test.mjs**: `signals replace build dirtying only`
  - **How:** a clock tick comes from requestAnimationFrame. Signals replace build dirtying only. They are not the ticker
  - **Why:** promise `animation-clocks.signals:not-tickers`
- **tests/animation-clocks/tickers-beside-pipeline.test.mjs**: `vsync tickers exist beside the pipeline`
  - **How:** fails unless vsync tickers exist beside the pipeline, layers, input, and a11y copy. Callers keep `Clock`. A ticker tick is not layout, hit-test, compositing, gesture arena, or a semantics pass
  - **Why:** promise `animation-clocks.tickers:beside-pipeline`
- **tests/animation-clocks/no-engine-animation-state.test.mjs**: `engine does not own animation state`
  - **How:** fails unless the engine does not own animation state
  - **Why:** promise `animation-clocks.engine:forbid-owned-state`
- **tests/animation-clocks/no-engine-animation-state.test.mjs**: `setState is not the ticker`
  - **How:** fails unless setState is not the ticker
  - **Why:** promise `animation-clocks.tickers:forbid-setstate`

## Gaps

- No test yet for native embedder vsync driving `Clock`.
- Do not repeat signals-are-not-layout oracles. Those live on [[test-signal-dirtying]].
- Do not repeat desktop window vsync oracles. Those live on [[test-desktop-embedder]].
