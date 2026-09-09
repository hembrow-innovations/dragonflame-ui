---
id: "slice-79-oem-hatch-slot"
title: "OEM hatch slot"
kind: slice
status: shaping
sprint: "native-if-funded"
blocked_by:
  - "slice-77-draw-a-rect"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# OEM hatch slot

## Why

Hatch demo. Canvas host remains default. Layer tree can hold a platform-view slot.

## Done

OEM widgets are available as a native-only adapter and are not the default host. The composite tree accepts a platform-view layer. No JS bridge required for the slot.

## Blocked by

[[slice-77-draw-a-rect]]: canvas default exists first.

## Non-goals

OEM as the native default. Web host as OEM.

## Oracle checklist

- [ ] O1: canvas remains default
  CHECK: command named in the hatch spec test.md after freeze
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: platform-view slot exists
  CHECK: command named in that spec
  EXPECT: pass
  EVIDENCE: pending

## Pool

None until freeze.

## See also

- [[location-44-oem-escape-hatch]]
