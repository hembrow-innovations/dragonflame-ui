---
id: "task-402-assert-engine-vsync-client-promise"
title: "Assert engine-vsync-client promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-401-engine-vsync-client"
tags: []
created_at: "2026-09-12T09:50:13Z"
updated_at: "2026-09-12T09:50:13Z"
---

# Assert engine-vsync-client promise

## Blocked by

None.

## Done

[[contract-ffi-scene-commands]] `ffi-scene-commands.vsync:engine-client` points at a test. The engine is a vsync client and one vsync comes from the embedder.

## Context

No matching leftover promise for this engine-as-client grain. Assert [[purpose-ffi-scene-commands]], [[contract-ffi-scene-commands]], and [[test-ffi-scene-commands]] from [[location-37-rust-engine]] Vsync client plus `docs/` or the smallest reversible default.

Current: [[purpose-desktop-embedder]] already lists Vsync client in scope and [[contract-desktop-embedder]] already locked `desktop-embedder.vsync:embedder-supplies`. [[slice-76-desktop-vsync-window]] already proved the window. [[purpose-ffi-scene-commands]] quotes the grain and does not prove engine-as-client. No `test:` pointer for engine vsync client on the ffi-scene-commands ladder.

Desired: the leftover promise is locked. The engine is a vsync client and one vsync comes from the embedder. Pivot if the framework owns vsync. Public surface stays `Scene`, `submit`, `DrawRect`, `recorded_draw_list`. No public `VsyncClient`. No `VsyncPort`. No `Ticker`. No `SchedulerBinding`. No `AnimationController`. Packed-scene vsync fields stay unnamed. Later FFI vsync commands stay unnamed. `present_one_vsync` stays the existing embedder-to-engine call, not this grain's surface.

Locked defaults from [[rounds-400-freeze-engine-vsync-client]]: vsync-wait, frame-wake, and raster handoff live as a private grouping in `crates/engine`, not `pub use`d. No `docs/specs/ui-framework/vsync-client/` area. Test path is `tests/ffi-scene-commands/engine-vsync-client.test.mjs`. Do not rewrite desktop-embedder, one-vsync, clocks, or compositing promises. Do not wait on [[slice-397-engine-compositing]], [[slice-393-engine-images]], or [[slice-373-engine-glyphs]].

Out of scope: product code. Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], [[slice-393-engine-images]], or [[slice-397-engine-compositing]]. Repeating vsync-window, one-vsync, clocks, or compositing oracles.

## Verify

Contract promise `ffi-scene-commands.vsync:engine-client` has a `test:` pointer. [[test-ffi-scene-commands]] names the CHECK. Open product questions are none. No product code. Desktop-embedder, one-vsync, clocks, and compositing promises still hold.

scope: docs/specs/ui-framework/ffi-scene-commands/

## Links

- [[slice-401-engine-vsync-client]]
- [[rounds-400-freeze-engine-vsync-client]]
- [[location-37-rust-engine]]
- [[purpose-desktop-embedder]]
- [[contract-desktop-embedder]]
- [[purpose-ffi-scene-commands]]
- [[contract-ffi-scene-commands]]
- [[glossary]]
- [[architecture-layer-cake]]
