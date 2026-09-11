---
id: "task-265-red-green-no-webview-no-js-engine"
title: "Red-green: no WebView and no JS engine"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-264-spec-ios-embedder"
sprint: "mobile-after-desktop"
slice: "slice-80-ios-counter"
tags: []
created_at: "2026-09-11T08:06:40Z"
updated_at: "2026-09-11T08:26:24Z"
---

# Red-green: no WebView and no JS engine

## Blocked by

[[task-264-spec-ios-embedder]]: spec first.

## Done

Thin Xcode shell at `hosts/ios/` links the embedder ios module. iOS native is not WKWebView, Cordova, Capacitor, or Expo-web-in-WKWebView. No Hermes, JSC, or V8 as the app runtime. Tracing GC stays.

## Context

TDD: write the O2 tests named in the iOS embedder spec. Red, then implement. Create the thin Xcode shell and the embedder ios module this oracle inspects. Embedder owns UIWindow and CADisplayLink. Engine owns GPU. Do not add a new empty crate.

Do not prove counter text; that is [[task-267-red-green-counter-on-simulator]]. Do not prove arm64 device in scope; that is [[task-266-red-green-arm64-device-in-scope]]. Do not attach UIView. Do not repeat desktop no-WebView oracles. Do not start Android.

## Verify

O2 command named in the iOS embedder spec test.md passes.

scope: tests/ named by that spec, plus hosts/ios/ and crates/embedder/ ios host files this task must add

## Links

- [[slice-80-ios-counter]]
- [[task-264-spec-ios-embedder]]

## Gauntlet

- round 1: `node --test tests/ios-embedder/no-webview-no-js-engine.test.mjs` win. Promises `ios-embedder.host:forbid-webview` and `ios-embedder.host:forbid-js-engine`.
