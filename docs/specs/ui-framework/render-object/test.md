---
id: "test-render-object"
title: "Render object tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: render-object
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Render object tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `render-object.retain:no-widget` and `render-object.names:no-collapse`. Oracle commands:

- node --test tests/no-widget-retain.test.mjs
- node --test tests/no-collapsed-render-names.test.mjs

## Tests

- **tests/no-widget-retain.test.mjs**: `this checkout does not treat Flutter Widget as the retained node`
  - **How:** fails if this checkout treats Flutter Widget as the retained node, or adds a public Widget
  - **Why:** promise `render-object.retain:no-widget`
- **tests/no-collapsed-render-names.test.mjs**: `this checkout does not name Widget or Element as the collapse of Component and Render object`
  - **How:** fails if this checkout names Widget or Element as the collapse of Component and Render object, or adds a public Element
  - **Why:** promise `render-object.names:no-collapse`

## Gaps

- Retained-node oracles stay on [[test-counter]].
- Same-host-node patch oracles stay on [[test-dom-patch]].
- Fiber identity oracles stay on [[test-component-model]].
- Fiber ownership oracles stay on [[test-owner]].
- No-public-RenderObject oracles stay on [[test-composite]].
- Layout, paint, and hit-test algorithms stay unfrozen.
