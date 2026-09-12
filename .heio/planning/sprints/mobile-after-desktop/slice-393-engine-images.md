---
id: "slice-393-engine-images"
title: "Engine images"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T09:18:42Z"
updated_at: "2026-09-12T09:18:42Z"
---

# Engine images

## Why

The engine owns images, with image decode on the IO thread. Do not let decode block the UI thread.

## Done

The engine owns images, with image decode on the IO thread.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], or [[slice-389-input]]. Colored-rect submit as this grain. Glyphs as this grain. IO font load as this grain. Compositing. Public Image. `loadImage`. ImageDecoder. DecodeJob. Thread. Packed-scene image fields. Later FFI image commands. Codec names. Atlas. Texture ids. Skia. A `docs/specs/ui-framework/engine-images/` area. Rewriting the location destination.

## Oracle checklist

- [ ] O1: the engine owns images, with image decode on the IO thread
  CHECK: node --test tests/ffi-scene-commands/engine-images.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-394-assert-engine-owns-images-promise]]
- [[task-395-red-green-engine-images]]

## See also

- [[location-37-rust-engine]]
- [[location-45-threads]]
- [[location-18-native-engine-desktop]]
- [[location-19-mobile-embedders]]
- [[slice-76-desktop-vsync-window]]
- [[rounds-392-freeze-engine-images]]
- [[purpose-ffi-scene-commands]]
- [[contract-ffi-scene-commands]]
- [[glossary]]
- [[architecture-layer-cake]]
