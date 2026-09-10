---
id: "test-leaf-kit"
title: "Leaf kit tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: leaf-kit
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-11"
---

# Leaf kit tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `leaf-kit.set:closed`, `leaf-kit.layout:css-on-web`, `leaf-kit.style:stylesheet-shaped`, and `leaf-kit.text:is-leaf`. Oracle commands:

- node --test tests/leaf-kit/leaf-view-text-style.test.mjs
- node --test tests/leaf-kit/leaf-image-scroll.test.mjs
- node --test tests/leaf-kit/leaf-input-pressable.test.mjs

## Tests

- **tests/leaf-kit/leaf-view-text-style.test.mjs**: `view and text with style data on CSS`
  - **How:** view and text leaves render on DOM. Style is StyleSheet-shaped objects. Web layout is CSS
  - **Why:** promises `leaf-kit.set:closed`, `leaf-kit.layout:css-on-web`, `leaf-kit.style:stylesheet-shaped`, and `leaf-kit.text:is-leaf`
- **tests/leaf-kit/leaf-image-scroll.test.mjs**: `image and scroll`
  - **How:** image and scroll leaves render on DOM
  - **Why:** promise `leaf-kit.set:closed`
- **tests/leaf-kit/leaf-input-pressable.test.mjs**: `text input and pressable`
  - **How:** text input and pressable leaves render on DOM
  - **Why:** promise `leaf-kit.set:closed`

## Gaps

- No test yet for `leaf-kit.host:config-at-leaves`, `leaf-kit.text:per-host-metrics`, `leaf-kit.set:forbid-html`, `leaf-kit.layout:forbid-taffy-on-web`, `leaf-kit.style:forbid-css-engine`, `leaf-kit.layout:not-pixel-identical`, or `leaf-kit.host:forbid-jsi-hermes`.
- The three oracle tests are not in the repo yet. This folder is ladder only.
- No test yet that extra leaf types outside the closed set fail.
