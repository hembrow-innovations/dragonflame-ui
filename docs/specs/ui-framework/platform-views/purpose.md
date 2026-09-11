---
id: "purpose-platform-views"
title: "Platform views purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for platform views. iOS occupy of the existing hatch slot. Occupying the hatch does not make OEM the default host. No async Bridge."
status: active
domain: ui-framework
area: platform-views
tags: [purpose]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Platform views purpose

## Job

A platform view occupies the existing engine slot on iOS as an escape hatch, not the default host.

Planning sitting [[rounds-279-freeze-platform-view-hatch]], [[location-56-platform-views]], [[location-44-oem-escape-hatch]], and [[purpose-oem-hatch]]:

- **Occupancy**: the iOS embedder occupies the existing `platform-view` slot by slot id from [[contract-oem-hatch]] `oem-hatch.layer:platform-view-slot`.
- **Not the default**: occupying the hatch does not make OEM the default host. Canvas remains the default host.
- **No async Bridge**: occupy is not an async Bridge, platform channel, or JSI.
- **Types**: public `UiKitView` stays unnamed.
- **Run oracle**: simulator, matching [[purpose-ios-embedder]].
- **Host tracer**: iOS. Android attach is not this tracer.

## In scope

Child destination sentences from [[location-56-platform-views]]:

- **Escape hatch**: platform views are an escape hatch, not the default.
- **Composite slot**: the layer tree can hold a platform-view layer.
- **OEM adapter**: the adapter is native-only. See [[location-44-oem-escape-hatch]]
- **Single UI thread**: heavy work is off the UI thread and platform views stay an escape hatch, not the default.

This area's oracles prove occupying the hatch does not make OEM the default host, and that the iOS embedder occupies the existing platform-view slot with no async Bridge. They do not prove a packed scene with no hatch still records the canvas draw list, or that a `platform-view` layer can occupy a slot id. Those live on [[purpose-oem-hatch]]. They do not prove no-webview, no-js-engine, or counter draw-list. Those live on [[purpose-ios-embedder]]. They do not prove Android view attach.

## Out of scope

- Public `AndroidView`, `UiKitView`, `HtmlElementView`, `NSView`, or `HWND` types.
- Android view attach.
- A web OEM host.
- Async Bridge, platform channels, or JSI for occupy.
- A public `occupyHatch`.
- OEM widget class lists.
- Offset, clip, or transform as a public compositor kit.
- Packed-scene field names.
- Repeating canvas-default or platform-view-slot oracles. Those live on [[purpose-oem-hatch]].
- Repeating no-webview, no-js-engine, or counter draw-list oracles. Those live on [[purpose-ios-embedder]].
- Repeating public `UiKitView` absence as the only proof. That lives on [[contract-ios-embedder]].
- Implementing the compiler in this repo.

## Surfaces

App code this tracer still submits one packed scene. Occupying the hatch is embedder occupancy of the existing slot by slot id. Occupying the hatch does not make OEM the default host. Callers do not import `UiKitView`. Callers do not import a Bridge. The web package does not export the adapter. Simulator is the run oracle.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-279-freeze-platform-view-hatch]], [[location-56-platform-views]], [[location-44-oem-escape-hatch]], [[location-43-native-canvas-host]], [[purpose-oem-hatch]], [[purpose-ios-embedder]], [[rounds-01-chart-framework]], and [[architecture-layer-cake]].

## Open product questions

- (none)
