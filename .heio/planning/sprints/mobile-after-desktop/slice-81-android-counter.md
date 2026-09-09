---
id: "slice-81-android-counter"
title: "Android counter"
kind: slice
status: shaping
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Android counter

## Why

Same counter, Android host. Parallel with iOS after desktop.

## Done

The counter demo runs on Android x86_64 emulator, with arm64-v8a in scope, behind a thin Gradle shell. Android views are hatch, not default. No Hermes.

## Blocked by

[[slice-76-desktop-vsync-window]]. [[slice-70-counter-on-dom]]. [[ticket-61-native-ui-unfunded]].

## Non-goals

WebView shell. Emulator-only as done.

## Oracle checklist

- [ ] O1: counter on Android emulator
  CHECK: command named in the android spec test.md after freeze
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no WebView
  CHECK: command named in that spec
  EXPECT: pass
  EVIDENCE: pending

## Pool

None until freeze. Device greens will be hitl.

## See also

- [[location-47-after-desktop]]
- [[location-49-android-embedder]]
- [[location-50-xcode-gradle-shells]]
- [[location-52-android-triples]]
