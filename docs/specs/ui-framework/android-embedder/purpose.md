---
id: "purpose-android-embedder"
title: "Android embedder purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the Android host. Thin Gradle shell. Embedder owns Activity and Choreographer. Engine owns GPU. Counter text through engine draw lists."
status: active
domain: ui-framework
area: android-embedder
tags: [purpose]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Android embedder purpose

## Job

An Android host shows counter text through engine draw lists, with no WebView and no JS engine.

Wayfinder [[rounds-01-chart-framework]] answers 3, 6, 8, and 11, planning sitting [[rounds-268-freeze-android-counter]], and [[slice-81-android-counter]]:

- **Answer 3**: no JS engine on native; tracing GC stays. No Hermes, JSC, V8, or WebView.
- **Answer 6**: custom Rust engine. OEM widgets are an escape hatch.
- **Answer 8**: after desktop, thin Gradle shell. Android arm64-v8a plus x86_64 emulator.
- **Answer 11**: embedder owns window. Engine owns GPU. No Skia. No Flutter embedder.
- **Funding**: Native is funded. Engine home is this repo.
- **First tracer**: existing embedder crate plus an android module, not a new empty crate.
- **Shell path**: `hosts/android/`
- **Vsync**: Choreographer from the embedder.
- **Window**: an Activity.
- **GPU surface**: ANativeWindow from a SurfaceView.
- **Counter**: a native host binary that shows counter text through engine draw lists.
- **arm64-v8a in scope**: `aarch64-linux-android` plus Gradle abiFilters arm64-v8a.
- **Run oracle**: emulator.

## In scope

Child destination sentences from [[location-49-android-embedder]]:

- **Window and GPU**: the Android embedder owns the window, vsync, and input, and the engine owns the GPU surface.
- **No WebView**: Android native is not a WebView shell.
- **No JS engine**: Android has no Hermes, JavaScriptCore, or V8. Tracing GC stays.
- **OEM hatch**: Android views are an escape hatch, not the default. See [[location-44-oem-escape-hatch]]
- **Triples**: Android arm64-v8a plus x86_64 emulator are in scope. See [[location-52-android-triples]]

Child destination sentences from [[location-50-xcode-gradle-shells]]:

- **Thin Gradle shell**: a thin Gradle shell exists for the Android embedder.

Child destination sentences from [[location-52-android-triples]]:

- **arm64-v8a**: Android arm64-v8a is in scope.
- **x86_64 emulator**: Android x86_64 emulator is in scope.
- **Not toolchain D04**: these triples are this product's mobile packaging, not toolchain D04.

Child destination sentences from [[location-43-native-canvas-host]]:

- **Draw lists**: native paint records draw lists into the Rust engine.
- **Native default if funded**: canvas engine is the native default, only if native UI is funded.
- **Raster**: native raster is GPU submit on native.

Native is funded, so this destination is pursued. This area's oracles prove the counter runs on Android x86_64 emulator through engine draw lists, that Android native is not a WebView and has no JS engine, and that arm64-v8a is in scope. They do not prove input plumbing, Android view attach, physical-device tap, or a general LLVM lowerer.

## Out of scope

- iOS embedder. Xcode shell.
- Store names and formats.
- Android view attach. Public `AndroidView`.
- Faking a general LLVM lowerer.
- Physical-device tap as an oracle.
- Implementing input, IME, clipboard, or accessibility plumbing.
- TextView as the counter leaf.
- WebView class lists as product API.
- Adding Skia or a Flutter embedder.
- Repeating desktop no-WebView or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]].
- Repeating iOS no-WebView or no-JS-engine oracles. Those live on [[purpose-ios-embedder]].
- Repeating web counter DOM oracles. Those live on [[purpose-counter]].
- Repeating canvas-default or platform-view slot oracles. Those live on [[purpose-oem-hatch]].
- Repeating workspace or empty-crate oracles. Those live on [[purpose-crate-workspace]] and [[purpose-git-package]].
- Implementing the compiler in this repo.

## Surfaces

A thin Gradle shell at `hosts/android/` links the embedder crate. The embedder owns an Activity and one Choreographer vsync. The engine owns the GPU surface with wgpu. GPU surface is ANativeWindow from a SurfaceView. A native host binary shows counter text through engine draw lists. Callers do not import WebView. Callers do not import Hermes. Callers do not import TextView as the counter leaf.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-268-freeze-android-counter]], [[rounds-01-chart-framework]], [[intent]], [[location-49-android-embedder]], [[location-50-xcode-gradle-shells]], [[location-52-android-triples]], [[location-43-native-canvas-host]], [[location-44-oem-escape-hatch]], and [[architecture-layer-cake]].

## Open product questions

- (none)
