---
id: "test-web-layout"
title: "Web layout tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: web-layout
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-11"
---

# Web layout tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `web-layout.layout:not-pixel-identical` and `web-layout.dom:copy-idea-not-impeller`. Oracle commands:

- node --test tests/web-layout/no-taffy-on-web.test.mjs
- node --test tests/web-layout/no-impeller-dom.test.mjs

## Tests

- **tests/web-layout/no-taffy-on-web.test.mjs**: `this checkout does not force Taffy on web`
  - **How:** fails if this checkout forces Taffy on web
  - **Why:** promise `web-layout.layout:not-pixel-identical`
- **tests/web-layout/no-impeller-dom.test.mjs**: `this checkout does not treat the DOM backend as a pixel-identical Impeller or Skia clone`
  - **How:** fails if this checkout treats the DOM backend as a pixel-identical Impeller or Skia clone
  - **Why:** promise `web-layout.dom:copy-idea-not-impeller`

## Gaps

- CSS-on-web leaf oracles stay on [[test-leaf-kit]].
- Canvas and WASM web host oracles stay on [[test-dom-only-host]].
- CSS as native layout stays unfrozen on [[location-42-native-layout]].
