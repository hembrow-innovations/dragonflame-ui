---
id: "purpose-web-layout"
title: "Web layout purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for web layout honesty. Not pixel-identical, copy the DOM backend as an idea not as Impeller."
status: active
domain: ui-framework
area: web-layout
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Web layout purpose

## Job

Web layout is already CSS. Nested honesty is not pixel-identical, and copy the DOM backend as an idea not as Impeller.

Planning sitting [[rounds-140-web-layout-honesty]] and [[intent]]:

- **Honesty nested bets**: not pixel-identical, and copy the DOM backend as an idea not as Impeller. CSS on web is already named.
- **Intent**: one component model, two hosts. Not CSS as the native layout runtime. This folder does not freeze that native destination.
- **Architecture**: pixel-identical web versus native is sacrificed, because web is CSS on the DOM and native is Taffy in the engine. Copy the idea of a DOM backend, not the attempt to make DOM look like Impeller.

## In scope

Child destination sentences from [[location-31-web-layout]]:

- **Not pixel-identical**: web versus native is allowed to disagree, because web is CSS on the DOM and native is Taffy in the engine.
- **Copy DOM backend idea**: copy the DOM backend as an idea, not as an attempt to make DOM look like Impeller.

Taffy on web is the pixel-identical pivot. This area's oracles prove this checkout does not force Taffy on web, and does not treat the DOM backend as a pixel-identical Impeller or Skia clone. They do not prove CSS on web. [[purpose-leaf-kit]] already locks that. [[purpose-leaf-kit]] asserts `leaf-kit.layout:not-pixel-identical` and `leaf-kit.layout:forbid-taffy-on-web` without tests; this folder owns the lock.

## Out of scope

- A public LayoutEngine.
- A pixel-match switch.
- Implementing Taffy.
- CSS as the native layout runtime. That destination is [[location-42-native-layout]].
- Repeating CSS-on-web leaf oracles. Those live on [[purpose-leaf-kit]].
- Repeating no-canvas and no-WASM oracles. Those live on [[purpose-dom-only-host]].
- Native hosts.
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui package on the web DOM host. Callers keep `h`, `render`, the closed leaf kit, and StyleSheet-shaped style. They do not import Taffy. They do not import a LayoutEngine. They do not ask web layout to match a native engine.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-140-web-layout-honesty]], [[intent]], [[location-31-web-layout]], [[architecture-layer-cake]], and [[overview-ui-framework]].

## Open product questions

- (none)
