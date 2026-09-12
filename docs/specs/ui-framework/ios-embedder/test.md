---
id: "test-ios-embedder"
title: "iOS embedder tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: ios-embedder
tags: [test]
created_at: "2026-09-11"
updated_at: "2026-09-12"
---

# iOS embedder tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `ios-embedder.window:embedder-owns`, `ios-embedder.vsync:embedder-supplies`, `ios-embedder.gpu:engine-owns`, `ios-embedder.counter:draw-lists`, `ios-embedder.host:forbid-webview`, `ios-embedder.host:forbid-js-engine`, `ios-embedder.triples:simulator`, `ios-embedder.triples:arm64-device`, and `ios-embedder.triples:not-toolchain`. Oracle commands:

- node --test tests/ios-embedder/counter-on-simulator.test.mjs
- node --test tests/ios-embedder/no-webview-no-js-engine.test.mjs
- node --test tests/ios-embedder/arm64-device-in-scope.test.mjs
- node --test tests/ios-embedder/not-toolchain-triples.test.mjs

## Tests

- **tests/ios-embedder/counter-on-simulator.test.mjs**: `counter text shows on iOS simulator through engine draw lists`
  - **How:** fails unless a native host binary behind a thin Xcode shell at `hosts/ios/` shows counter text through engine draw lists on the iOS simulator, the embedder owns UIWindow and one CADisplayLink vsync, the engine owns the GPU surface with wgpu, and UIView is not the default leaf
  - **Why:** promises `ios-embedder.window:embedder-owns`, `ios-embedder.vsync:embedder-supplies`, `ios-embedder.gpu:engine-owns`, `ios-embedder.counter:draw-lists`, and `ios-embedder.triples:simulator`
- **tests/ios-embedder/no-webview-no-js-engine.test.mjs**: `iOS native is not a WebView shell`
  - **How:** fails if this checkout uses WKWebView, Cordova, Capacitor, or Expo-web-in-WKWebView as iOS native
  - **Why:** promise `ios-embedder.host:forbid-webview`
- **tests/ios-embedder/no-webview-no-js-engine.test.mjs**: `iOS native has no Hermes, JSC, or V8`
  - **How:** fails if this checkout uses Hermes, JSC, JavaScriptCore, or V8 as the iOS app runtime. Tracing GC stays
  - **Why:** promise `ios-embedder.host:forbid-js-engine`
- **tests/ios-embedder/arm64-device-in-scope.test.mjs**: `iOS arm64 device is in scope`
  - **How:** fails unless iOS arm64 device is in scope as `aarch64-apple-ios` plus Xcode arm64 ARCHS. Simulator-only is not done
  - **Why:** promise `ios-embedder.triples:arm64-device`
- **tests/ios-embedder/not-toolchain-triples.test.mjs**: `iOS triples are this product's mobile packaging, not toolchain D04`
  - **How:** fails if this checkout files iOS triples as toolchain D04 or language ROADMAP work, if packaging is missing from `hosts/ios/` plus the embedder ios module, if a public `TargetTriple`, `IosTriple`, or `shippedTriples()` type exists, if rustc target strings appear on the framework API, or if `docs/specs/ui-framework/ios-triples/` exists. Does not fail on the purpose grain sentence naming D04
  - **Why:** promise `ios-embedder.triples:not-toolchain`

## Gaps

- No test yet for `ios-embedder.engine:forbid-skia`, `ios-embedder.layers:uncollapsed`, or `ios-embedder.types:forbid-uikitview`.
- Input, IME, clipboard, and accessibility plumbing stay unimplemented.
- UIView attach stays on [[slice-84-platform-view-hatch]].
- Desktop no-webview and no-js-engine oracles stay on [[test-desktop-embedder]].
- Web counter DOM oracles stay on [[test-counter]].
- Canvas-default and platform-view slot oracles stay on [[test-oem-hatch]].
- Workspace and empty-crate oracles stay on [[test-crate-workspace]] and [[test-git-package]].
