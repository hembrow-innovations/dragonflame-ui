---
id: "slice-356-not-toolchain-d04"
title: "Not toolchain D04"
kind: slice
status: frozen
sprint: "mobile-after-desktop"
blocked_by:
  - "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-12T06:52:16Z"
updated_at: "2026-09-12T06:52:16Z"
---

# Not toolchain D04

## Why

iOS triples stay this product's mobile packaging. Do not file them on the language ROADMAP.

## Done

These triples are this product's mobile packaging, not toolchain D04.

## Blocked by

[[slice-76-desktop-vsync-window]]: after desktop honesty.

## Non-goals

Restaging [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], or [[slice-328-phase-3-gate-unstated]]. Simulator or arm64-device membership oracles. Crate-workspace identity. Android not-toolchain on [[location-52-android-triples]]. Store names and formats. A public `TargetTriple`, `IosTriple`, or `shippedTriples()` type. Rustc target strings on the framework API. Filing triples on the language ROADMAP. A general LLVM lowerer. `UiKitView`. A `docs/specs/ui-framework/ios-triples/` area. Grepping a sibling toolchain ROADMAP as this product's CHECK.

## Oracle checklist

- [ ] O1: these triples are this product's mobile packaging, not toolchain D04
  CHECK: node --test tests/ios-embedder/not-toolchain-triples.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-357-lock-not-toolchain-promise]]
- [[task-358-red-green-not-toolchain-triples]]

## See also

- [[location-51-ios-triples]]
- [[location-19-mobile-embedders]]
- [[location-48-ios-embedder]]
- [[slice-76-desktop-vsync-window]]
- [[slice-80-ios-counter]]
- [[rounds-355-freeze-not-toolchain-d04]]
- [[purpose-ios-embedder]]
- [[contract-ios-embedder]]
- [[intent]]
- [[overview-ui-framework]]
