---
id: "task-266-red-green-arm64-device-in-scope"
title: "Red-green: arm64 device in scope"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-265-red-green-no-webview-no-js-engine"
sprint: "mobile-after-desktop"
slice: "slice-80-ios-counter"
tags: []
created_at: "2026-09-11T08:06:40Z"
updated_at: "2026-09-11T08:06:40Z"
---

# Red-green: arm64 device in scope

## Blocked by

[[task-265-red-green-no-webview-no-js-engine]]: shell first.

## Done

iOS arm64 device is in scope beside simulator. `aarch64-apple-ios` plus Xcode arm64 ARCHS. Simulator-only is not done.

## Context

TDD: write the O3 tests named in the iOS embedder spec. Red, then implement. Quote [[location-51-ios-triples]]. Device in scope is target membership, not a physical-device tap.

Do not prove counter text; that is [[task-267-red-green-counter-on-simulator]]. Do not treat simulator-only as done. Do not invent a different device set.

## Verify

O3 command named in the iOS embedder spec test.md passes.

scope: tests/ named by that spec, plus hosts/ios/ and crates/embedder/ target membership this task must add

## Links

- [[slice-80-ios-counter]]
- [[task-265-red-green-no-webview-no-js-engine]]

## Gauntlet

- round 1: `node --test tests/ios-embedder/arm64-device-in-scope.test.mjs` win. Promise iOS arm64 device is in scope.
