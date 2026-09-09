---
id: "slice-84-platform-view-hatch"
title: "Platform view hatch"
kind: slice
status: shaping
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-79-oem-hatch-slot"
  - "slice-80-ios-counter"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Platform view hatch

## Why

Mobile wiring of the hatch slot owned by [[slice-79-oem-hatch-slot]]. Not a second OEM model.

## Done

A platform view can occupy the slot on iOS or Android and is not how all native UI is built. No async Bridge.

## Blocked by

[[slice-79-oem-hatch-slot]] and [[slice-80-ios-counter]].

## Non-goals

Platform views as the native default. Async Bridge.

## Oracle checklist

- [ ] O1: hatch not default
  CHECK: command named in the platform-view spec test.md after freeze
  EXPECT: pass
  EVIDENCE: pending

## Pool

None until freeze. Device greens will be hitl.

## See also

- [[location-56-platform-views]]
- [[location-44-oem-escape-hatch]]
