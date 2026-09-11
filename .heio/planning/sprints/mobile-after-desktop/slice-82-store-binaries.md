---
id: "slice-82-store-binaries"
title: "Store binaries"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-80-ios-counter"
  - "slice-81-android-counter"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T10:05:49Z"
---

# Store binaries

## Why

Packaging demo. Native updates are new binaries.

## Done

Store packaging exists as a packaged binary artifact hanging off the thin shells. The source does not name stores or formats. Promise only: an artifact exists, and the update path is not Expo-style OTA of a JS bundle.

## Blocked by

[[slice-80-ios-counter]] and [[slice-81-android-counter]]. [[ticket-67-store-formats-unnamed]] promoted here: do not invent store names.

## Non-goals

Inventing App Store or Play formats. OTA JS bundle. Signing and upload.

## Oracle checklist

- [ ] O1: packaged binary exists
  CHECK: node --test tests/store-packaging/packaged-binary.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: not OTA JS
  CHECK: node --test tests/store-packaging/not-ota-js.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-273-spec-store-packaging]]
- [[task-274-red-green-packaged-binary]]
- [[task-275-red-green-not-ota-js]]

## See also

- [[location-53-store-packaging]]
- [[location-50-xcode-gradle-shells]]
- [[ticket-67-store-formats-unnamed]]
- [[rounds-257-settle-store-formats]]
- [[glossary]]
