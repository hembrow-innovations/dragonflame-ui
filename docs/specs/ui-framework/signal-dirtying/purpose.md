---
id: "purpose-signal-dirtying"
title: "Signal dirtying purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for signal dirtying honesty. Build dirtying only, no setState Element subtree, no shared signal objects."
status: active
domain: ui-framework
area: signal-dirtying
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Signal dirtying purpose

## Job

Get and set already patch DOM. Nested honesty is build dirtying only, no setState Element subtree, and no shared signal objects.

Planning sitting [[rounds-128-signal-dirtying-honesty]] and [[intent]]:

- **Honesty nested bets**: build dirtying only for the pipeline, no setState Element subtree, no shared signal objects. Get and set and ui.Signal are already named.
- **Intent**: not setState as the dirty model.
- **Architecture**: signals replace the build dirtying mechanism only. They do not replace constraint layout, hit-test, layer compositing, gesture arena, or semantics. Workers never share a signal object.

## In scope

Child destination sentences from [[location-24-signals]]:

- **Build dirtying only**: signals replace the build dirtying mechanism only.
- **Local structure**: structural change is local, without setState dirtying an Element subtree.
- **No shared signal objects**: compute workers never share a signal object.

This area's oracles prove this checkout does not use setState or a React state hook as the dirty model, does not use signals as constraint layout, hit-test, layer compositing, gesture arena, or semantics, and does not share a signal object across workers. They do not prove get and set. [[purpose-counter]] already locks those. They do not prove signals are not the ticker. [[purpose-animation-clocks]] already locks that.

## Out of scope

- A public setState.
- A public useState.
- A public SharedSignal.
- Implementing Show or keyed For. Those oracles live on [[purpose-composite]] and [[purpose-dom-patch]].
- Repeating ticker-not-signal oracles. Those live on [[purpose-animation-clocks]].
- Repeating owner-dispose Fiber oracles. Those live on [[purpose-owner]].
- Repeating get and set oracles. Those live on [[purpose-counter]].
- Implementing compute workers. [[location-45-threads]] stays unfunded.
- Native hosts.
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui package. Callers keep `h`, `render`, the closed leaf kit, and ui.Signal. They do not call setState. They do not import SharedSignal. They do not drive layout from a signal.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-128-signal-dirtying-honesty]], [[intent]], [[location-24-signals]], and [[architecture-layer-cake]].

## Open product questions

- (none)
