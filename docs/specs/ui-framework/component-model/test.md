---
id: "test-component-model"
title: "Component model tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: component-model
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-11"
---

# Component model tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `component-model.class:no-class`, `component-model.identity:no-fiber-vdom`, and `component-model.tree:one`. Oracle commands:

- node --test tests/component-model/no-class-components.test.mjs
- node --test tests/component-model/no-fiber-vdom.test.mjs
- node --test tests/component-model/no-forked-tree.test.mjs

## Tests

- **tests/component-model/no-class-components.test.mjs**: `this checkout does not add class components for UI`
  - **How:** fails if this checkout adds class components for UI, hooks, or a public Component class
  - **Why:** promise `component-model.class:no-class`
- **tests/component-model/no-fiber-vdom.test.mjs**: `this checkout does not add Fiber as a component identity or a virtual DOM`
  - **How:** fails if this checkout adds Fiber as a component identity or a virtual DOM
  - **Why:** promise `component-model.identity:no-fiber-vdom`
- **tests/component-model/no-forked-tree.test.mjs**: `this checkout does not add a second authoring tree`
  - **How:** fails if this checkout adds a web tree and a native tree as separate authoring trees
  - **Why:** promise `component-model.tree:one`

## Gaps

- Run-once oracles stay on [[test-counter]] and [[test-composite]].
- Owner Fiber-as-ownership oracles stay on [[test-owner]].
- JSX parser oracles stay on [[test-absence]].
