---
id: "task-394-assert-engine-owns-images-promise"
title: "Assert engine-owns images promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-393-engine-images"
tags: []
created_at: "2026-09-12T09:18:42Z"
updated_at: "2026-09-12T09:18:42Z"
---

# Assert engine-owns images promise

## Blocked by

None.

## Done

[[contract-ffi-scene-commands]] `ffi-scene-commands.images:engine-owns` points at a test. The engine owns images, with image decode on the IO thread.

## Context

No matching promise for this leftover grain. Assert [[purpose-ffi-scene-commands]], [[contract-ffi-scene-commands]], and [[test-ffi-scene-commands]] from [[location-37-rust-engine]] Images plus `docs/` or the smallest reversible default.

Current: [[purpose-ffi-scene-commands]] already lists Images in scope and parks image decode on the IO thread as Out of scope for colored-rect oracles. Colored-rect submit and GPU-not-UI are already locked. No `test:` pointer for engine-owned images.

Desired: the promise is locked. The engine owns images, with image decode on the IO thread. Pivot if image decode blocks the UI thread. Public surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. No public Image. No `loadImage`. No ImageDecoder. No DecodeJob. No Thread. Packed-scene image fields stay unnamed. Later FFI commands stay unnamed.

Locked defaults from [[rounds-392-freeze-engine-images]]: images live as a private store in `crates/engine`, not `pub use`d. Codec, decoded cache, and GPU upload stay one knowledge grouping. No `docs/specs/ui-framework/engine-images/` area. Test path is `tests/ffi-scene-commands/engine-images.test.mjs`. Do not rewrite colored-rect, raster, or layout promises. Do not wait on [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], or [[slice-385-single-ui-thread]].

Out of scope: product code. Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], or [[slice-389-input]]. Repeating colored-rect, glyphs, or loadFont oracles.

## Verify

Contract promise `ffi-scene-commands.images:engine-owns` has a `test:` pointer. [[test-ffi-scene-commands]] names the CHECK. Open product questions are none. No product code. Colored-rect, raster, and layout promises still hold.

scope: docs/specs/ui-framework/ffi-scene-commands/

## Links

- [[slice-393-engine-images]]
- [[rounds-392-freeze-engine-images]]
- [[location-37-rust-engine]]
- [[purpose-ffi-scene-commands]]
- [[contract-ffi-scene-commands]]
- [[glossary]]
- [[architecture-layer-cake]]
