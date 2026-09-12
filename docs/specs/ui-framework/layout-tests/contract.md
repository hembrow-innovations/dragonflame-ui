---
id: "contract-layout-tests"
title: "Layout tests contract"
kind: contract
description: "Durable, plain-language promises for the tests-location placement fence. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: layout-tests
tags: [contract]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Layout tests contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

Keep `ffi-scene-commands.layout:taffy` on [[contract-ffi-scene-commands]]. Keep `web-layout.layout:not-pixel-identical` and `web-layout.dom:copy-idea-not-impeller` on [[contract-web-layout]]. Do not repeat them here.

The placement oracle is `node --test tests/layout-tests/no-taffy-list.test.mjs`.

## Behaviour

- `layout-tests.placement:no-taffy-list`: This tests location does not invent a Taffy test list. Native is funded. Frozen-algorithm CHECKs stay on [[location-42-native-layout]] and [[contract-ffi-scene-commands]]. This location does not host a Taffy case list.
  test: this tests location does not invent a Taffy test list
