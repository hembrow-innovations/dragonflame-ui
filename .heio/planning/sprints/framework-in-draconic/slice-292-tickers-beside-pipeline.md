---
id: "slice-292-tickers-beside-pipeline"
title: "Tickers beside pipeline"
kind: slice
status: met
sprint: "framework-in-draconic"
blocked_by:
  - "slice-74-raf-clock"
tags: []
created_at: "2026-09-12T09:20:00Z"
updated_at: "2026-09-12T05:29:46Z"
---

# Tickers beside pipeline

## Why

Prove vsync tickers sit beside the copied pipeline, layers, input, and a11y. Clocks stay in the Framework library. They are not layout, hit-test, compositing, gesture arena, or semantics.

## Done

Vsync tickers exist beside the pipeline, layers, input, and a11y copy. Engine does not own animation state. setState is not the ticker. Callers keep `Clock`. No public Ticker. No public SchedulerBinding. No public AnimationController.

## Blocked by

[[slice-74-raf-clock]]: a Framework clock ticks from rAF so this sitting can lock beside-pipeline without repeating that oracle.

## Non-goals

Native embedder vsync driving `Clock`. Repeating rAF oracles. Repeating signals-are-not-the-ticker oracles. Repeating signals-are-not-layout oracles. Repeating desktop window vsync oracles. Each clock having its own time source. Implementing the compiler.

## Oracle checklist

- [x] O1: tickers beside pipeline
  CHECK: node --test tests/animation-clocks/tickers-beside-pipeline.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/animation-clocks/tickers-beside-pipeline.test.mjs; 1 pass 0 fail
- [x] O2: engine does not own animation state
  CHECK: node --test tests/animation-clocks/no-engine-animation-state.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/animation-clocks/no-engine-animation-state.test.mjs; 2 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-293-spec-tickers-beside-pipeline]]
- [[task-294-red-green-tickers-beside-pipeline]]

## See also

- [[location-60-animation-clocks]]
- [[location-17-web-component-library]]
- [[purpose-animation-clocks]]
- [[contract-animation-clocks]]
- [[test-animation-clocks]]
- [[purpose-signal-dirtying]]
- [[purpose-desktop-embedder]]
- [[rounds-291-freeze-tickers-beside-pipeline]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
- [[slice-74-raf-clock]]
