---
id: "test-dom-patch"
title: "DOM patch tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: dom-patch
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-11"
---

# DOM patch tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `dom-patch.style:signal-write` and `dom-patch.children:signal-write`. Oracle commands:

- node --test tests/dom-patch/patch-style.test.mjs
- node --test tests/dom-patch/patch-children.test.mjs

## Tests

- **tests/dom-patch/patch-style.test.mjs**: `style signal write patches the same host node`
  - **How:** a StyleSheet-shaped `style` ui.Signal write patches the same retained host node that already had style at mount
  - **Why:** promise `dom-patch.style:signal-write`
- **tests/dom-patch/patch-children.test.mjs**: `children signal write patches one child under the same parent`
  - **How:** a ui.Signal in `props.children` holds one host vnode. A write patches that child under the same retained parent
  - **Why:** promise `dom-patch.children:signal-write`

## Gaps

- No test yet for `dom-patch.component:run-once`, `dom-patch.authoring:h-props`, `dom-patch.structure:forbid-show-for`, `dom-patch.children:forbid-array`, `dom-patch.api:forbid-public-patch`, `dom-patch.attr:forbid-src-value`, or `dom-patch.component:forbid-vdom`.
- The two oracle tests are not in the repo yet. This folder is ladder only.
- No test yet for child-list patch of a changing array. That is not this slice.
