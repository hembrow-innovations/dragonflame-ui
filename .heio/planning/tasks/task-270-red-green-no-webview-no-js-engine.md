---
id: "task-270-red-green-no-webview-no-js-engine"
title: "Red-green: no WebView and no JS engine"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-269-spec-android-embedder"
sprint: "mobile-after-desktop"
slice: "slice-81-android-counter"
tags: []
created_at: "2026-09-11T08:52:52Z"
updated_at: "2026-09-11T08:52:52Z"
---

# Red-green: no WebView and no JS engine

## Blocked by

[[task-269-spec-android-embedder]]: spec first.

## Done

Thin Gradle shell at `hosts/android/` links the embedder android module. Android native is not a WebView shell. No Hermes, JSC, or V8 as the app runtime. Tracing GC stays.

## Context

TDD: write the O2 tests named in the Android embedder spec. Red, then implement. Create the thin Gradle shell and the embedder android module this oracle inspects. Embedder owns an Activity and Choreographer. Engine owns GPU. Do not add a new empty crate.

Do not prove counter text; that is [[task-272-red-green-counter-on-emulator]]. Do not prove arm64-v8a in scope; that is [[task-271-red-green-arm64-v8a-in-scope]]. Do not attach Android views. Do not repeat desktop or iOS no-WebView oracles. Do not start store packaging.

## Verify

O2 command named in the Android embedder spec test.md passes.

scope: tests/ named by that spec, plus hosts/android/ and crates/embedder/ android host files this task must add

## Links

- [[slice-81-android-counter]]
- [[task-269-spec-android-embedder]]

## Gauntlet

- round 1: `node --test tests/android-embedder/no-webview-no-js-engine.test.mjs` win. Promises `android-embedder.host:forbid-webview` and `android-embedder.host:forbid-js-engine`.
