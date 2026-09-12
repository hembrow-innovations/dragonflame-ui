---
id: "task-410-lock-layers-uncollapsed-promise"
title: "Lock layers-uncollapsed promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-409-not-runtime"
tags: []
created_at: "2026-09-12T10:24:00Z"
updated_at: "2026-09-12T10:24:00Z"
---

# Lock layers-uncollapsed promise

## Blocked by

None.

## Done

[[contract-desktop-embedder]] `desktop-embedder.layers:uncollapsed` points at a test. Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs.

## Context

[[purpose-desktop-embedder]] already lists Not Runtime in scope and [[contract-desktop-embedder]] already asserts `desktop-embedder.layers:uncollapsed` with no `test:` pointer. Point that existing promise at a test from [[location-37-rust-engine]] Not Runtime plus `docs/` or the smallest reversible default. Do not rewrite the promise sentence.

Current: the sentence is asserted. No `test:` pointer. No layers-uncollapsed CHECK.

Desired: the promise is locked. Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs. Pivot if Runtime is treated as graphics. Public surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. No public `LayerCake`. No `Layers`. No `RuntimeHandle`. No `EngineHandle`. No `EmbedderHandle`.

Locked defaults from [[rounds-408-freeze-not-runtime]]: crate-seam evidence in `crates/engine`, `crates/runtime`, and `crates/embedder`, not a Layers API. No `docs/specs/ui-framework/not-runtime/` area. Test path is `tests/desktop-embedder/layers-uncollapsed.test.mjs`. Do not rewrite gpu-surface, vsync-client, raster, glyphs, images, or compositing promises. Do not wait on [[slice-405-engine-gpu-surface]], [[slice-401-engine-vsync-client]], [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]].

Out of scope: product code. Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], [[slice-393-engine-images]], [[slice-397-engine-compositing]], [[slice-401-engine-vsync-client]], or [[slice-405-engine-gpu-surface]]. Repeating vsync-window, gpu-surface, raster, glyphs, images, compositing, or vsync-client oracles.

## Verify

Contract promise `desktop-embedder.layers:uncollapsed` has a `test:` pointer. [[test-desktop-embedder]] names the CHECK. Open product questions are none. No product code. Gpu-surface, vsync-client, raster, glyphs, images, and compositing promises still hold.

scope: docs/specs/ui-framework/desktop-embedder/

## Links

- [[slice-409-not-runtime]]
- [[rounds-408-freeze-not-runtime]]
- [[location-37-rust-engine]]
- [[purpose-desktop-embedder]]
- [[contract-desktop-embedder]]
- [[glossary]]
- [[architecture-layer-cake]]
