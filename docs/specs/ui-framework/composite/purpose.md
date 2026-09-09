---
id: "purpose-composite"
title: "Composite purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for composite function components on DOM."
status: active
domain: ui-framework
area: composite
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Composite purpose

## Job

A function component used as `h(type, props)` receives props and children, returns host leaves, and nested children appear on DOM. The composite runs once. A text patch does not re-run it.

## In scope

Child destination sentences from [[location-23-components]], [[location-32-host-leaves]], [[location-27-render-object]], and [[location-28-dom-renderer]]. Authoring form from [[location-26-hyperscript]]:

- **Props and children**: authoring is React-like to read: function components, props in, children in. Children stay in `props.children`.
- **Composition**: UI is nested children, not subclassing.
- **One tree**: there is one component tree, not a web tree and a native tree.
- **Retained identity**: the framework keeps retained component identity.
- **Runs once**: the component function runs once, creates signals, and later writes flow through the graph.
- **Shared composites**: shared code is composite components and host leaves are a closed set.
- **Write properties**: components write properties onto the render object rather than recreating it each frame.
- **Patch children**: emitted JavaScript creates elements and patches text, attributes, and children.
- **h calls**: first authoring is `h(type, props)` calls. A function type is the composite. A string type is the host leaf.

This area's oracles prove a function type mounts to host leaves, nested `props.children` appear on DOM, and a text patch does not re-run the composite. They do not prove Show, keyed For, or child-list patch of a changing array.

## Out of scope

- Show.
- Keyed For.
- Widget subclassing.
- A public RenderObject type.
- Native hosts.
- JSX.
- HTML leaves.
- Extra `h` child arguments after props.
- A public `compose` helper.
- Class components, hooks, Fiber, and virtual DOM.

## Surfaces

Composite function components over the closed host leaf set on the web DOM host.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[location-23-components]], [[location-32-host-leaves]], [[location-27-render-object]], [[location-28-dom-renderer]], [[location-26-hyperscript]], and [[rounds-106-composite-props-children]].

## Open product questions

- (none)
