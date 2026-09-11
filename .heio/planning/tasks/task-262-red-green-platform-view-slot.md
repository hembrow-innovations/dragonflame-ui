---
id: "task-262-red-green-platform-view-slot"
title: "Red-green: platform-view slot"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-261-red-green-canvas-default"
sprint: "native-if-funded"
slice: "slice-79-oem-hatch-slot"
tags: []
created_at: "2026-09-11T07:41:56Z"
updated_at: "2026-09-11T07:41:56Z"
---

# Red-green: platform-view slot

## Blocked by

[[task-261-red-green-canvas-default]]: canvas default first.

## Done

The layer tree holds a platform-view layer with a slot id. The adapter is native-only. No JS bridge.

## Context

TDD: write the O2 tests named in the OEM hatch spec. Red, then implement. Engine layer tree accepts kind `platform-view`. Occupying the hatch is a slot id, not an OS view class. Adapter lives in the engine crate, not the JS package. One packed `extern "C"` submit. Packed-scene field names stay unnamed.

Do not add public `AndroidView`, `UiKitView`, `HtmlElementView`, `NSView`, or `HWND`. Do not add a web OEM host. Do not add async Bridge, platform channels, or JSI. Do not attach iOS or Android views. That is [[slice-84-platform-view-hatch]]. Do not implement offset, clip, or transform as a public compositor kit.

## Verify

O2 command named in the OEM hatch spec test.md passes.

scope: tests/ named by that spec, plus engine layer-tree slot this task must add

## Links

- [[slice-79-oem-hatch-slot]]
- [[task-261-red-green-canvas-default]]

## Gauntlet

- round 1: `node --test tests/oem-hatch/platform-view-slot.test.mjs` win. Promise the composite tree accepts a platform-view layer with no JS bridge.
