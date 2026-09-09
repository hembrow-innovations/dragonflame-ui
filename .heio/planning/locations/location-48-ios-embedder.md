---
id: "location-48-ios-embedder"
title: "iOS embedder"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# iOS embedder

## This is working when

An iOS host exists with no WebView and no JS engine.

## Nested locations

- **Window and GPU**: this is working when the iOS embedder owns the window, vsync, and input, and the engine owns the GPU surface.
  - bet: try that split; pivot if WKWebView owns the window
- **No WKWebView**: this is working when iOS native is not WKWebView, Cordova, Capacitor, or Expo-web-in-WKWebView.
  - bet: try a real iOS embedder; pivot if WebView is called native
- **No JS engine**: this is working when iOS has no Hermes, JavaScriptCore, or V8. Tracing GC stays.
  - bet: try no JS engine; pivot if JSC is kept because UIKit is nearby
- **OEM hatch**: this is working when UIView is an escape hatch, not the default. See [[location-44-oem-escape-hatch]]
  - bet: try engine default plus UIView hatch; pivot if UIView is the native default
- **Triples**: this is working when iOS arm64 device plus simulator are in scope. See [[location-51-ios-triples]]
  - bet: try those triples; pivot if a sitting names a different device set

## See also

- **Parent**: [[location-19-mobile-embedders]]
- **After desktop**: [[location-47-after-desktop]]
- **Xcode shell**: [[location-50-xcode-gradle-shells]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Architecture**: [[architecture-layer-cake]]
