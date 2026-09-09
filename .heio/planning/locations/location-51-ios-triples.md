---
id: "location-51-ios-triples"
title: "iOS triples"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# iOS triples

## This is working when

iOS arm64 device plus simulator are in scope.

## Nested locations

- **arm64 device**: this is working when iOS arm64 device is in scope.
  - bet: try arm64 device; pivot if a sitting names a different device set
- **Simulator**: this is working when iOS simulator is in scope.
  - bet: try simulator plus device; pivot if simulator-only is treated as done
- **Not toolchain D04**: this is working when these triples are this product's mobile packaging, not toolchain D04.
  - bet: try product packaging; pivot if triples are filed on the language ROADMAP

## See also

- **Parent**: [[location-19-mobile-embedders]]
- **iOS embedder**: [[location-48-ios-embedder]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Idea**: [[overview-ui-framework]]
