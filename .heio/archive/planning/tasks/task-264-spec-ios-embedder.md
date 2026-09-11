---
id: "task-264-spec-ios-embedder"
title: "Spec iOS embedder"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-80-ios-counter"
tags: []
created_at: "2026-09-11T08:06:40Z"
updated_at: "2026-09-11T08:14:59Z"
---

# Spec iOS embedder

## Blocked by

None.

## Done

iOS embedder spec folder exists from [[location-48-ios-embedder]], [[location-50-xcode-gradle-shells]], [[location-51-ios-triples]], [[location-43-native-canvas-host]], and [[rounds-263-freeze-ios-counter]]: thin Xcode shell, no WKWebView, no JS engine, simulator plus arm64 device in scope, counter text through engine draw lists, UIView hatch not default.

## Context

Write purpose, contract, and test.md from [[rounds-263-freeze-ios-counter]] and [[location-48-ios-embedder]]. Quote child destination sentences.

First tracer: existing embedder crate plus ios module, not a new empty crate. Shell path is `hosts/ios/`. Vsync is CADisplayLink from the embedder. Engine owns GPU with wgpu. Counter is a native host binary that shows counter text through engine draw lists. arm64 device in scope is `aarch64-apple-ios` plus Xcode arm64 ARCHS. Simulator is the run oracle. Tracing GC stays.

Do not invent Android or Gradle. Do not invent store names. Do not fake a general LLVM lowerer. Do not invent UIView attach or public `UiKitView`. Do not repeat desktop no-WebView or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not repeat web counter DOM oracles. Those live on [[purpose-counter]]. Do not repeat canvas-default or platform-view slot oracles. Those live on [[purpose-oem-hatch]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the three oracle tests.

scope: docs/specs/ui-framework/ios-embedder/

## Links

- [[slice-80-ios-counter]]
- [[rounds-263-freeze-ios-counter]]
- [[location-48-ios-embedder]]
