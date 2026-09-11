---
id: "test-android-embedder"
title: "Android embedder tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: android-embedder
tags: [test]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Android embedder tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `android-embedder.window:embedder-owns`, `android-embedder.vsync:embedder-supplies`, `android-embedder.gpu:engine-owns`, `android-embedder.counter:draw-lists`, `android-embedder.host:forbid-webview`, `android-embedder.host:forbid-js-engine`, `android-embedder.triples:emulator`, and `android-embedder.triples:arm64-v8a`. Oracle commands:

- node --test tests/android-embedder/counter-on-emulator.test.mjs
- node --test tests/android-embedder/no-webview-no-js-engine.test.mjs
- node --test tests/android-embedder/arm64-v8a-in-scope.test.mjs

## Tests

- **tests/android-embedder/counter-on-emulator.test.mjs**: `counter text shows on Android emulator through engine draw lists`
  - **How:** fails unless a native host binary behind a thin Gradle shell at `hosts/android/` shows counter text through engine draw lists on the Android x86_64 emulator, the embedder owns an Activity and one Choreographer vsync, the engine owns the GPU surface with wgpu from ANativeWindow on a SurfaceView, and Android View is not the default leaf
  - **Why:** promises `android-embedder.window:embedder-owns`, `android-embedder.vsync:embedder-supplies`, `android-embedder.gpu:engine-owns`, `android-embedder.counter:draw-lists`, and `android-embedder.triples:emulator`
- **tests/android-embedder/no-webview-no-js-engine.test.mjs**: `Android native is not a WebView shell`
  - **How:** fails if this checkout uses a WebView shell as Android native
  - **Why:** promise `android-embedder.host:forbid-webview`
- **tests/android-embedder/no-webview-no-js-engine.test.mjs**: `Android native has no Hermes, JSC, or V8`
  - **How:** fails if this checkout uses Hermes, JSC, JavaScriptCore, or V8 as the Android app runtime. Tracing GC stays
  - **Why:** promise `android-embedder.host:forbid-js-engine`
- **tests/android-embedder/arm64-v8a-in-scope.test.mjs**: `Android arm64-v8a is in scope`
  - **How:** fails unless Android arm64-v8a is in scope as `aarch64-linux-android` plus Gradle abiFilters arm64-v8a. Emulator-only is not done
  - **Why:** promise `android-embedder.triples:arm64-v8a`

## Gaps

- No test yet for `android-embedder.triples:not-toolchain`, `android-embedder.engine:forbid-skia`, `android-embedder.layers:uncollapsed`, or `android-embedder.types:forbid-androidview`.
- Input, IME, clipboard, and accessibility plumbing stay unimplemented.
- Android view attach stays on [[slice-84-platform-view-hatch]].
- Desktop no-webview and no-js-engine oracles stay on [[test-desktop-embedder]].
- iOS no-webview and no-js-engine oracles stay on [[test-ios-embedder]].
- Web counter DOM oracles stay on [[test-counter]].
- Canvas-default and platform-view slot oracles stay on [[test-oem-hatch]].
- Workspace and empty-crate oracles stay on [[test-crate-workspace]] and [[test-git-package]].
