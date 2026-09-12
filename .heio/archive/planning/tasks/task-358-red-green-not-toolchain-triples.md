---
id: "task-358-red-green-not-toolchain-triples"
title: "Red-green not-toolchain triples"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-357-lock-not-toolchain-promise"
sprint: "mobile-after-desktop"
slice: "slice-356-not-toolchain-d04"
tags: []
created_at: "2026-09-12T06:52:16Z"
updated_at: "2026-09-12T09:44:48Z"
---

# Red-green not-toolchain triples

## Blocked by

[[task-357-lock-not-toolchain-promise]]: not-toolchain promise first.

## Done

`node --test tests/ios-embedder/not-toolchain-triples.test.mjs` passes.

## Context

Current: [[purpose-ios-embedder]] names the grain. Simulator and arm64 device membership tests exist. No ownership oracle that these triples are this product's mobile packaging, not toolchain D04.

Desired: the test proves these triples are this product's mobile packaging, not toolchain D04. Packaging lives at `hosts/ios/` plus the embedder ios module. No public `TargetTriple`, `IosTriple`, or `shippedTriples()` type. No rustc target strings on the framework API. No `docs/specs/ui-framework/ios-triples/` area. The oracle fails on a claim that these triples are language ROADMAP work in this checkout, not on the purpose grain sentence naming D04.

Do not restage simulator or arm64-device membership. Those live on `ios-embedder.triples:simulator` and `ios-embedder.triples:arm64-device`. Do not restage crate-workspace identity. Do not grep a sibling toolchain ROADMAP as this product's CHECK. Do not restage [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. Do not steal Android not-toolchain on [[location-52-android-triples]]. Do not invent store names or `UiKitView`.

## Verify

CHECK: node --test tests/ios-embedder/not-toolchain-triples.test.mjs
EXPECT: pass

scope: tests/ios-embedder/ docs/specs/ui-framework/ios-embedder/ hosts/ios/

## Links

- [[slice-356-not-toolchain-d04]]
- [[task-357-lock-not-toolchain-promise]]
- [[rounds-355-freeze-not-toolchain-d04]]

## Gauntlet

- **round 1**: `node --test tests/ios-embedder/not-toolchain-triples.test.mjs`; win; 1 pass 0 fail
