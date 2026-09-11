---
id: "slice-84-platform-view-hatch"
title: "Platform view hatch"
kind: slice
status: active
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-79-oem-hatch-slot"
  - "slice-80-ios-counter"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T22:12:57Z"
---

# Platform view hatch

## Why

Mobile wiring of the hatch slot owned by [[slice-79-oem-hatch-slot]]. Not a second OEM model.

## Done

A platform view can occupy the existing engine slot on iOS and is not how all native UI is built. Canvas remains the default host. No async Bridge.

## Blocked by

[[slice-79-oem-hatch-slot]] and [[slice-80-ios-counter]].

## Non-goals

Platform views as the native default. Async Bridge. Public `UiKitView` or `AndroidView`. Android view attach. Web OEM host. Repeating [[purpose-oem-hatch]] slot oracles. Repeating [[purpose-ios-embedder]] counter or no-webview oracles.

## Oracle checklist

- [x] O1: hatch not default
  CHECK: node --test tests/platform-views/hatch-not-default.test.mjs
  EXPECT: pass
  EVIDENCE: pass
- [x] O2: slot occupied on iOS
  CHECK: node --test tests/platform-views/slot-occupied-on-ios.test.mjs
  EXPECT: pass
  EVIDENCE: pass

## Pool

Durable links to task ids. Never drop them.

- [[task-280-spec-platform-views]]
- [[task-281-red-green-hatch-not-default]]
- [[task-282-red-green-slot-occupied-on-ios]]

## See also

- [[location-56-platform-views]]
- [[location-44-oem-escape-hatch]]
- [[location-48-ios-embedder]]
- [[purpose-oem-hatch]]
- [[purpose-ios-embedder]]
- [[rounds-279-freeze-platform-view-hatch]]
- [[architecture-layer-cake]]
- [[glossary]]
