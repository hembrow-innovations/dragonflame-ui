---
id: "slice-82-store-binaries"
title: "Store binaries"
kind: slice
status: shaping
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-80-ios-counter"
  - "slice-81-android-counter"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Store binaries

## Why

Packaging demo. Native updates are new binaries.

## Done

Store packaging exists as a packaged binary artifact hanging off the thin shells. The source does not name stores or formats. Promise only: an artifact exists, and the update path is not Expo-style OTA of a JS bundle.

## Blocked by

[[slice-80-ios-counter]] and [[slice-81-android-counter]]. [[ticket-67-store-formats-unnamed]]: do not invent store names.

## Non-goals

Inventing App Store or Play formats. OTA JS bundle.

## Oracle checklist

- [ ] O1: packaged binary exists
  CHECK: command named in the store spec test.md after [[ticket-67-store-formats-unnamed]]
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: not OTA JS
  CHECK: command named in that spec
  EXPECT: pass
  EVIDENCE: pending

## Pool

None until freeze.

## See also

- [[location-53-store-packaging]]
