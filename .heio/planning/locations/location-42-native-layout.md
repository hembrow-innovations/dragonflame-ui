---
id: "location-42-native-layout"
title: "Native layout"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Native layout

## This is working when

Native layout is Taffy in the Rust engine, not user CSS.

## Nested locations

- **Taffy**: this is working when native layout is Taffy in the Rust engine.
  - bet: try Taffy; pivot if Yoga or a Draconic layout crate is revived after the wayfinder answer
- **Constraints**: this is working when layout takes incoming constraints and is an engine primitive with a frozen algorithm and tests, not user CSS on native.
  - bet: try constraint layout in the engine; pivot if CSS becomes the native layout runtime
- **Web keeps CSS**: this is working when web layout stays CSS. See [[location-31-web-layout]]
  - bet: try CSS on web and Taffy on native; pivot if one algorithm is forced for pixel-identical hosts
- **Signals do not replace layout**: this is working when signals do not replace constraint layout.
  - bet: try layout as its own phase; pivot if signal writes are treated as layout

## See also

- **Parent**: [[location-18-native-engine-desktop]]
- **Web layout**: [[location-31-web-layout]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Architecture**: [[architecture-layer-cake]]
- **Idea**: [[overview-ui-framework]]
