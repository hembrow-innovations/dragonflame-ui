---
id: "purpose-ios-embedder"
title: "iOS embedder purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the iOS host. Thin Xcode shell. Embedder owns UIWindow and CADisplayLink. Engine owns GPU. Counter text through engine draw lists."
status: active
domain: ui-framework
area: ios-embedder
tags: [purpose]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# iOS embedder purpose

## Job

An iOS host shows counter text through engine draw lists, with no WebView and no JS engine.

Wayfinder [[rounds-01-chart-framework]] answers 3, 6, 8, and 11, planning sitting [[rounds-263-freeze-ios-counter]], and [[slice-80-ios-counter]]:

- **Answer 3**: no JS engine on native; tracing GC stays. No Hermes, JSC, V8, or WebView.
- **Answer 6**: custom Rust engine. OEM widgets are an escape hatch.
- **Answer 8**: after desktop, thin Xcode shell. iOS arm64 device plus simulator.
- **Answer 11**: embedder owns window. Engine owns GPU. No Skia. No Flutter embedder.
- **Funding**: Native is funded. Engine home is this repo.
- **First tracer**: existing embedder crate plus an ios module, not a new empty crate.
- **Shell path**: `hosts/ios/`
- **Vsync**: CADisplayLink from the embedder.
- **Counter**: a native host binary that shows counter text through engine draw lists.
- **arm64 device in scope**: `aarch64-apple-ios` plus Xcode arm64 ARCHS.
- **Run oracle**: simulator.

## In scope

Child destination sentences from [[location-48-ios-embedder]]:

- **Window and GPU**: the iOS embedder owns the window, vsync, and input, and the engine owns the GPU surface.
- **No WKWebView**: iOS native is not WKWebView, Cordova, Capacitor, or Expo-web-in-WKWebView.
- **No JS engine**: iOS has no Hermes, JavaScriptCore, or V8. Tracing GC stays.
- **OEM hatch**: UIView is an escape hatch, not the default. See [[location-44-oem-escape-hatch]]
- **Triples**: iOS arm64 device plus simulator are in scope. See [[location-51-ios-triples]]

Child destination sentences from [[location-50-xcode-gradle-shells]]:

- **Thin Xcode shell**: a thin Xcode shell exists for the iOS embedder.

Child destination sentences from [[location-51-ios-triples]]:

- **arm64 device**: iOS arm64 device is in scope.
- **Simulator**: iOS simulator is in scope.
- **Not toolchain D04**: these triples are this product's mobile packaging, not toolchain D04.

Child destination sentences from [[location-43-native-canvas-host]]:

- **Draw lists**: native paint records draw lists into the Rust engine.
- **Native default if funded**: canvas engine is the native default, only if native UI is funded.
- **Raster**: native raster is GPU submit on native.

Native is funded, so this destination is pursued. This area's oracles prove the counter runs on iOS simulator through engine draw lists, that iOS native is not a WebView and has no JS engine, and that arm64 device is in scope. They do not prove input plumbing, UIView attach, physical-device tap, or a general LLVM lowerer.

## Out of scope

- Android embedder. Gradle shell.
- Store names and formats.
- UIView attach. Public `UiKitView`.
- Faking a general LLVM lowerer.
- Physical-device tap as an oracle.
- Implementing input, IME, clipboard, or accessibility plumbing.
- UILabel as the counter leaf.
- WKWebView class lists as product API.
- Adding Skia or a Flutter embedder.
- Repeating desktop no-WebView or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]].
- Repeating web counter DOM oracles. Those live on [[purpose-counter]].
- Repeating canvas-default or platform-view slot oracles. Those live on [[purpose-oem-hatch]].
- Repeating workspace or empty-crate oracles. Those live on [[purpose-crate-workspace]] and [[purpose-git-package]].
- Implementing the compiler in this repo.

## Surfaces

A thin Xcode shell at `hosts/ios/` links the embedder crate. The embedder owns UIWindow and one CADisplayLink vsync. The engine owns the GPU surface with wgpu. A native host binary shows counter text through engine draw lists. Callers do not import WKWebView. Callers do not import JavaScriptCore. Callers do not import UILabel as the counter leaf.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-263-freeze-ios-counter]], [[rounds-01-chart-framework]], [[intent]], [[location-48-ios-embedder]], [[location-50-xcode-gradle-shells]], [[location-51-ios-triples]], [[location-43-native-canvas-host]], [[location-44-oem-escape-hatch]], and [[architecture-layer-cake]].

## Open product questions

- (none)
