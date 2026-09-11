---
id: "task-272-red-green-counter-on-emulator"
title: "Red-green: counter on Android emulator"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-270-red-green-no-webview-no-js-engine"
  - "task-271-red-green-arm64-v8a-in-scope"
sprint: "mobile-after-desktop"
slice: "slice-81-android-counter"
tags: []
created_at: "2026-09-11T08:52:52Z"
updated_at: "2026-09-11T09:20:10Z"
---

# Red-green: counter on Android emulator

## Blocked by

[[task-270-red-green-no-webview-no-js-engine]]: host first. [[task-271-red-green-arm64-v8a-in-scope]]: ABI in scope first.

## Done

The counter demo runs on Android x86_64 emulator through engine draw lists. Android View is not the default leaf.

## Context

TDD: write the O1 tests named in the Android embedder spec. Red, then implement. Same counter outcome as [[slice-70-counter-on-dom]]: text from a ui.Signal. Native host binary, not a JS bundle in a WebView, not TextView as the default leaf. Do not fake a general LLVM lowerer.

Do not attach Android views; that is [[slice-84-platform-view-hatch]]. Do not start store packaging.

## Verify

O1 command named in the Android embedder spec test.md passes.

scope: tests/ named by that spec, plus hosts/android/ and crates/embedder/ counter-on-emulator proof this task must add

## Links

- [[slice-81-android-counter]]
- [[task-270-red-green-no-webview-no-js-engine]]
- [[task-271-red-green-arm64-v8a-in-scope]]

## Gauntlet

- round 1: `node --test tests/android-embedder/counter-on-emulator.test.mjs` win. Promise the counter runs on Android emulator on the engine canvas path.
