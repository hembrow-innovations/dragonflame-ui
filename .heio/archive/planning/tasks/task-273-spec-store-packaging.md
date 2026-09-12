---
id: "task-273-spec-store-packaging"
title: "Spec store packaging"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-267-red-green-counter-on-simulator"
  - "task-272-red-green-counter-on-emulator"
sprint: "mobile-after-desktop"
slice: "slice-82-store-binaries"
tags: []
created_at: "2026-09-11T10:05:49Z"
updated_at: "2026-09-12T03:58:40Z"
---

# Spec store packaging

## Blocked by

[[task-267-red-green-counter-on-simulator]]: iOS shell first. [[task-272-red-green-counter-on-emulator]]: Android shell first.

## Done

Store packaging spec folder exists from [[location-53-store-packaging]], [[location-50-xcode-gradle-shells]], [[rounds-257-settle-store-formats]], and [[ticket-67-store-formats-unnamed]]: packaged binary hanging off thin Xcode and Gradle shells, updates are new binaries, stores and formats unnamed.

## Context

Write purpose, contract, and test.md from [[rounds-257-settle-store-formats]] and [[location-53-store-packaging]]. Quote child destination sentences.

First tracer: a packaged binary hanging off the thin shells at `hosts/ios/` and `hosts/android/`. Updates are new binaries, not Expo-style OTA of a JS bundle. The source does not name stores or formats.

Do not invent App Store, Play, TestFlight, IPA, xcarchive, AAB, or APK as product names. Do not invent signing or upload flows. Do not repeat hot-reload OTA absence. That lives on [[purpose-absence]]. Do not repeat iOS or Android host honesty oracles. Those live on [[purpose-ios-embedder]] and [[purpose-android-embedder]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/store-packaging/

## Links

- [[slice-82-store-binaries]]
- [[ticket-67-store-formats-unnamed]]
- [[rounds-257-settle-store-formats]]
- [[location-53-store-packaging]]

## Agent Brief

**Category:** enhancement
**Summary:** Assert the store-packaging ladder: packaged binary after shells, new binaries not OTA JS, stores and formats unnamed.

**Intent (required when product behaviour changes):**
- Promise ids: assert `store-packaging` promises from [[location-53-store-packaging]]; do not invent store or format names
- Purpose: write [[purpose-store-packaging]] in this sitting
- Contract-first: assert promise then name tests in test.md. No product code

**Current behavior:**
[[glossary]] defines store packaging as a packaged binary hanging off thin shells, with updates as new binaries. No store-packaging spec folder exists. Slice oracles are unnamed commands.

**Desired behavior:**
A spec folder locks two oracles: a packaged binary artifact exists off the thin shells, and the native update path is not Expo-style OTA of a JS bundle. Oracle commands are `node --test tests/store-packaging/packaged-binary.test.mjs` and `node --test tests/store-packaging/not-ota-js.test.mjs`.

**Key interfaces:**
- Purpose, contract, and test notes for area `store-packaging`
- Promises must not name App Store, Play, IPA, AAB, or APK

**Acceptance criteria:**
- [x] purpose, contract, and test.md exist for store-packaging
- [x] test.md names both oracle commands above
- [x] Stores and formats stay unnamed
- [x] No product code

**Out of scope:**
- Implementing the packaged artifact
- Signing and upload
- Repeating [[purpose-absence]] hot-reload OTA
- Repeating iOS or Android embedder host oracles
