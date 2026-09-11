---
id: "task-275-red-green-not-ota-js"
title: "Red-green: not OTA JS"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-273-spec-store-packaging"
  - "task-274-red-green-packaged-binary"
sprint: "mobile-after-desktop"
slice: "slice-82-store-binaries"
tags: []
created_at: "2026-09-11T10:05:49Z"
updated_at: "2026-09-11T10:05:49Z"
---

# Red-green: not OTA JS

## Blocked by

[[task-273-spec-store-packaging]]: spec first. [[task-274-red-green-packaged-binary]]: artifact first.

## Done

Native updates for this tracer are new binaries, not Expo-style OTA of a JS bundle.

## Context

TDD: write the O2 tests named in the store-packaging spec. Red, then implement. This oracle is the native update path, not hot reload as a v1 gate.

Do not repeat [[purpose-absence]] hot-reload OTA. Do not invent App Store, Play, TestFlight, IPA, xcarchive, AAB, or APK as product names. Do not invent signing or upload flows.

## Verify

O2 command named in the store-packaging spec test.md passes.

scope: tests/ named by that spec, plus the packaging path this task must keep off OTA JS

## Links

- [[slice-82-store-binaries]]
- [[task-273-spec-store-packaging]]
- [[task-274-red-green-packaged-binary]]
- [[ticket-67-store-formats-unnamed]]

## Gauntlet

- round 1: `node --test tests/store-packaging/not-ota-js.test.mjs` win. Promise native updates are new binaries, not Expo-style OTA of a JS bundle.

## Agent Brief

**Category:** enhancement
**Summary:** Prove the store-packaging update path is new binaries, not Expo-style OTA of a JS bundle.

**Intent (required when product behaviour changes):**
- Promise ids: the not-OTA promise named by [[task-273-spec-store-packaging]]
- Purpose: [[purpose-store-packaging]]
- Contract-first: assert promise then test then code

**Current behavior:**
Intent forbids Expo-style OTA of a JS bundle. Hot-reload absence is a different promise. Store packaging has no update-path oracle yet.

**Desired behavior:**
O2 passes: this tracer's native update path is new binaries, not an OTA JS bundle.

**Key interfaces:**
- Native packaging update path hanging off the thin shells

**Acceptance criteria:**
- [ ] `node --test tests/store-packaging/not-ota-js.test.mjs` passes
- [ ] Does not re-own [[purpose-absence]] hot-reload OTA
- [ ] Promise ids from the spec still hold

**Out of scope:**
- O1 packaged-binary proof
- Signing and upload
- Hot reload implementation
- App Store, Play, IPA, AAB, APK as product names
