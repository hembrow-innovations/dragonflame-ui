---
id: "task-398-assert-engine-composites-promise"
title: "Assert engine-composites promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-397-engine-compositing"
tags: []
created_at: "2026-09-12T09:33:44Z"
updated_at: "2026-09-12T09:33:44Z"
---

# Assert engine-composites promise

## Blocked by

None.

## Done

[[contract-ffi-scene-commands]] `ffi-scene-commands.compositing:engine-composites` points at a test. The engine composites a layer tree of offset, clip, transform, picture, and platform-view.

## Context

No matching promise for this leftover grain. Assert [[purpose-ffi-scene-commands]], [[contract-ffi-scene-commands]], and [[test-ffi-scene-commands]] from [[location-37-rust-engine]] Compositing plus `docs/` or the smallest reversible default.

Current: [[purpose-ffi-scene-commands]] already lists Compositing in scope and parks compositing a layer tree as Out of scope for colored-rect oracles. Colored-rect submit and GPU-not-UI are already locked. No `test:` pointer for engine compositing.

Desired: the promise is locked. The engine composites a layer tree of offset, clip, transform, picture, and platform-view. Pivot if the framework composites. Public surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. No public `OffsetLayer`. No `ClipLayer`. No `TransformLayer`. No `PictureLayer`. No `PlatformViewLayer`. No `Compositor`. Packed-scene compositing fields stay unnamed. Later FFI commands stay unnamed. Hatch `Layer` and `recorded_layer_tree` stay hatch evidence.

Locked defaults from [[rounds-396-freeze-engine-compositing]]: compositing lives as a private compositor in `crates/engine`, not `pub use`d. Offset, clip, transform, picture, and platform-view stay one knowledge grouping. No `docs/specs/ui-framework/engine-compositing/` area. Test path is `tests/ffi-scene-commands/engine-compositing.test.mjs`. Do not rewrite colored-rect, raster, or layout promises. Do not wait on [[slice-84-platform-view-hatch]], [[slice-364-pipeline-copy]], or [[slice-393-engine-images]].

Out of scope: product code. Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], or [[slice-393-engine-images]]. Repeating colored-rect, hatch, images, or function-component oracles.

## Verify

Contract promise `ffi-scene-commands.compositing:engine-composites` has a `test:` pointer. [[test-ffi-scene-commands]] names the CHECK. Open product questions are none. No product code. Colored-rect, raster, and layout promises still hold.

scope: docs/specs/ui-framework/ffi-scene-commands/

## Links

- [[slice-397-engine-compositing]]
- [[rounds-396-freeze-engine-compositing]]
- [[location-37-rust-engine]]
- [[purpose-ffi-scene-commands]]
- [[contract-ffi-scene-commands]]
- [[glossary]]
- [[architecture-layer-cake]]
