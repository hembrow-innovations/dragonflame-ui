---
id: "contract-a11y-test-ids"
title: "A11y test IDs contract"
kind: contract
description: "Durable, plain-language promises for first-class a11y and test ID props on web leaves. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: a11y-test-ids
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# A11y test IDs contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `a11y-test-ids.props:first-class`: Accessibility and test IDs are first-class props on the web package leaves, not bolted on after the host leaves.
  test: finds a pressable by test ID
  test: a11y props present as first-class props
- `a11y-test-ids.native:forbid-aria-only`: This area does not ship a native semantics tree and does not treat ARIA-only DOM as the native model.
