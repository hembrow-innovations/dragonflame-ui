---
id: "task-390-assert-embedder-owns-input-promise"
title: "Assert embedder-owns input promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-389-input"
tags: []
created_at: "2026-09-12T09:00:39Z"
updated_at: "2026-09-12T09:00:39Z"
---

# Assert embedder-owns input promise

## Blocked by

None.

## Done

[[contract-desktop-embedder]] `desktop-embedder.input:embedder-owns` points at a test. The embedder owns input, IME, clipboard, and accessibility plumbing.

## Context

No matching promise for this leftover grain. Assert [[purpose-desktop-embedder]], [[contract-desktop-embedder]], and [[test-desktop-embedder]] from [[location-39-desktop-embedder]] Input plus `docs/` or the smallest reversible default.

Current: [[purpose-desktop-embedder]] already lists Input in scope and parks implementing input, IME, clipboard, or accessibility plumbing as Out of scope for vsync-window oracles. Window, vsync, GPU, no-WebView, and no-JS-engine are already locked. No `test:` pointer for embedder input plumbing.

Desired: the promise is locked. The embedder owns input, IME, clipboard, and accessibility plumbing. Pivot if a WebView shell owns input. Public surface stays `open_vsync_window`. No public Input. No Clipboard. No IME. No AccessibilityBridge. No PointerPacket. The four jobs leave purpose Out of scope.

Locked defaults from [[rounds-388-freeze-input]]: the four live as private adapters in `crates/embedder`. winit `WindowEvent` stays private. Framework still owns `GestureArena` winner and `SemanticsNode`. No `docs/specs/ui-framework/input/` area. Test path is `tests/desktop-embedder/input-plumbing.test.mjs`. Do not rewrite vsync-window, no-WebView, or no-JS-engine promises. Do not wait on [[slice-83-talk-and-measure]].

Out of scope: product code. Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], or [[slice-385-single-ui-thread]]. Repeating vsync-window, arena packet, or SemanticsNode dump oracles.

## Verify

Contract promise `desktop-embedder.input:embedder-owns` has a `test:` pointer. [[test-desktop-embedder]] names the CHECK. Open product questions are none. No product code. Vsync-window, no-WebView, and no-JS-engine promises still hold.

scope: docs/specs/ui-framework/desktop-embedder/

## Links

- [[slice-389-input]]
- [[rounds-388-freeze-input]]
- [[location-39-desktop-embedder]]
- [[purpose-desktop-embedder]]
- [[contract-desktop-embedder]]
- [[glossary]]
- [[architecture-layer-cake]]
