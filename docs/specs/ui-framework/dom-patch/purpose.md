---
id: "purpose-dom-patch"
title: "DOM patch purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for style and children patch on a retained DOM host node."
status: active
domain: ui-framework
area: dom-patch
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# DOM patch purpose

## Job

A StyleSheet-shaped `style` signal write patches the same retained host node. A children signal write patches one host vnode under the same retained parent. The component function does not re-run.

## In scope

Child destination sentences from [[location-28-dom-renderer]] and [[location-27-render-object]]:

- **Create and patch**: emitted JavaScript creates elements and patches text, attributes, and children.
- **Write properties**: components write properties onto the render object rather than recreating it each frame.
- **Retained node**: the render object persists for layout, paint, and hit-test.

This area's oracles prove a StyleSheet-shaped `style` signal write on a node already styled at mount, and a `props.children` signal write of one host vnode under the same parent. They do not prove Show, keyed For, or child-list patch of a changing array. [[purpose-counter]] already says attribute patch and child patch are unproven. [[purpose-composite]] already forbids Show, keyed For, and child-list patch of a changing array.

Attribute is StyleSheet-shaped `style` already applied at mount. Children stay in `props.children` as one host vnode in a ui.Signal. Authoring stays `h(type, props)`.

## Out of scope

- Show.
- Keyed For.
- Child-list patch of a changing array.
- A public patch or reconcile API.
- Inventing image `src` or input `value`.
- Layout, paint, and hit-test algorithms.
- Virtual DOM.

## Surfaces

Style and children patch on the web DOM host.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[location-28-dom-renderer]], [[location-27-render-object]], and [[rounds-115-patch-attrs-children]].

## Open product questions

- (none)
