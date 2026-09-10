---
id: "test-host-leaves"
title: "Host leaves tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: host-leaves
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Host leaves tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `host-leaves.set:forbid-html` and `host-leaves.set:forbid-uikit`. Oracle commands:

- node --test tests/no-html-leaves.test.mjs
- node --test tests/no-uikit-leaves.test.mjs

## Tests

- **tests/no-html-leaves.test.mjs**: `this checkout does not add HTML leaves`
  - **How:** fails if this checkout adds HTML leaves
  - **Why:** promise `host-leaves.set:forbid-html`
- **tests/no-uikit-leaves.test.mjs**: `this checkout does not treat every UIKit class as the leaf set`
  - **How:** fails if this checkout treats every UIKit class as the leaf set
  - **Why:** promise `host-leaves.set:forbid-uikit`

## Gaps

- Six-leaf oracles stay on [[test-leaf-kit]].
- Composite oracles stay on [[test-composite]].
- Host-config compile-time split stays unfrozen on [[location-35-host-config]].
