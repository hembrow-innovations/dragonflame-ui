---
id: "purpose-render-object"
title: "Render object purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for render object honesty. Immutable config without Flutter Widget as the retained node, and Component stays the function."
status: active
domain: ui-framework
area: render-object
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Render object purpose

## Job

The render object already retains. Nested honesty is immutable config without Flutter Widget as the retained node, and Component stays the function while Render object stays the retained node.

Planning sitting [[rounds-136-render-object-honesty]] and [[intent]]:

- **Honesty nested bets**: immutable config without Flutter Widget as the retained node, and Component stays the function while Render object stays the retained node. Retained node and write-properties are already named.
- **Intent**: one component model. Flutter-shaped framework library in Draconic.
- **Architecture**: the Framework library keeps retained render objects. [[glossary]] Render object avoids Flutter Widget as the retained node. Component is a function and avoids Widget, Element, and Fiber node.

## In scope

Child destination sentences from [[location-27-render-object]]:

- **Immutable config**: component configs are cheap and render objects persist. Flutter Widget is not the retained node.
- **Not the component**: Component stays the function and Render object stays the retained node.

This area's oracles prove this checkout does not treat Flutter Widget as the retained node, and does not name Widget or Element as the collapse of Component and Render object. They do not prove retained-node persist. Those live on [[purpose-counter]]. They do not prove same-host-node patch. Those live on [[purpose-dom-patch]]. They do not prove Fiber as component identity. Those live on [[purpose-component-model]]. They do not prove Fiber as ownership. Those live on [[purpose-owner]]. They do not prove no public RenderObject type. Those live on [[purpose-composite]].

## Out of scope

- A public Widget.
- A public Element.
- A public RenderObject type.
- Layout, paint, or hit-test algorithms.
- Repeating retained-node oracles. Those live on [[purpose-counter]].
- Repeating same-host-node patch oracles. Those live on [[purpose-dom-patch]].
- Repeating Fiber identity oracles. Those live on [[purpose-component-model]].
- Repeating Fiber ownership oracles. Those live on [[purpose-owner]].
- Repeating no-public-RenderObject oracles. Those live on [[purpose-composite]].
- Native hosts.
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui package. Callers keep `h`, `render`, the closed leaf kit, and ui.Signal. They do not import Widget. They do not subclass a retained node. They do not construct a RenderObject.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-136-render-object-honesty]], [[intent]], [[location-27-render-object]], [[architecture-layer-cake]], and [[glossary]].

## Open product questions

- (none)
