---
id: "contract-animation-clocks"
title: "Animation clocks contract"
kind: contract
description: "Durable, plain-language promises for Framework animation clocks on web rAF. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: animation-clocks
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-12"
---

# Animation clocks contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `animation-clocks.framework:in-library`: Animation clocks live in the Draconic Framework library, not in the Rust engine.
  test: rAF clock ticks
- `animation-clocks.vsync:web-raf`: One vsync comes from the embedder, and on web vsync is requestAnimationFrame.
  test: rAF clock ticks
- `animation-clocks.vsync:one-source`: Clocks share one embedder vsync and the same t. They do not each have their own time source.
  test: two Clock subscribers share one embedder vsync and the same t
- `animation-clocks.signals:not-tickers`: Signals replace build dirtying only.
  test: signals replace build dirtying only
- `animation-clocks.tickers:beside-pipeline`: Vsync tickers exist beside the pipeline, layers, input, and a11y copy.
  test: vsync tickers exist beside the pipeline
- `animation-clocks.engine:forbid-owned-state`: The engine does not own animation state.
  test: engine does not own animation state
- `animation-clocks.tickers:forbid-setstate`: setState is not the ticker.
  test: setState is not the ticker
