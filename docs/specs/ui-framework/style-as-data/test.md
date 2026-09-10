---
id: "test-style-as-data"
title: "Style as data tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: style-as-data
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Style as data tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `style-as-data.style:forbid-css-language` and `style-as-data.style:forbid-css-engine`. Oracle commands:

- node --test tests/no-css-language.test.mjs
- node --test tests/no-css-engine.test.mjs

## Tests

- **tests/no-css-language.test.mjs**: `this checkout does not treat style as a CSS language in the framework`
  - **How:** fails if this checkout treats style as a CSS language in the framework
  - **Why:** promise `style-as-data.style:forbid-css-language`
- **tests/no-css-engine.test.mjs**: `this checkout does not map style objects through a CSS engine product`
  - **How:** fails if this checkout maps style objects through a CSS engine product
  - **Why:** promise `style-as-data.style:forbid-css-engine`

## Gaps

- StyleSheet-shaped oracles stay on [[test-leaf-kit]].
- Style-patch oracles stay on [[test-dom-patch]].
- no-Taffy-on-web oracles stay on [[test-web-layout]].
- Native objects feeding Taffy and paint stay unfrozen on [[location-42-native-layout]].
- CSS as native layout stays unfrozen on [[location-42-native-layout]].
