---
id: "purpose-animation-clocks"
title: "Animation clocks purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for Framework animation clocks on web rAF."
status: active
domain: ui-framework
area: animation-clocks
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Animation clocks purpose

## Job

An animation clock in the Framework library ticks from requestAnimationFrame.

## In scope

Child destination sentences from [[location-60-animation-clocks]]:

- **Framework clocks**: animation clocks live in the Draconic Framework library, not in the Rust engine.
- **Vsync tickers**: vsync tickers exist beside the pipeline, layers, input, and a11y copy.
- **One vsync**: one vsync comes from the embedder, and on web vsync is `requestAnimationFrame`.
- **Signals do not replace tickers**: signals replace build dirtying only.

This area's oracle proves an animation clock ticks from rAF. It does not prove native embedder vsync.

## Out of scope

- Native embedder vsync. That waits on funding. See [[slice-76-desktop-vsync-window]].
- Engine-owned animation state. There is no engine yet.
- setState as the ticker.
- Signals replacing constraint layout, hit-test, layer compositing, gesture arena, or semantics.
- Each clock having its own time source.
- Implementing the compiler in this repo.

## Surfaces

The animation clock on the web host.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[location-60-animation-clocks]], [[location-24-signals]], and [[architecture-layer-cake]].

## Open product questions

- (none)
