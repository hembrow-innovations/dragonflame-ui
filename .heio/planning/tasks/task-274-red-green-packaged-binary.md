---
id: "task-274-red-green-packaged-binary"
title: "Red-green: packaged binary exists"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-273-spec-store-packaging"
  - "task-267-red-green-counter-on-simulator"
  - "task-272-red-green-counter-on-emulator"
sprint: "mobile-after-desktop"
slice: "slice-82-store-binaries"
tags: []
created_at: "2026-09-11T10:05:49Z"
updated_at: "2026-09-11T10:05:49Z"
---

# Red-green: packaged binary exists

## Blocked by

[[task-273-spec-store-packaging]]: spec first. [[task-267-red-green-counter-on-simulator]]: iOS shell first. [[task-272-red-green-counter-on-emulator]]: Android shell first.

## Done

A packaged binary artifact hangs off the thin Xcode and Gradle shells. The source does not name stores or formats.

## Context

TDD: write the O1 tests named in the store-packaging spec. Red, then implement. Packaging hangs off `hosts/ios/` and `hosts/android/`. Native host binary, not a JS bundle.

Do not prove the update path is not OTA JS; that is [[task-275-red-green-not-ota-js]]. Do not invent App Store, Play, TestFlight, IPA, xcarchive, AAB, or APK as product names. Do not invent signing or upload flows.

## Verify

O1 command named in the store-packaging spec test.md passes.

scope: tests/ named by that spec, plus hosts/ios/ and hosts/android/ packaging proof this task must add

## Links

- [[slice-82-store-binaries]]
- [[task-273-spec-store-packaging]]
- [[ticket-67-store-formats-unnamed]]

## Gauntlet

- round 1: `node --test tests/store-packaging/packaged-binary.test.mjs` win. Promise a packaged binary hangs off the thin shells.

## Agent Brief

**Category:** enhancement
**Summary:** Prove a packaged binary artifact hangs off the thin shells without naming stores or formats.

**Intent (required when product behaviour changes):**
- Promise ids: the packaged-binary promise named by [[task-273-spec-store-packaging]]
- Purpose: [[purpose-store-packaging]]
- Contract-first: assert promise then test then code

**Current behavior:**
Thin shells are the iOS and Android host work. No packaged binary artifact exists as store packaging.

**Desired behavior:**
O1 passes: a packaged binary artifact hangs off those shells. Source text does not treat store or format names as this tracer's product names.

**Key interfaces:**
- Packaging hanging off the existing thin shells, not a Flutter embedder and not a new empty crate

**Acceptance criteria:**
- [ ] `node --test tests/store-packaging/packaged-binary.test.mjs` passes
- [ ] Stores and formats stay unnamed
- [ ] Promise ids from the spec still hold

**Out of scope:**
- O2 not-OTA proof
- Signing and upload
- App Store, Play, IPA, AAB, APK as product names
