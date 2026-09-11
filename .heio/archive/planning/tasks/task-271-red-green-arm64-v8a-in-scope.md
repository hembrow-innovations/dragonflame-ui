---
id: "task-271-red-green-arm64-v8a-in-scope"
title: "Red-green: arm64-v8a in scope"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-270-red-green-no-webview-no-js-engine"
sprint: "mobile-after-desktop"
slice: "slice-81-android-counter"
tags: []
created_at: "2026-09-11T08:52:52Z"
updated_at: "2026-09-11T09:20:00Z"
---

# Red-green: arm64-v8a in scope

## Blocked by

[[task-270-red-green-no-webview-no-js-engine]]: shell first.

## Done

Android arm64-v8a is in scope beside x86_64 emulator. `aarch64-linux-android` plus Gradle abiFilters arm64-v8a. Emulator-only is not done.

## Context

TDD: write the O3 tests named in the Android embedder spec. Red, then implement. Quote [[location-52-android-triples]]. ABI in scope is target membership, not a physical-device tap.

Do not prove counter text; that is [[task-272-red-green-counter-on-emulator]]. Do not treat emulator-only as done. Do not invent a different ABI set.

## Verify

O3 command named in the Android embedder spec test.md passes.

scope: tests/ named by that spec, plus hosts/android/ and crates/embedder/ target membership this task must add

## Links

- [[slice-81-android-counter]]
- [[task-270-red-green-no-webview-no-js-engine]]

## Gauntlet

- round 1: `node --test tests/android-embedder/arm64-v8a-in-scope.test.mjs` win. Promise `android-embedder.triples:arm64-v8a`.
