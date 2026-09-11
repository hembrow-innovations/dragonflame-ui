---
id: "contract-oem-hatch"
title: "OEM hatch contract"
kind: contract
description: "Durable, plain-language promises for the OEM hatch. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: oem-hatch
tags: [contract]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# OEM hatch contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `oem-hatch.host:canvas-default`: Native default is the custom Rust engine canvas path. A packed scene with no hatch still records the canvas draw list. OEM widgets are an escape hatch, not the default host.
  test: canvas remains default
- `oem-hatch.layer:platform-view-slot`: The composite layer tree can hold a `platform-view` layer. Occupying the hatch is a slot id on that layer.
  test: platform-view slot exists
- `oem-hatch.adapter:native-only`: The OEM adapter is native-only in the engine crate. The hatch type does not live in the JS package. There is no JS bridge for the slot.
  test: platform-view slot exists
- `oem-hatch.types:forbid-os-views`: Public `AndroidView`, `UiKitView`, `HtmlElementView`, `NSView`, and `HWND` types stay unnamed.
- `oem-hatch.host:forbid-web-oem`: OEM is not a web host.
- `oem-hatch.kit:forbid-public-compositor`: Offset, clip, and transform layers are not a public compositor kit this tracer.
- `oem-hatch.classes:forbid-widget-lists`: OEM widget class lists stay unnamed.
