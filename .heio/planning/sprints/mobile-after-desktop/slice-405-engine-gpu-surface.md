---
id: "slice-405-engine-gpu-surface"
title: "Engine GPU surface"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T10:06:12Z"
updated_at: "2026-09-12T10:06:12Z"
---

# Engine GPU surface

## Why

The engine owns the GPU surface. Do not let the embedder own GPU or require Skia.

## Done

The engine owns the GPU surface.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], [[slice-393-engine-images]], [[slice-397-engine-compositing]], or [[slice-401-engine-vsync-client]]. Window opening as this grain. Vsync client as this grain. Glyphs as this grain. Images as this grain. Compositing as this grain. Raster as this grain. Public `GpuSurface`. `GpuContext`. `Swapchain`. `Device`. `Queue`. `Adapter`. `pub use` of wgpu types. Public `GpuError` stage variants as a catalog. Packed-scene GPU fields. Later FFI GPU commands. Embedder owning GPU. Location-38 When funded as this grain. Location-38 Not web GPU as this grain. Location-39 Window as this grain. Skia. Flutter Engine. CanvasKit. Skwasm. A `docs/specs/ui-framework/gpu-surface/` area. Minting a [[location-38-wgpu]] slice. Rewriting the location destination.

## Oracle checklist

- [ ] O1: the engine owns the GPU surface
  CHECK: node --test tests/ffi-scene-commands/engine-gpu-surface.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-406-assert-engine-gpu-surface-promise]]
- [[task-407-red-green-engine-gpu-surface]]

## See also

- [[location-37-rust-engine]]
- [[location-38-wgpu]]
- [[location-45-threads]]
- [[location-18-native-engine-desktop]]
- [[location-19-mobile-embedders]]
- [[slice-76-desktop-vsync-window]]
- [[rounds-404-freeze-engine-gpu-surface]]
- [[purpose-desktop-embedder]]
- [[contract-desktop-embedder]]
- [[purpose-ffi-scene-commands]]
- [[contract-ffi-scene-commands]]
- [[glossary]]
- [[architecture-layer-cake]]
