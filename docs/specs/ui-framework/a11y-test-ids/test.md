---
id: "test-a11y-test-ids"
title: "A11y test IDs tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: a11y-test-ids
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# A11y test IDs tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `a11y-test-ids.props:first-class`. Oracle command:

- node --test tests/testid-a11y.test.mjs

## Tests

- **tests/testid-a11y.test.mjs**: `finds a pressable by test ID`
  - **How:** a pressable on the web leaves is found by test ID
  - **Why:** promise `a11y-test-ids.props:first-class`
- **tests/testid-a11y.test.mjs**: `a11y props present as first-class props`
  - **How:** accessibility and test IDs are first-class props on the web leaves, not bolted on after the host leaves
  - **Why:** promise `a11y-test-ids.props:first-class`

## Gaps

- No test yet for `a11y-test-ids.native:forbid-aria-only`.
- The oracle test is not in the repo yet. This folder is ladder only.
