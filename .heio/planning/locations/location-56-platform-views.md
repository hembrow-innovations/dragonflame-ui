---
id: "location-56-platform-views"
title: "Platform views"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Platform views

## This is working when

Platform views exist as an escape hatch, not the default.

## Nested locations

- **Escape hatch**: this is working when platform views are an escape hatch, not the default.
  - bet: try hatch not default; pivot if OEM views become the native default
- **Composite slot**: this is working when the layer tree can hold a platform-view layer.
  - bet: try a platform-view layer; pivot if platform views need an async Bridge
- **OEM adapter**: this is working when the adapter is native-only. See [[location-44-oem-escape-hatch]]
  - bet: try native-only OEM; pivot if platform views are the web host
- **Single UI thread**: this is working when heavy work is off the UI thread and platform views stay an escape hatch, not the default.
  - bet: try hatch; pivot if platform views are how all native UI is built

## See also

- **Parent**: [[location-19-mobile-embedders]]
- **OEM escape hatch**: [[location-44-oem-escape-hatch]]
- **Idea**: [[overview-ui-framework]]
- **Architecture**: [[architecture-layer-cake]]
