---
id: "test-oem-hatch"
title: "OEM hatch tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: oem-hatch
tags: [test]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# OEM hatch tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `oem-hatch.host:canvas-default`, `oem-hatch.layer:platform-view-slot`, and `oem-hatch.adapter:native-only`. Oracle commands:

- node --test tests/oem-hatch/canvas-default.test.mjs
- node --test tests/oem-hatch/platform-view-slot.test.mjs

## Tests

- **tests/oem-hatch/canvas-default.test.mjs**: `canvas remains default`
  - **How:** a packed scene with no hatch still records the canvas draw list. OEM is not the default host. One packed scene submit
  - **Why:** promise `oem-hatch.host:canvas-default`
- **tests/oem-hatch/platform-view-slot.test.mjs**: `platform-view slot exists`
  - **How:** the layer tree holds a `platform-view` layer with a slot id. Adapter is native-only in the engine crate. No JS bridge. Callers do not import `NSView`. Callers do not import `AndroidView`. The web package does not export the adapter
  - **Why:** promises `oem-hatch.layer:platform-view-slot` and `oem-hatch.adapter:native-only`

## Gaps

- No test yet for `oem-hatch.types:forbid-os-views`, `oem-hatch.host:forbid-web-oem`, `oem-hatch.kit:forbid-public-compositor`, or `oem-hatch.classes:forbid-widget-lists`.
- Packed-scene field names stay unnamed.
- Taffy-rect and GPU-not-UI oracles stay on [[test-ffi-scene-commands]].
- No-webview and no-js-engine oracles stay on [[test-desktop-embedder]].
- Not-every-UIKit-class oracles stay on [[test-host-leaves]].
- iOS and Android view attach stays on [[slice-84-platform-view-hatch]].
