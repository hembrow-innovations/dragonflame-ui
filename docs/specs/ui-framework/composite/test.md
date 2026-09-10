---
id: "test-composite"
title: "Composite tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: composite
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-11"
---

# Composite tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `composite.h:function-type`, `composite.children:nest`, and `composite.component:run-once`. Oracle commands:

- node --test tests/composite/composite-h.test.mjs
- node --test tests/composite/composite-children.test.mjs
- node --test tests/composite/composite-run-once.test.mjs

## Tests

- **tests/composite/composite-h.test.mjs**: `function type mounts to host leaves`
  - **How:** a function type used as `h(type, props)` receives props and mounts through to host leaves on DOM
  - **Why:** promise `composite.h:function-type`
- **tests/composite/composite-children.test.mjs**: `props.children nest through the composite onto DOM`
  - **How:** nested children in `props.children` pass through a composite and appear on DOM
  - **Why:** promise `composite.children:nest`
- **tests/composite/composite-run-once.test.mjs**: `composite function did not re-run on a text patch`
  - **How:** after a text patch, the composite function has not run again. Properties are written onto a retained node
  - **Why:** promise `composite.component:run-once`

## Gaps

- No test yet for `composite.authoring:props-children`, `composite.composition:nested-children`, `composite.tree:one`, `composite.identity:retained`, `composite.shared:over-leaves`, `composite.dom:patch-children`, `composite.structure:forbid-show-for`, `composite.render:forbid-public-type`, `composite.authoring:forbid-jsx`, `composite.set:forbid-html`, `composite.authoring:forbid-extra-children`, `composite.authoring:forbid-compose`, or `composite.component:forbid-vdom`.
- The three oracle tests are not in the repo yet. This folder is ladder only.
- No test yet for child-list patch of a changing array. That is not this slice.
