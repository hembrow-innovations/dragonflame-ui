---
id: "location-52-android-triples"
title: "Android triples"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Android triples

## This is working when

Android arm64-v8a plus x86_64 emulator are in scope.

## Nested locations

- **arm64-v8a**: this is working when Android arm64-v8a is in scope.
  - bet: try arm64-v8a; pivot if a sitting names a different ABI set
- **x86_64 emulator**: this is working when Android x86_64 emulator is in scope.
  - bet: try emulator plus device ABI; pivot if emulator-only is treated as done
- **Not toolchain D04**: this is working when these triples are this product's mobile packaging, not toolchain D04.
  - bet: try product packaging; pivot if triples are filed on the language ROADMAP

## See also

- **Parent**: [[location-19-mobile-embedders]]
- **Android embedder**: [[location-49-android-embedder]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Idea**: [[overview-ui-framework]]
