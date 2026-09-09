---
id: "location-31-web-layout"
title: "Web layout"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Web layout

## This is working when

Web layout is CSS because the browser already has it.

## Nested locations

- **CSS on web**: this is working when web layout is CSS.
  - bet: try CSS on web; pivot if web is forced onto Taffy to chase pixel-identical native
- **Not CSS on native**: this is working when CSS is not the native layout runtime. See [[location-42-native-layout]]
  - bet: try CSS only on web; pivot if CSS is treated as iOS or Android layout
- **Not pixel-identical**: this is working when web versus native is allowed to disagree, because web is CSS on the DOM and native is Taffy in the engine.
  - bet: try honest disagreement; pivot if a sitting demands pixel-identical web and native
- **Copy DOM backend idea**: this is working when the DOM backend is copied as an idea, not as an attempt to make DOM look like Impeller.
  - bet: try a DOM backend; pivot if Flutter HTML renderer pixel-matching is the goal

## See also

- **Parent**: [[location-17-web-component-library]]
- **Native layout**: [[location-42-native-layout]]
- **Idea**: [[overview-ui-framework]]
- **Architecture**: [[architecture-layer-cake]]
