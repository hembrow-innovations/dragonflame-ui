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
updated_at: "2026-09-10"
---

# Animation clocks tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `animation-clocks.framework:in-library`, `animation-clocks.vsync:web-raf`, and `animation-clocks.signals:not-tickers`. Oracle command:

- node --test tests/raf-clock.test.mjs

## Tests

- **tests/raf-clock.test.mjs**: `rAF clock ticks`
  - **How:** an animation clock in the Framework library ticks from requestAnimationFrame
  - **Why:** promises `animation-clocks.framework:in-library` and `animation-clocks.vsync:web-raf`
- **tests/raf-clock.test.mjs**: `signals replace build dirtying only`
  - **How:** a clock tick comes from requestAnimationFrame. Signals replace build dirtying only. They are not the ticker
  - **Why:** promise `animation-clocks.signals:not-tickers`

## Gaps

- No test yet for `animation-clocks.tickers:beside-pipeline`, `animation-clocks.engine:forbid-owned-state`, or `animation-clocks.tickers:forbid-setstate`.
- No test yet for native embedder vsync.
