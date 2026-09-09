---
id: "contract-dom-patch"
title: "DOM patch contract"
kind: contract
description: "Durable, plain-language promises for style and children patch on a retained DOM host node. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: dom-patch
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# DOM patch contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `dom-patch.style:signal-write`: A StyleSheet-shaped `style` signal write patches the same retained host node. Components write properties onto the render object rather than recreating it each frame.
  test: style signal write patches the same host node
- `dom-patch.children:signal-write`: A children signal write patches one host vnode in `props.children` under the same retained parent. Children stay in `props.children` as one host vnode in a ui.Signal.
  test: children signal write patches one child under the same parent
- `dom-patch.component:run-once`: The component function does not re-run. Later writes flow through the graph.
- `dom-patch.authoring:h-props`: First authoring is `h(type, props)` calls.
- `dom-patch.structure:forbid-show-for`: There is no Show and no keyed For.
- `dom-patch.children:forbid-array`: There is no child-list patch of a changing array.
- `dom-patch.api:forbid-public-patch`: There is no public patch or reconcile API.
- `dom-patch.attr:forbid-src-value`: Image `src` and input `value` are not the attribute this area patches.
- `dom-patch.component:forbid-vdom`: There is no virtual DOM.
