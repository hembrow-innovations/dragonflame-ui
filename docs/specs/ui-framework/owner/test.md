---
id: "test-owner"
title: "Owner tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: owner
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Owner tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `owner.dispose:unmount`. Oracle command:

- node --test tests/owner-dispose.test.mjs

## Tests

- **tests/owner-dispose.test.mjs**: `unmount disposes effects and nested owners`
  - **How:** unmounting the counter tree disposes effects and nested owners. An ownership node exists for those effects and nested reactive scopes
  - **Why:** promise `owner.dispose:unmount`

## Gaps

- No test yet for `owner.dispose:forbid-fiber` or `owner.dispose:forbid-inherited-widget`.
