---
id: "slice-409-not-runtime"
title: "Not Runtime"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T10:24:00Z"
updated_at: "2026-09-12T10:24:00Z"
---

# Not Runtime

## Why

Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs. Do not treat Runtime as graphics.

## Done

Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], [[slice-385-single-ui-thread]], [[slice-389-input]], [[slice-393-engine-images]], [[slice-397-engine-compositing]], [[slice-401-engine-vsync-client]], or [[slice-405-engine-gpu-surface]]. Window opening as this grain. GPU surface as this grain. Vsync client as this grain. Glyphs as this grain. Images as this grain. Compositing as this grain. Raster as this grain. Not Skia as this grain. Public `LayerCake`. `Layers`. `RuntimeHandle`. `EngineHandle`. `EmbedderHandle`. Collapsing layers. Treating Runtime as graphics. Treating Engine as GC. Treating Embedder as Engine. Minting Hermes, JSC, or V8 as this Runtime. A `docs/specs/ui-framework/not-runtime/` area. Rewriting the location destination. Rewriting the `desktop-embedder.layers:uncollapsed` sentence.

## Oracle checklist

- [ ] O1: Engine, Runtime, and Embedder stay uncollapsed
  CHECK: node --test tests/desktop-embedder/layers-uncollapsed.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-410-lock-layers-uncollapsed-promise]]
- [[task-411-red-green-not-runtime]]

## See also

- [[location-37-rust-engine]]
- [[location-18-native-engine-desktop]]
- [[location-19-mobile-embedders]]
- [[location-36-engine-home]]
- [[location-45-threads]]
- [[slice-76-desktop-vsync-window]]
- [[rounds-408-freeze-not-runtime]]
- [[purpose-desktop-embedder]]
- [[contract-desktop-embedder]]
- [[glossary]]
- [[architecture-layer-cake]]
