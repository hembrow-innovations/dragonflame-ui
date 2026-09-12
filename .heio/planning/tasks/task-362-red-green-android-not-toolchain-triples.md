---
id: "task-362-red-green-android-not-toolchain-triples"
title: "Red-green Android not-toolchain triples"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-361-lock-android-not-toolchain-promise"
sprint: "mobile-after-desktop"
slice: "slice-360-android-not-toolchain-d04"
tags: []
created_at: "2026-09-12T07:06:39Z"
updated_at: "2026-09-12T07:06:39Z"
---

# Red-green Android not-toolchain triples

## Blocked by

[[task-361-lock-android-not-toolchain-promise]]: not-toolchain promise first.

## Done

`node --test tests/android-embedder/not-toolchain-triples.test.mjs` passes.

## Context

Current: [[purpose-android-embedder]] names the grain. Emulator and arm64-v8a membership tests exist. No ownership oracle that these triples are this product's mobile packaging, not toolchain D04.

Desired: the test proves these triples are this product's mobile packaging, not toolchain D04. Packaging lives at `hosts/android/` plus the embedder android module. No public `TargetTriple`, `AndroidTriple`, or `shippedTriples()` type. No rustc target strings on the framework API. No `docs/specs/ui-framework/android-triples/` area. The oracle fails on a claim that these triples are language ROADMAP work in this checkout, not on the purpose grain sentence naming D04.

Do not restage emulator or arm64-v8a membership. Those live on `android-embedder.triples:emulator` and `android-embedder.triples:arm64-v8a`. Do not restage crate-workspace identity. Do not grep a sibling toolchain ROADMAP as this product's CHECK. Do not restage [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]] or [[slice-356-not-toolchain-d04]]. Do not steal iOS not-toolchain on [[location-51-ios-triples]]. Do not invent store names or public `AndroidView`.

## Verify

CHECK: node --test tests/android-embedder/not-toolchain-triples.test.mjs
EXPECT: pass

scope: tests/android-embedder/ docs/specs/ui-framework/android-embedder/ hosts/android/

## Links

- [[slice-360-android-not-toolchain-d04]]
- [[task-361-lock-android-not-toolchain-promise]]
- [[rounds-359-freeze-android-not-toolchain-d04]]
