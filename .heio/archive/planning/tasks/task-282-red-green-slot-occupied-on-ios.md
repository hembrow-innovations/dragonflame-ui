---
id: "task-282-red-green-slot-occupied-on-ios"
title: "Red-green: slot occupied on iOS"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-281-red-green-hatch-not-default"
sprint: "mobile-after-desktop"
slice: "slice-84-platform-view-hatch"
tags: []
created_at: "2026-09-11T21:22:00Z"
updated_at: "2026-09-11T22:12:57Z"
---

# Red-green: slot occupied on iOS

## Blocked by

[[task-281-red-green-hatch-not-default]]: hatch not default first.

## Done

The iOS embedder occupies the existing platform-view slot by slot id. No async Bridge. No public `UiKitView`.

## Context

TDD: write the O2 tests named in the platform-views spec. Red, then implement. Reuse `engine::Adapter::native` and `hold(slot_id)` from [[slice-79-oem-hatch-slot]]. The iOS embedder owns occupancy. Engine owns compositing. Simulator is the run oracle.

Do not add public `UiKitView`, `AndroidView`, `HtmlElementView`, `NSView`, or `HWND`. Do not add async Bridge, platform channels, or JSI. Do not attach Android views. Do not add a web OEM host. Do not add a public `occupyHatch`. Do not repeat [[purpose-oem-hatch]] platform-view-slot. Do not repeat [[purpose-ios-embedder]] counter or no-webview oracles.

## Verify

O2 command named in the platform-views spec test.md passes.

scope: tests/ named by that spec, plus iOS embedder slot occupancy this task must add

## Links

- [[slice-84-platform-view-hatch]]
- [[task-281-red-green-hatch-not-default]]
- [[rounds-279-freeze-platform-view-hatch]]

## Gauntlet

- round 1: `node --test tests/platform-views/slot-occupied-on-ios.test.mjs` win. Promise the iOS embedder occupies the existing hatch slot with no async Bridge.
