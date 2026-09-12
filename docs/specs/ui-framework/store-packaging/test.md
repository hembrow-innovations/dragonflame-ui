---
id: "test-store-packaging"
title: "Store packaging tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: store-packaging
tags: [test]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Store packaging tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `store-packaging.artifact:packaged-binary` and `store-packaging.updates:new-binaries`. Oracle commands:

- node --test tests/store-packaging/packaged-binary.test.mjs
- node --test tests/store-packaging/not-ota-js.test.mjs

## Tests

- **tests/store-packaging/packaged-binary.test.mjs**: `a packaged binary hangs off the thin Xcode and Gradle shells`
  - **How:** fails unless a packaged binary artifact hangs off the thin Xcode shell at `hosts/ios/` and the thin Gradle shell at `hosts/android/`
  - **Why:** promise `store-packaging.artifact:packaged-binary`
- **tests/store-packaging/not-ota-js.test.mjs**: `native updates are new binaries, not Expo-style OTA of a JS bundle`
  - **How:** fails if the native update path is Expo-style OTA of a JS bundle. Native updates are new binaries
  - **Why:** promise `store-packaging.updates:new-binaries`

## Gaps

- No test yet for `store-packaging.source:unnamed` or `store-packaging.flow:forbid-signing-upload`.
- Hot-reload OTA absence stays on [[test-absence]].
- iOS host honesty oracles stay on [[test-ios-embedder]].
- Android host honesty oracles stay on [[test-android-embedder]].
