---
id: "purpose-animation-clocks"
title: "Animation clocks purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for Framework animation clocks on web rAF. Clocks share one embedder vsync. Vsync tickers sit beside the pipeline. Engine does not own animation state. setState is not the ticker."
status: active
domain: ui-framework
area: animation-clocks
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-12"
---

# Animation clocks purpose

## Job

An animation clock in the Framework library ticks from requestAnimationFrame.

Planning sitting [[rounds-291-freeze-tickers-beside-pipeline]] and [[location-60-animation-clocks]]:

- **Vsync tickers**: vsync tickers exist beside the pipeline, layers, input, and a11y copy.
- **Engine**: the engine does not own animation state.
- **setState**: setState is not the ticker.
- **Public surface**: callers keep `Clock`. No public Ticker. No public SchedulerBinding. No public AnimationController.

Planning sitting [[rounds-295-freeze-one-vsync]] and [[location-60-animation-clocks]]:

- **One vsync**: one vsync comes from the embedder, and on web vsync is requestAnimationFrame. Clocks share that one vsync. They do not each have their own time source.
- **Public surface**: callers keep `Clock`. No public Ticker. No public SchedulerBinding. No public AnimationController. No public VsyncPort.

## In scope

Child destination sentences from [[location-60-animation-clocks]]:

- **Framework clocks**: animation clocks live in the Draconic Framework library, not in the Rust engine.
- **Vsync tickers**: vsync tickers exist beside the pipeline, layers, input, and a11y copy.
- **One vsync**: one vsync comes from the embedder, and on web vsync is `requestAnimationFrame`. Clocks share that one vsync. They do not each have their own time source.
- **Signals do not replace tickers**: signals replace build dirtying only.

This area's rAF oracle already proves an animation clock ticks from rAF. Two further oracles prove vsync tickers exist beside the pipeline, layers, input, and a11y copy, that the engine does not own animation state, and that setState is not the ticker. One further oracle proves two `Clock` subscribers share one embedder vsync and the same `t`. They do not prove native embedder vsync driving `Clock`. They do not repeat rAF. They do not repeat tickers-beside-pipeline. They do not repeat signals-are-not-layout. Those live on [[purpose-signal-dirtying]]. They do not repeat desktop window vsync. Those live on [[purpose-desktop-embedder]].

## Out of scope

- Native embedder vsync driving `Clock`. Do not retarget `Clock` onto desktop embedder vsync.
- Engine-owned animation state.
- setState as the ticker.
- A public Ticker.
- A public SchedulerBinding.
- A public AnimationController.
- A public VsyncPort.
- Repeating rAF oracles. Those live on this purpose. Keep `animation-clocks.vsync:web-raf`.
- Repeating tickers-beside-pipeline oracles. Those live on this purpose. Keep `animation-clocks.tickers:beside-pipeline`.
- Repeating signals-are-not-the-ticker oracles. Those live on this purpose. Keep `animation-clocks.signals:not-tickers`.
- Repeating signals-are-not-layout oracles. Those live on [[purpose-signal-dirtying]].
- Repeating desktop window vsync oracles. Those live on [[purpose-desktop-embedder]].
- Signals replacing constraint layout, hit-test, layer compositing, gesture arena, or semantics.
- Each clock having its own time source.
- Implementing the compiler in this repo.

## Surfaces

The animation clock on the web host. Callers keep `Clock`. They do not import `Ticker`. They do not import `SchedulerBinding`. They do not import `AnimationController`. They do not import `VsyncPort`.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[location-60-animation-clocks]], [[location-24-signals]], [[architecture-layer-cake]], [[rounds-291-freeze-tickers-beside-pipeline]], and [[rounds-295-freeze-one-vsync]].

## Open product questions

- (none)
