---
id: "location-23-components"
title: "Components"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Components

## This is working when

A component is a function that runs once, creates signals, and returns a tree.

## Nested locations

- **Runs once**: this is working when the component function runs once, creates signals, and later writes flow through the graph.
  - bet: try run-once; pivot if the function re-runs on every state change like React
- **Props and children**: this is working when authoring is React-like to read: function components, props in, children in.
  - bet: try props and children in; pivot if subclassing Button into PrimaryButton becomes the model
- **Composition**: this is working when UI is nested children, not subclassing.
  - bet: try composition; pivot if Flutter-style widget subclassing becomes the public model
- **One tree**: this is working when there is one component tree, not a web tree and a native tree.
  - bet: try one component model; pivot if hosts fork the authoring tree
- **Retained identity**: this is working when the framework keeps retained component identity.
  - bet: try retained identity; pivot if identity is a virtual DOM diff
- **Not class components**: this is working when there are no class components for UI, no hooks, no Fiber, and no virtual DOM.
  - bet: try function plus signals; pivot if Widget, Element, Fiber node, or class component naming lands

## See also

- **Parent**: [[location-17-web-component-library]]
- **Signals**: [[location-24-signals]]
- **Render object**: [[location-27-render-object]]
- **Glossary**: [[glossary]]
- **Architecture**: [[architecture-layer-cake]]
