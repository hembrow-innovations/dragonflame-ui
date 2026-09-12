---
id: "slice-385-single-ui-thread"
title: "Single UI thread"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T08:43:09Z"
updated_at: "2026-09-12T08:43:09Z"
---

# Single UI thread

## Why

Heavy work is off the UI thread. Platform views stay an escape hatch, not the default.

## Done

Heavy work is off the UI thread and platform views stay an escape hatch, not the default.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], or [[slice-381-io-font-load]]. Occupancy or hatch-not-default oracles. Escape hatch, Composite slot, or OEM adapter as this grain. Public Thread. `occupyHatch`. `UiKitView`. Android attach. Web OEM. Async Bridge. A `docs/specs/ui-framework/single-ui-thread/` area. Rewriting the location destination.

## Oracle checklist

- [ ] O1: heavy work is off the UI thread and hatch stays hatch
  CHECK: node --test tests/platform-views/single-ui-thread.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-386-assert-heavy-off-ui-promise]]
- [[task-387-red-green-single-ui-thread]]

## See also

- [[location-56-platform-views]]
- [[location-19-mobile-embedders]]
- [[location-45-threads]]
- [[slice-76-desktop-vsync-window]]
- [[slice-84-platform-view-hatch]]
- [[rounds-384-freeze-single-ui-thread]]
- [[purpose-platform-views]]
- [[contract-platform-views]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
