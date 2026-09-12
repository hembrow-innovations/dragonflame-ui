---
id: "contract-store-packaging"
title: "Store packaging contract"
kind: contract
description: "Durable, plain-language promises for store packaging. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: store-packaging
tags: [contract]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Store packaging contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `store-packaging.artifact:packaged-binary`: A packaged binary artifact exists hanging off the thin Xcode and Gradle shells at `hosts/ios/` and `hosts/android/`.
  test: a packaged binary hangs off the thin Xcode and Gradle shells
- `store-packaging.updates:new-binaries`: Native updates are new binaries, not Expo-style OTA of a JS bundle.
  test: native updates are new binaries, not Expo-style OTA of a JS bundle
- `store-packaging.source:unnamed`: The source does not name stores or formats.
- `store-packaging.flow:forbid-signing-upload`: Signing and upload are not this tracer.
