---
id: "location-27-render-object"
title: "Render object"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Render object

## This is working when

A retained layout, paint, and hit-test node exists, and components write properties onto it rather than recreating it each frame.

## Nested locations

- **Retained node**: this is working when the render object persists for layout, paint, and hit-test.
  - bet: try retained render objects; pivot if the retained node is a virtual DOM node
- **Immutable config**: this is working when component configs are cheap and render objects persist.
  - bet: try immutable config plus retained objects; pivot if Flutter Widget is treated as the retained node
- **Write properties**: this is working when components write properties onto the render object rather than recreating it each frame.
  - bet: try property writes; pivot if every update rebuilds the retained node
- **Not the component**: this is working when Component stays the function and Render object stays the retained node.
  - bet: try that split; pivot if Widget, Element, or Fiber node naming collapses them

## See also

- **Parent**: [[location-17-web-component-library]]
- **Components**: [[location-23-components]]
- **Glossary**: [[glossary]]
- **Architecture**: [[architecture-layer-cake]]
