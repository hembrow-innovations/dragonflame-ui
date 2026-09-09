---
id: "contract-composite"
title: "Composite contract"
kind: contract
description: "Durable, plain-language promises for composite function components on DOM. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: composite
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Composite contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `composite.h:function-type`: A function type used as `h(type, props)` receives props and children and mounts to host leaves.
  test: function type mounts to host leaves
- `composite.children:nest`: Nested children in `props.children` appear on DOM through the composite.
  test: props.children nest through the composite onto DOM
- `composite.component:run-once`: The composite function runs once. A text patch does not re-run it. Later writes flow through the graph. Components write properties onto the render object rather than recreating it each frame.
  test: composite function did not re-run on a text patch
- `composite.authoring:props-children`: Authoring is React-like to read: function components, props in, children in. Children stay in `props.children`. First authoring is `h(type, props)` calls.
- `composite.composition:nested-children`: UI is nested children, not subclassing.
- `composite.tree:one`: There is one component tree, not a web tree and a native tree.
- `composite.identity:retained`: The framework keeps retained component identity.
- `composite.shared:over-leaves`: Shared code is composite components and host leaves are a closed set.
- `composite.dom:patch-children`: Emitted JavaScript creates elements and patches text, attributes, and children.
- `composite.structure:forbid-show-for`: There is no Show and no keyed For.
- `composite.render:forbid-public-type`: There is no public RenderObject type.
- `composite.authoring:forbid-jsx`: JSX is not treated as a present Draconic language feature.
- `composite.set:forbid-html`: HTML is not the leaf set.
- `composite.authoring:forbid-extra-children`: Children are not extra `h` arguments after props.
- `composite.authoring:forbid-compose`: There is no public compose helper.
- `composite.component:forbid-vdom`: There are no class components for UI, no hooks, no Fiber, and no virtual DOM.
