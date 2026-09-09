---
id: "location-44-oem-escape-hatch"
title: "OEM escape hatch"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# OEM escape hatch

## This is working when

OEM widgets are an escape hatch, not the default.

## Nested locations

- **Not the default**: this is working when native default is the custom Rust engine, with OEM widgets as an escape hatch only if native UI is funded.
  - bet: try custom engine first; pivot if OEM is forced as the default host
- **Native-only adapter**: this is working when OEM views are UIView, Android views, and desktop counterparts as a native-only adapter.
  - bet: try a native-only adapter; pivot if OEM views are the web host
- **Platform views**: this is working when platform views are an escape hatch, not the default. See [[location-56-platform-views]]
  - bet: try platform views as hatch; pivot if they become the default
- **Layer tree slot**: this is working when the composite layer tree can hold a platform-view layer.
  - bet: try a platform-view layer; pivot if OEM views require a JS bridge

## See also

- **Parent**: [[location-18-native-engine-desktop]]
- **Native canvas host**: [[location-43-native-canvas-host]]
- **Platform views**: [[location-56-platform-views]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Architecture**: [[architecture-layer-cake]]
- **Glossary**: [[glossary]]
