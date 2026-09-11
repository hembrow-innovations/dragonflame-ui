---
id: "task-269-spec-android-embedder"
title: "Spec Android embedder"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-81-android-counter"
tags: []
created_at: "2026-09-11T08:52:52Z"
updated_at: "2026-09-11T08:52:52Z"
---

# Spec Android embedder

## Blocked by

None.

## Done

Android embedder spec folder exists from [[location-49-android-embedder]], [[location-50-xcode-gradle-shells]], [[location-52-android-triples]], [[location-43-native-canvas-host]], and [[rounds-268-freeze-android-counter]]: thin Gradle shell, no WebView, no JS engine, x86_64 emulator plus arm64-v8a in scope, counter text through engine draw lists, Android views hatch not default.

## Context

Write purpose, contract, and test.md from [[rounds-268-freeze-android-counter]] and [[location-49-android-embedder]]. Quote child destination sentences.

First tracer: existing embedder crate plus android module, not a new empty crate. Shell path is `hosts/android/`. Vsync is Choreographer from the embedder. Window is an Activity. GPU surface is ANativeWindow from a SurfaceView. Engine owns GPU with wgpu. Counter is a native host binary that shows counter text through engine draw lists. arm64-v8a in scope is `aarch64-linux-android` plus Gradle abiFilters arm64-v8a. Emulator is the run oracle. Tracing GC stays.

Do not invent iOS or Xcode. Do not invent store names. Do not fake a general LLVM lowerer. Do not invent Android view attach or public `AndroidView`. Do not repeat desktop no-WebView or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not repeat iOS no-WebView or no-JS-engine oracles. Those live on [[purpose-ios-embedder]]. Do not repeat web counter DOM oracles. Those live on [[purpose-counter]]. Do not repeat canvas-default or platform-view slot oracles. Those live on [[purpose-oem-hatch]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the three oracle tests.

scope: docs/specs/ui-framework/android-embedder/

## Links

- [[slice-81-android-counter]]
- [[rounds-268-freeze-android-counter]]
- [[location-49-android-embedder]]
