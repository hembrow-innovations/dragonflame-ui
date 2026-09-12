---
id: "purpose-aot-host-descriptors"
title: "AOT host descriptors purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for AOT host descriptors. Native leaf host descriptors are typed AOT FFI. Layout and measure stay synchronous on the Runtime job queue."
status: active
domain: ui-framework
area: aot-host-descriptors
tags: [purpose]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# AOT host descriptors purpose

## Job

Native leaf host descriptors are typed AOT FFI, and layout and measure stay synchronous on the Runtime job queue.

Planning sitting [[rounds-286-freeze-aot-host-descriptors]], [[location-35-host-config]], [[overview-ui-framework]], [[architecture-layer-cake]], and [[location-27-render-object]]:

- **New Architecture steal**: the steal is an immutable shadow tree, synchronous layout and measure on the UI thread, mounting separate from reconcile, typed host descriptors as AOT FFI, and in-process typed synchronous framework-to-host calls.
- **Steal list**: immutable shadow tree, synchronous layout and measure on the UI thread, mounting separate from reconcile, typed host descriptors as AOT FFI, in-process typed synchronous framework-to-host calls. Do not steal JSI. Do not steal Hermes.
- **UI thread**: the UI thread is the Runtime job queue. Framework, signals, layout, and paint-list recording run there.
- **Shadow tree default**: retained render objects plus immutable component config are the shadow tree.

## In scope

Destination sentences from [[location-35-host-config]], [[overview-ui-framework]], [[architecture-layer-cake]], [[location-27-render-object]], and [[location-45-threads]]:

- **New Architecture steal**: the steal is an immutable shadow tree, synchronous layout and measure on the UI thread, mounting separate from reconcile, typed host descriptors as AOT FFI, and in-process typed synchronous framework-to-host calls.
- **Typed AOT FFI**: native leaf host descriptors are compile-time typed FFI structs behind the leaf adapter, not JS host objects or string tags.
- **Sync layout and measure**: layout and measure run synchronously on the Runtime job queue. There is no JS shadow thread and no async Bridge for layout or measure.
- **UI thread is the Runtime job queue**: the UI thread is the Runtime job queue, and framework, signals, layout, and paint-list recording run there.
- **Not RN threads**: there is not a JS thread, a shadow thread, a UI thread, and a bridge.
- **Retained node**: the render object persists for layout, paint, and hit-test.
- **Immutable config**: component configs are cheap and render objects persist.

This area's oracles prove native leaves become compile-time typed FFI structs behind the leaf adapter, and that layout and measure run synchronously on the Runtime job queue with no JS shadow thread and no async Bridge. They do not prove no-JSI or no-Hermes. Those live on [[purpose-host-config]]. They do not prove Taffy-rect or GPU-not-UI. Those live on [[purpose-ffi-scene-commands]]. They do not prove run-once. Those live on [[purpose-counter]]. They do not prove no-Widget retained-node. Those live on [[purpose-render-object]]. [[purpose-host-config]] fences immutable shadow tree, AOT FFI, and UI-thread measure out of scope. This folder owns those.

## Out of scope

- A public HostConfig.
- A public ShadowTree.
- A public measure.
- A public reconcile.
- Repeating no-JSI or no-Hermes oracles. Those live on [[purpose-host-config]]. Keep `host-config.steal:forbid-jsi` and `host-config.steal:forbid-hermes`.
- Repeating Taffy-rect or GPU-not-UI oracles. Those live on [[purpose-ffi-scene-commands]].
- Repeating run-once oracles. Those live on [[purpose-counter]].
- Repeating no-Widget retained-node oracles. Those live on [[purpose-render-object]].
- Repeating no-shared-signal oracles. Those live on [[purpose-signal-dirtying]].
- StyleSheet objects feeding Taffy.
- Packed-scene field names.
- Descriptor field names.
- OEM widget class lists.
- A JS shadow thread as a product feature.
- Implementing LeafDesc.
- Implementing the compiler in this repo.

## Surfaces

The native host. Callers keep `h`, the closed leaf kit, and one packed submit. They do not import `HostConfig`. They do not import `ShadowTree`. They do not call `measure()`. Web callers keep `h` and DOM leaves. They never construct a host config.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-286-freeze-aot-host-descriptors]], [[location-35-host-config]], [[overview-ui-framework]], [[architecture-layer-cake]], [[location-27-render-object]], [[location-45-threads]], [[purpose-host-config]], and [[purpose-ffi-scene-commands]].

## Open product questions

- (none)
