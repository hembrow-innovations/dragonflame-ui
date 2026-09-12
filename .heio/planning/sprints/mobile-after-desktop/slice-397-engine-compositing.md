---
id: "slice-397-engine-compositing"
title: "Engine compositing"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T09:33:44Z"
updated_at: "2026-09-12T09:33:44Z"
---

# Engine compositing

## Why

The engine composites a layer tree of offset, clip, transform, picture, and platform-view. Do not let the framework composite.

## Done

The engine composites a layer tree of offset, clip, transform, picture, and platform-view.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], or [[slice-393-engine-images]]. Colored-rect submit as this grain. Glyphs as this grain. Images as this grain. Raster as this grain. Hatch slot attach as this grain. Pipeline-copy as this grain. Function-component `h` as this grain. Public `OffsetLayer`. `ClipLayer`. `TransformLayer`. `PictureLayer`. `PlatformViewLayer`. `Compositor`. Growing hatch `Layer` into a type catalog. Proving this grain with `recorded_layer_tree`. Packed-scene compositing fields. Later FFI compositing commands. Skia. Framework compositing. Metal from framework. A `docs/specs/ui-framework/engine-compositing/` area. Rewriting the location destination.

## Oracle checklist

- [ ] O1: the engine composites a layer tree of offset, clip, transform, picture, and platform-view
  CHECK: node --test tests/ffi-scene-commands/engine-compositing.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-398-assert-engine-composites-promise]]
- [[task-399-red-green-engine-compositing]]

## See also

- [[location-37-rust-engine]]
- [[location-45-threads]]
- [[location-18-native-engine-desktop]]
- [[location-19-mobile-embedders]]
- [[slice-76-desktop-vsync-window]]
- [[rounds-396-freeze-engine-compositing]]
- [[purpose-ffi-scene-commands]]
- [[contract-ffi-scene-commands]]
- [[glossary]]
- [[architecture-layer-cake]]
