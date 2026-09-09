---
id: "purpose-component-model"
title: "Component model purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for component model honesty. One tree, not class components."
status: active
domain: ui-framework
area: component-model
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Component model purpose

## Job

Function components already mount. Nested honesty is one tree, not class components.

Planning sitting [[rounds-124-component-model-honesty]] and [[intent]]:

- **Honesty nested bets**: one tree, not class components. Runs once, props and children, and composition are already named.
- **Intent**: one component model. Same components, two hosts.
- **Architecture**: one component model authored once, compiled twice. App layer is function components and signals. One component tree, not a web tree and a native tree.

## In scope

Child destination sentences from [[location-23-components]]:

- **One tree**: there is one component tree, not a web tree and a native tree.
- **Not class components**: there are no class components for UI, no hooks, no Fiber, and no virtual DOM.

This area locks Fiber as a component identity, with class components, hooks, and virtual DOM. [[purpose-owner]] names Fiber as ownership. Owner-dispose Fiber oracles stay on that folder.

This area's oracles prove no class components for UI, no hooks, no public Component class, no Fiber as a component identity, no virtual DOM, and no second authoring tree. They do not prove run-once, owner dispose, or JSX absence. [[purpose-counter]] and [[purpose-composite]] already assert `counter.component:forbid-vdom`, `composite.component:forbid-vdom`, and `composite.tree:one` without tests; this folder owns the lock.

## Out of scope

- A public Component class.
- Web tree and native tree factories.
- Show.
- For.
- Native hosts.
- Repeating run-once oracles. Those live on [[purpose-counter]] and [[purpose-composite]].
- Repeating owner-dispose Fiber oracles. Those live on [[purpose-owner]].
- Repeating JSX parser oracles. Those live on [[purpose-absence]].
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui package. Callers keep `h`, `render`, the closed leaf kit, and ui.Signal. They do not subclass Component. They do not import a web tree and a native tree.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-124-component-model-honesty]], [[intent]], [[location-23-components]], and [[architecture-layer-cake]].

## Open product questions

- (none)
