---
id: "slice-360-android-not-toolchain-d04"
title: "Android not toolchain D04"
kind: slice
status: met
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T07:06:39Z"
updated_at: "2026-09-12T09:56:34Z"
---
# Android not toolchain D04

## Why

Android triples stay this product's mobile packaging. Do not file them on the language ROADMAP.

## Done

These triples are this product's mobile packaging, not toolchain D04.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], or [[slice-356-not-toolchain-d04]]. Emulator or arm64-v8a membership oracles. Crate-workspace identity. iOS not-toolchain on [[location-51-ios-triples]]. Store names and formats. A public `TargetTriple`, `AndroidTriple`, or `shippedTriples()` type. Rustc target strings on the framework API. Filing triples on the language ROADMAP. A general LLVM lowerer. Public `AndroidView`. A `docs/specs/ui-framework/android-triples/` area. Grepping a sibling toolchain ROADMAP as this product's CHECK.

## Oracle checklist

- [x] O1: these triples are this product's mobile packaging, not toolchain D04
  CHECK: node --test tests/android-embedder/not-toolchain-triples.test.mjs
  EXPECT: pass
  EVIDENCE: pass 1 fail 0

## Pool

Durable links to task ids. Never drop them.

- [[task-361-lock-android-not-toolchain-promise]]
- [[task-362-red-green-android-not-toolchain-triples]]

## See also

- [[location-52-android-triples]]
- [[location-19-mobile-embedders]]
- [[location-49-android-embedder]]
- [[slice-76-desktop-vsync-window]]
- [[slice-81-android-counter]]
- [[slice-356-not-toolchain-d04]]
- [[rounds-359-freeze-android-not-toolchain-d04]]
- [[purpose-android-embedder]]
- [[contract-android-embedder]]
- [[intent]]
- [[overview-ui-framework]]
