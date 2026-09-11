---
id: "purpose-oem-hatch"
title: "OEM hatch purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the OEM hatch. Canvas remains default. Platform-view layer with a slot id. Native-only adapter. No JS bridge."
status: active
domain: ui-framework
area: oem-hatch
tags: [purpose]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# OEM hatch purpose

## Job

OEM widgets are an escape hatch, not the default host.

Planning sitting [[rounds-259-freeze-oem-hatch-slot]], [[location-44-oem-escape-hatch]], and [[rounds-01-chart-framework]] answer 6:

- **Answer 6**: custom Rust engine. OEM widgets are an escape hatch.
- **Default host**: canvas draw list. A packed scene with no hatch still records that list.
- **Layer kind**: `platform-view` from [[architecture-layer-cake]].
- **Occupancy**: a slot id on that layer, not an OS view class.
- **Adapter**: native-only in the engine crate. No JS bridge.
- **Submit**: one packed scene. Packed-scene field names stay unnamed.

## In scope

Child destination sentences from [[location-44-oem-escape-hatch]]:

- **Not the default**: native default is the custom Rust engine, with OEM widgets as an escape hatch only if native UI is funded.
- **Native-only adapter**: OEM views are UIView, Android views, and desktop counterparts as a native-only adapter.
- **Platform views**: platform views are an escape hatch, not the default. See [[location-56-platform-views]]
- **Layer tree slot**: the composite layer tree can hold a platform-view layer.

This area's oracles prove canvas remains default and that a `platform-view` layer can occupy a slot id. They do not prove UIView or Android view attach. That is [[slice-84-platform-view-hatch]]. They do not prove Taffy-rect or GPU-not-UI. Those live on [[purpose-ffi-scene-commands]]. They do not prove no-webview or no-js-engine. Those live on [[purpose-desktop-embedder]]. They do not prove not-every-UIKit-class. Those live on [[purpose-host-leaves]].

## Out of scope

- OEM widget class lists.
- Public `AndroidView`, `UiKitView`, `HtmlElementView`, `NSView`, or `HWND` types.
- A web OEM host.
- Offset, clip, or transform as a public compositor kit.
- Async Bridge, platform channels, or JSI for the slot.
- iOS and Android view attach.
- Packed-scene field names.
- A public `occupyHatch`. Public `OffsetLayer`, `PictureLayer`, or `PlatformViewLayer`.
- Repeating Taffy-rect or GPU-not-UI oracles. Those live on [[purpose-ffi-scene-commands]].
- Repeating no-webview or no-js-engine oracles. Those live on [[purpose-desktop-embedder]].
- Repeating not-every-UIKit-class oracles. Those live on [[purpose-host-leaves]].
- Implementing the compiler in this repo.

## Surfaces

App code this tracer still submits one packed scene. Default records a canvas draw list. Tests occupy a hatch by giving the engine a `platform-view` layer with a slot id. Callers do not import `NSView`. Callers do not import `AndroidView`. Callers do not import a JS bridge. The web package does not export the adapter.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-259-freeze-oem-hatch-slot]], [[rounds-01-chart-framework]], [[location-44-oem-escape-hatch]], [[location-43-native-canvas-host]], [[location-56-platform-views]], and [[architecture-layer-cake]].

## Open product questions

- (none)
