---
id: "contract-host-leaves"
title: "Host leaves contract"
kind: contract
description: "Durable, plain-language promises for host leaves honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: host-leaves
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Host leaves contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `host-leaves.set:forbid-html`: HTML is not the leaf set. This checkout does not add HTML leaves.
  test: this checkout does not add HTML leaves
- `host-leaves.set:forbid-uikit`: Every UIKit class is not the leaf set. This checkout does not treat every UIKit class as the leaf set.
  test: this checkout does not treat every UIKit class as the leaf set
