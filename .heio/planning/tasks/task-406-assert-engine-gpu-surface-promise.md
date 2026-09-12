---
id: "task-406-assert-engine-gpu-surface-promise"
title: "Assert engine-gpu-surface promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-405-engine-gpu-surface"
tags: []
created_at: "2026-09-12T10:06:12Z"
updated_at: "2026-09-12T10:06:12Z"
---

# Assert engine-gpu-surface promise

## Blocked by

None.

## Done

[[contract-ffi-scene-commands]] `ffi-scene-commands.gpu:engine-owns` points at a test. The engine owns the GPU surface.

## Context

No matching leftover promise for this engine-owns-GPU grain. Assert [[purpose-ffi-scene-commands]], [[contract-ffi-scene-commands]], and [[test-ffi-scene-commands]] from [[location-37-rust-engine]] GPU surface plus `docs/` or the smallest reversible default.

Current: [[purpose-desktop-embedder]] already lists GPU surface in scope and [[contract-desktop-embedder]] already locked `desktop-embedder.gpu:engine-owns`. [[slice-76-desktop-vsync-window]] already proved the window. [[purpose-ffi-scene-commands]] quotes the grain and does not prove engine-owns-GPU. No `test:` pointer for engine GPU surface on the ffi-scene-commands ladder.

Desired: the leftover promise is locked. The engine owns the GPU surface. Pivot if the embedder owns GPU or Skia is required. Public surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. No public `GpuSurface`. No `GpuContext`. No `Swapchain`. No `Device`. No `Queue`. No `Adapter`. Packed-scene GPU fields stay unnamed. Later FFI GPU commands stay unnamed. `present_one_vsync` stays the existing embedder-to-engine call that uses a private GPU grouping.

Locked defaults from [[rounds-404-freeze-engine-gpu-surface]]: instance, adapter, device, queue, surface, swapchain, and present live as a private grouping in `crates/engine`, not `pub use`d. No `pub use` of wgpu types or `GpuError` stage variants as a catalog. No `docs/specs/ui-framework/gpu-surface/` area. Test path is `tests/ffi-scene-commands/engine-gpu-surface.test.mjs`. Do not rewrite desktop-embedder, vsync-client, raster, glyphs, images, or compositing promises. Do not wait on [[slice-401-engine-vsync-client]], [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]]. Do not mint a [[location-38-wgpu]] slice.

Out of scope: product code. Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], [[slice-393-engine-images]], [[slice-397-engine-compositing]], or [[slice-401-engine-vsync-client]]. Repeating vsync-window, vsync-client, raster, glyphs, images, or compositing oracles.

## Verify

Contract promise `ffi-scene-commands.gpu:engine-owns` has a `test:` pointer. [[test-ffi-scene-commands]] names the CHECK. Open product questions are none. No product code. Desktop-embedder, vsync-client, raster, glyphs, images, and compositing promises still hold.

scope: docs/specs/ui-framework/ffi-scene-commands/

## Links

- [[slice-405-engine-gpu-surface]]
- [[rounds-404-freeze-engine-gpu-surface]]
- [[location-37-rust-engine]]
- [[location-38-wgpu]]
- [[purpose-desktop-embedder]]
- [[contract-desktop-embedder]]
- [[purpose-ffi-scene-commands]]
- [[contract-ffi-scene-commands]]
- [[glossary]]
- [[architecture-layer-cake]]
