---
id: "task-267-red-green-counter-on-simulator"
title: "Red-green: counter on iOS simulator"
kind: task
status: claimed
mode: afk
blocked_by:
  - "task-265-red-green-no-webview-no-js-engine"
  - "task-266-red-green-arm64-device-in-scope"
sprint: "mobile-after-desktop"
slice: "slice-80-ios-counter"
tags: []
created_at: "2026-09-11T08:06:40Z"
updated_at: "2026-09-11T08:36:09Z"
---

# Red-green: counter on iOS simulator

## Blocked by

[[task-265-red-green-no-webview-no-js-engine]]: host first. [[task-266-red-green-arm64-device-in-scope]]: device in scope first.

## Done

The counter demo runs on iOS simulator through engine draw lists. UIView is not the default leaf.

## Context

TDD: write the O1 tests named in the iOS embedder spec. Red, then implement. Same counter outcome as [[slice-70-counter-on-dom]]: text from a ui.Signal. Native host binary, not a JS bundle in WKWebView, not UILabel as the default leaf. Do not fake a general LLVM lowerer.

Do not attach UIView; that is [[slice-84-platform-view-hatch]]. Do not start Android. Do not package a store binary.

## Verify

O1 command named in the iOS embedder spec test.md passes.

scope: tests/ named by that spec, plus hosts/ios/ and crates/embedder/ counter-on-simulator proof this task must add

## Links

- [[slice-80-ios-counter]]
- [[task-265-red-green-no-webview-no-js-engine]]
- [[task-266-red-green-arm64-device-in-scope]]

## Gauntlet

- round 1: `node --test tests/ios-embedder/counter-on-simulator.test.mjs` win. Promise the counter runs on iOS simulator on the engine canvas path.
