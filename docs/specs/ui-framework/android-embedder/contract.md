---
id: "contract-android-embedder"
title: "Android embedder contract"
kind: contract
description: "Durable, plain-language promises for the Android host. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: android-embedder
tags: [contract]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Android embedder contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `android-embedder.window:embedder-owns`: The Android embedder owns the window. The window is an Activity. A thin Gradle shell exists at `hosts/android/`. The Android window lives in the existing embedder crate as an android module.
  test: counter text shows on Android emulator through engine draw lists
- `android-embedder.vsync:embedder-supplies`: The embedder supplies one vsync. On Android that vsync is Choreographer from the embedder. The engine is a vsync client.
  test: counter text shows on Android emulator through engine draw lists
- `android-embedder.gpu:engine-owns`: The engine owns the GPU surface. GPU surface is ANativeWindow from a SurfaceView. wgpu is used because native is funded.
  test: counter text shows on Android emulator through engine draw lists
- `android-embedder.counter:draw-lists`: The counter tracer is a native host binary that shows counter text through engine draw lists. Emulator is the run oracle. Android View is not the default leaf.
  test: counter text shows on Android emulator through engine draw lists
- `android-embedder.host:forbid-webview`: Android native is not a WebView shell.
  test: Android native is not a WebView shell
- `android-embedder.host:forbid-js-engine`: Android has no Hermes, JavaScriptCore, or V8. Tracing GC stays.
  test: Android native has no Hermes, JSC, or V8
- `android-embedder.triples:emulator`: Android x86_64 emulator is in scope. Emulator is the run oracle.
  test: counter text shows on Android emulator through engine draw lists
- `android-embedder.triples:arm64-v8a`: Android arm64-v8a is in scope as `aarch64-linux-android` plus Gradle abiFilters arm64-v8a. Emulator-only is not done.
  test: Android arm64-v8a is in scope
- `android-embedder.triples:not-toolchain`: These triples are this product's mobile packaging, not toolchain D04.
- `android-embedder.engine:forbid-skia`: There is no Skia requirement and no Flutter Engine as a product dependency.
- `android-embedder.layers:uncollapsed`: Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs.
- `android-embedder.types:forbid-androidview`: Public `AndroidView` stays unnamed.
