---
id: "test-platform-views"
title: "Platform views tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: platform-views
tags: [test]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Platform views tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `platform-views.host:hatch-not-default` and `platform-views.ios:slot-occupied`. Oracle commands:

- node --test tests/platform-views/hatch-not-default.test.mjs
- node --test tests/platform-views/slot-occupied-on-ios.test.mjs

## Tests

- **tests/platform-views/hatch-not-default.test.mjs**: `occupying the hatch does not make OEM the default host`
  - **How:** occupying the hatch on iOS still leaves canvas as the default host. OEM is not how all native UI is built
  - **Why:** promise `platform-views.host:hatch-not-default`
- **tests/platform-views/slot-occupied-on-ios.test.mjs**: `iOS embedder occupies the existing platform-view slot with no async Bridge`
  - **How:** the iOS embedder occupies the existing `platform-view` slot by slot id. With a slot occupied it reports `layer-kind platform-view` and `slot-id`, and does not report a JS bridge. Simulator is the run oracle. Callers do not import a Bridge
  - **Why:** promise `platform-views.ios:slot-occupied`

## Gaps

- No test yet for `platform-views.types:forbid-os-views`, `platform-views.host:forbid-android-attach`, or `platform-views.host:forbid-web-oem`.
- Canvas-default and platform-view-slot oracles stay on [[test-oem-hatch]].
- No-webview, no-js-engine, and counter draw-list oracles stay on [[test-ios-embedder]].
- Public `UiKitView` absence as the only proof stays on [[contract-ios-embedder]].
- Android view attach stays unnamed this tracer.
