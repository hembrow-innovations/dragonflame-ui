---
id: "contract-native-feed"
title: "Native feed contract"
kind: contract
description: "Durable, plain-language promises for native feed. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: native-feed
tags: [contract]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Native feed contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

Keep `style-as-data.style:forbid-css-language` and `style-as-data.style:forbid-css-engine` on [[contract-style-as-data]]. Keep `leaf-kit.style:stylesheet-shaped` on [[contract-leaf-kit]]. Keep `ffi-scene-commands.layout:taffy` on [[contract-ffi-scene-commands]]. Do not repeat them here.

The native-feed oracle is `node --test tests/native-feed/objects-feed-layout-paint.test.mjs`.

## Behaviour

- `native-feed.style:objects-feed-layout-paint`: On native those objects feed layout and paint. Callers still use `StyleSheet.create`. This package does not expose a public feed mapper, LayoutEngine, or Taffy types.
  test: on native those objects feed layout and paint
