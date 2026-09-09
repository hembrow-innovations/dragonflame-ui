---
id: "location-49-android-embedder"
title: "Android embedder"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Android embedder

## This is working when

An Android host exists with no WebView and no JS engine.

## Nested locations

- **Window and GPU**: this is working when the Android embedder owns the window, vsync, and input, and the engine owns the GPU surface.
  - bet: try that split; pivot if a WebView shell owns the window
- **No WebView**: this is working when Android native is not a WebView shell.
  - bet: try a real Android embedder; pivot if Chromium Embedded is called native
- **No JS engine**: this is working when Android has no Hermes, JavaScriptCore, or V8. Tracing GC stays.
  - bet: try no JS engine; pivot if Hermes ships because React Native did
- **OEM hatch**: this is working when Android views are an escape hatch, not the default. See [[location-44-oem-escape-hatch]]
  - bet: try engine default plus view hatch; pivot if Android views are the native default
- **Triples**: this is working when Android arm64-v8a plus x86_64 emulator are in scope. See [[location-52-android-triples]]
  - bet: try those triples; pivot if a sitting names a different ABI set

## See also

- **Parent**: [[location-19-mobile-embedders]]
- **After desktop**: [[location-47-after-desktop]]
- **Gradle shell**: [[location-50-xcode-gradle-shells]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Architecture**: [[architecture-layer-cake]]
