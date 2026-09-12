---
id: "slice-296-one-vsync"
title: "One vsync"
kind: slice
status: met
sprint: "framework-in-draconic"
blocked_by:
  - "slice-292-tickers-beside-pipeline"
tags: []
created_at: "2026-09-12T10:30:00Z"
updated_at: "2026-09-12T05:42:28Z"
---

# One vsync

## Why

Prove clocks share one embedder vsync. On web that vsync is requestAnimationFrame. They do not each have their own time source.

## Done

One vsync comes from the embedder. On web that vsync is requestAnimationFrame. Clocks share that one vsync. They do not each have their own time source. Callers keep `Clock`. No public Ticker. No public SchedulerBinding. No public AnimationController. No public VsyncPort.

## Blocked by

[[slice-292-tickers-beside-pipeline]]: vsync tickers sit beside the pipeline first so this sitting can lock shared vsync without repeating that oracle.

## Non-goals

Native embedder vsync driving `Clock`. Repeating rAF oracles. Repeating tickers-beside-pipeline oracles. Repeating desktop window vsync oracles. Public Ticker. Public SchedulerBinding. Public AnimationController. Public VsyncPort. Implementing the compiler.

## Oracle checklist

- [x] O1: clocks share one vsync
  CHECK: node --test tests/animation-clocks/one-vsync.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/animation-clocks/one-vsync.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-297-spec-one-vsync]]
- [[task-298-red-green-one-vsync]]

## See also

- [[location-60-animation-clocks]]
- [[location-17-web-component-library]]
- [[purpose-animation-clocks]]
- [[contract-animation-clocks]]
- [[test-animation-clocks]]
- [[purpose-desktop-embedder]]
- [[rounds-295-freeze-one-vsync]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
- [[slice-74-raf-clock]]
- [[slice-292-tickers-beside-pipeline]]
