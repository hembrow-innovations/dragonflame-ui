---
id: "test-web-may-use-css"
title: "Web may use CSS tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: web-may-use-css
tags: [test]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Web may use CSS tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `web-may-use-css.style:css-because-browser-has-it`. Oracle commands:

- node --test tests/web-may-use-css/css-because-browser-has-it.test.mjs

## Tests

- **tests/web-may-use-css/css-because-browser-has-it.test.mjs**: `web may use CSS because the browser already has it`
  - **How:** fails unless web may use CSS because the browser already has it. Callers still use `StyleSheet.create`. Fails if this checkout grows a public `css` tagged template, a public `parseCss`, CSS source strings as style, a public mapper, a public LayoutEngine, or one CSS engine for both hosts. Does not point CHECK at `tests/leaf-kit/leaf-view-text-style.test.mjs`
  - **Why:** promise `web-may-use-css.style:css-because-browser-has-it`

## Gaps

- StyleSheet-shaped oracles stay on [[test-leaf-kit]].
- CSS-on-web leaf oracles stay on [[test-leaf-kit]].
- CSS language and CSS engine honesty oracles stay on [[test-style-as-data]].
- not-pixel-identical and copy-DOM-idea oracles stay on [[test-web-layout]].
- Native feed stays on [[test-native-feed]].
- StyleSheet shape freeze stays on [[location-33-style-as-data]].
- Do not invent a public `css` tagged template, public `parseCss`, CSS source strings as style, a public mapper, or a public LayoutEngine.
