---
id: "contract-component-model"
title: "Component model contract"
kind: contract
description: "Durable, plain-language promises for component model honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: component-model
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Component model contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `component-model.class:no-class`: There are no class components for UI, no hooks, and no public Component class.
  test: this checkout does not add class components for UI
- `component-model.identity:no-fiber-vdom`: There is no Fiber as a component identity and no virtual DOM.
  test: this checkout does not add Fiber as a component identity or a virtual DOM
- `component-model.tree:one`: There is one component tree, not a web tree and a native tree.
  test: this checkout does not add a second authoring tree
