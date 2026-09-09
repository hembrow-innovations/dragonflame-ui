---
id: "contract-owner"
title: "Owner contract"
kind: contract
description: "Durable, plain-language promises for owner dispose. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: owner
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Owner contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `owner.dispose:unmount`: An ownership node exists for effects and nested reactive scopes, and unmount disposes effects and nested owners.
  test: unmount disposes effects and nested owners
- `owner.dispose:forbid-fiber`: There is no Fiber and no Flutter Element dirty flag.
- `owner.dispose:forbid-inherited-widget`: Nested reactive scope is not an InheritedWidget dirty bit. Native persist is not a second ownership model.
