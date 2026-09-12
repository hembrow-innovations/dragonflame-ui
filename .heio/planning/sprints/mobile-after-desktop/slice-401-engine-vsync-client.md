---
id: "slice-401-engine-vsync-client"
title: "Engine vsync client"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T09:50:13Z"
updated_at: "2026-09-12T09:50:13Z"
---

# Engine vsync client

## Why

The engine is a vsync client and one vsync comes from the embedder. Do not let the framework own vsync.

## Done

The engine is a vsync client and one vsync comes from the embedder.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], [[slice-393-engine-images]], or [[slice-397-engine-compositing]]. Window opening as this grain. One-vsync clocks as this grain. Glyphs as this grain. Images as this grain. Compositing as this grain. Raster as this grain. GPU surface as this grain. Public `VsyncClient`. `VsyncPort`. `Ticker`. `SchedulerBinding`. `AnimationController`. Treating `present_one_vsync` as this grain's surface. Packed-scene vsync fields. Later FFI vsync commands. Framework owning vsync. Engine owning the window. Native Clock retarget. Location-39 Vsync as this grain. Skia. A `docs/specs/ui-framework/vsync-client/` area. Rewriting the location destination.

## Oracle checklist

- [ ] O1: the engine is a vsync client and one vsync comes from the embedder
  CHECK: node --test tests/ffi-scene-commands/engine-vsync-client.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-402-assert-engine-vsync-client-promise]]
- [[task-403-red-green-engine-vsync-client]]

## See also

- [[location-37-rust-engine]]
- [[location-45-threads]]
- [[location-18-native-engine-desktop]]
- [[location-19-mobile-embedders]]
- [[slice-76-desktop-vsync-window]]
- [[rounds-400-freeze-engine-vsync-client]]
- [[purpose-desktop-embedder]]
- [[contract-desktop-embedder]]
- [[purpose-ffi-scene-commands]]
- [[contract-ffi-scene-commands]]
- [[glossary]]
- [[architecture-layer-cake]]
