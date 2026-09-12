---
id: "contract-ios-embedder"
title: "iOS embedder contract"
kind: contract
description: "Durable, plain-language promises for the iOS host. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: ios-embedder
tags: [contract]
created_at: "2026-09-11"
updated_at: "2026-09-12"
---

# iOS embedder contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `ios-embedder.window:embedder-owns`: The iOS embedder owns the window. The window is UIWindow. A thin Xcode shell exists at `hosts/ios/`. The iOS window lives in the existing embedder crate as an ios module.
  test: counter text shows on iOS simulator through engine draw lists
- `ios-embedder.vsync:embedder-supplies`: The embedder supplies one vsync. On iOS that vsync is CADisplayLink from the embedder. The engine is a vsync client.
  test: counter text shows on iOS simulator through engine draw lists
- `ios-embedder.gpu:engine-owns`: The engine owns the GPU surface. wgpu is used because native is funded.
  test: counter text shows on iOS simulator through engine draw lists
- `ios-embedder.counter:draw-lists`: The counter tracer is a native host binary that shows counter text through engine draw lists. Simulator is the run oracle. UIView is not the default leaf.
  test: counter text shows on iOS simulator through engine draw lists
- `ios-embedder.host:forbid-webview`: iOS native is not WKWebView, Cordova, Capacitor, or Expo-web-in-WKWebView.
  test: iOS native is not a WebView shell
- `ios-embedder.host:forbid-js-engine`: iOS has no Hermes, JavaScriptCore, or V8. Tracing GC stays.
  test: iOS native has no Hermes, JSC, or V8
- `ios-embedder.triples:simulator`: iOS simulator is in scope. Simulator is the run oracle.
  test: counter text shows on iOS simulator through engine draw lists
- `ios-embedder.triples:arm64-device`: iOS arm64 device is in scope as `aarch64-apple-ios` plus Xcode arm64 ARCHS. Simulator-only is not done.
  test: iOS arm64 device is in scope
- `ios-embedder.triples:not-toolchain`: These triples are this product's mobile packaging, not toolchain D04.
  test: iOS triples are this product's mobile packaging, not toolchain D04
- `ios-embedder.engine:forbid-skia`: There is no Skia requirement and no Flutter Engine as a product dependency.
- `ios-embedder.layers:uncollapsed`: Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs.
- `ios-embedder.types:forbid-uikitview`: Public `UiKitView` stays unnamed.
