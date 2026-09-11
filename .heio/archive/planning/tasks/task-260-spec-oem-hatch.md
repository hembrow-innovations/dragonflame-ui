---
id: "task-260-spec-oem-hatch"
title: "Spec OEM hatch"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "native-if-funded"
slice: "slice-79-oem-hatch-slot"
tags: []
created_at: "2026-09-11T07:41:56Z"
updated_at: "2026-09-11T07:50:00Z"
---

# Spec OEM hatch

## Blocked by

None.

## Done

OEM hatch spec folder exists from [[location-44-oem-escape-hatch]], [[location-43-native-canvas-host]], [[architecture-layer-cake]], and [[rounds-259-freeze-oem-hatch-slot]]: canvas remains default, platform-view layer with a slot id, native-only adapter, no JS bridge.

## Context

Write purpose, contract, and test.md from [[rounds-259-freeze-oem-hatch-slot]] and [[location-44-oem-escape-hatch]]. Quote child destination sentences.

First tracer: one packed scene submit. Default host is the canvas draw list. Layer kind is `platform-view`. Occupying the hatch is a slot id on that layer. Adapter is native-only in the engine crate. No JS bridge. Packed-scene field names stay unnamed.

Do not invent OEM widget class lists. Do not invent public `AndroidView`, `UiKitView`, `HtmlElementView`, `NSView`, or `HWND` types. Do not invent a web OEM host. Do not invent offset, clip, or transform as a public compositor kit. Do not repeat Taffy-rect or GPU-not-UI oracles. Those live on [[purpose-ffi-scene-commands]]. Do not repeat no-webview or no-js-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not repeat not-every-UIKit-class oracles. Those live on [[purpose-host-leaves]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/oem-hatch/

## Links

- [[slice-79-oem-hatch-slot]]
- [[rounds-259-freeze-oem-hatch-slot]]
- [[location-44-oem-escape-hatch]]
