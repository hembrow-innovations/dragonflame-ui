---
id: "slice-79-oem-hatch-slot"
title: "OEM hatch slot"
kind: slice
status: active
sprint: "native-if-funded"
blocked_by:
  - "slice-77-draw-a-rect"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T08:01:42Z"
---

# OEM hatch slot

## Why

Hatch demo. Canvas host remains default. Layer tree can hold a platform-view slot.

## Done

OEM widgets are available as a native-only adapter and are not the default host. The composite tree accepts a platform-view layer. No JS bridge required for the slot.

## Blocked by

[[slice-77-draw-a-rect]]: canvas default exists first.

## Non-goals

OEM as the native default. Web host as OEM. OEM widget class lists. Public `AndroidView`, `UiKitView`, `HtmlElementView`, `NSView`, or `HWND`. iOS and Android view attach. Offset, clip, and transform as a public compositor kit. Async Bridge.

## Oracle checklist

- [x] O1: canvas remains default
  CHECK: node --test tests/oem-hatch/canvas-default.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/oem-hatch/canvas-default.test.mjs; 1 pass 0 fail
- [x] O2: platform-view slot exists
  CHECK: node --test tests/oem-hatch/platform-view-slot.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/oem-hatch/platform-view-slot.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-260-spec-oem-hatch]]
- [[task-261-red-green-canvas-default]]
- [[task-262-red-green-platform-view-slot]]

## See also

- [[location-44-oem-escape-hatch]]
- [[location-43-native-canvas-host]]
- [[location-37-rust-engine]]
- [[location-56-platform-views]]
- [[rounds-259-freeze-oem-hatch-slot]]
- [[rounds-01-chart-framework]]
- [[architecture-layer-cake]]
- [[glossary]]
