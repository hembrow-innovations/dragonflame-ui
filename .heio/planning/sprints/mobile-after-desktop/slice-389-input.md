---
id: "slice-389-input"
title: "Input"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T09:00:39Z"
updated_at: "2026-09-12T09:00:39Z"
---

# Input

## Why

The embedder owns input, IME, clipboard, and accessibility plumbing.

## Done

The embedder owns input, IME, clipboard, and accessibility plumbing.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], or [[slice-385-single-ui-thread]]. Window, Vsync, No WebView, No JS engine, or Phase 2 gate as this grain. Public Input. Clipboard. IME. AccessibilityBridge. PointerPacket. UIKit class lists. Mobile IME. A `docs/specs/ui-framework/input/` area. Rewriting the location destination.

## Oracle checklist

- [ ] O1: embedder owns input, IME, clipboard, and accessibility plumbing
  CHECK: node --test tests/desktop-embedder/input-plumbing.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-390-assert-embedder-owns-input-promise]]
- [[task-391-red-green-input-plumbing]]

## See also

- [[location-39-desktop-embedder]]
- [[location-18-native-engine-desktop]]
- [[location-46-gesture-arena]]
- [[location-54-accessibility]]
- [[slice-76-desktop-vsync-window]]
- [[slice-83-talk-and-measure]]
- [[rounds-388-freeze-input]]
- [[purpose-desktop-embedder]]
- [[contract-desktop-embedder]]
- [[glossary]]
- [[architecture-layer-cake]]
