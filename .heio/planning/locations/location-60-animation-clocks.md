---
id: "location-60-animation-clocks"
title: "Animation clocks"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Animation clocks

## This is working when

The Framework library has animation clocks, and vsync tickers sit in the copied pipeline, without replacing layout, hit-test, compositing, gesture arena, or semantics.

## Nested locations

- **Framework clocks**: this is working when animation clocks live in the Draconic Framework library, not in the Rust engine.
  - bet: try clocks in the framework; pivot if the engine owns animation state
- **Vsync tickers**: this is working when vsync tickers exist beside the pipeline, layers, input, and a11y copy.
  - bet: try vsync tickers; pivot if animations poll without embedder vsync
- **One vsync**: this is working when one vsync comes from the embedder, and on web vsync is `requestAnimationFrame`.
  - bet: try one vsync; pivot if each clock has its own time source
- **Signals do not replace tickers**: this is working when signals replace build dirtying only.
  - bet: try clocks plus signals; pivot if setState dirtying returns as the ticker

## See also

- **Web parent**: [[location-17-web-component-library]]
- **Native parent**: [[location-18-native-engine-desktop]]
- **Threads**: [[location-45-threads]]
- **Glossary**: [[glossary]]
- **Architecture**: [[architecture-layer-cake]]
- **Idea**: [[overview-ui-framework]]
