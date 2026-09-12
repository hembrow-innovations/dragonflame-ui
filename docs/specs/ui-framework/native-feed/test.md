---
id: "test-native-feed"
title: "Native feed tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: native-feed
tags: [test]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Native feed tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `native-feed.style:objects-feed-layout-paint`. Oracle commands:

- node --test tests/native-feed/objects-feed-layout-paint.test.mjs

## Tests

- **tests/native-feed/objects-feed-layout-paint.test.mjs**: `on native those objects feed layout and paint`
  - **How:** fails unless on native those objects feed layout and paint. Callers still use `StyleSheet.create`. Fails if this checkout grows a public feed mapper, LayoutEngine, or Taffy types. Does not point CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`
  - **Why:** promise `native-feed.style:objects-feed-layout-paint`

## Gaps

- StyleSheet-shaped oracles stay on [[test-leaf-kit]].
- CSS language and CSS engine honesty oracles stay on [[test-style-as-data]].
- Taffy-rect oracles stay on [[test-ffi-scene-commands]].
- Taffy and Constraints stay unfrozen on [[location-42-native-layout]].
- Do not invent a public feed mapper, LayoutEngine, or Taffy types.
