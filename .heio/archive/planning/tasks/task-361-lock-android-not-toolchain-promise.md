---
id: "task-361-lock-android-not-toolchain-promise"
title: "Lock Android not-toolchain promise"
kind: task
status: completed
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-360-android-not-toolchain-d04"
tags: []
created_at: "2026-09-12T07:06:39Z"
updated_at: "2026-09-12T09:51:00Z"
---
# Lock Android not-toolchain promise

## Blocked by

None.

## Done

[[contract-android-embedder]] `android-embedder.triples:not-toolchain` points at a test. These triples are this product's mobile packaging, not toolchain D04.

## Context

Asserted promise, no test pointer. Point [[contract-android-embedder]] and [[test-android-embedder]] at the ownership oracle from [[location-52-android-triples]] Not toolchain D04 plus `docs/` or the smallest reversible default.

Current: [[purpose-android-embedder]] already names the grain. [[contract-android-embedder]] asserts `android-embedder.triples:not-toolchain` with no `test:` line. Emulator and arm64-v8a membership are already locked.

Desired: the ownership promise is locked. These triples are this product's mobile packaging, not toolchain D04. Pivot if triples are filed on the language ROADMAP.

Locked defaults from [[rounds-359-freeze-android-not-toolchain-d04]]: no public `TargetTriple`, `AndroidTriple`, or `shippedTriples()` type. No `docs/specs/ui-framework/android-triples/` area. No second crate. Test path is `tests/android-embedder/not-toolchain-triples.test.mjs`. Do not edit [[contract-ios-embedder]]. Do not grep a sibling toolchain ROADMAP as this product's CHECK. Do not rewrite emulator or arm64-v8a promises.

Out of scope: product code. Restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], or [[slice-356-not-toolchain-d04]]. Repeating emulator, arm64-v8a, or crate-workspace identity oracles. iOS not-toolchain. Store names and formats. A general LLVM lowerer. Public `AndroidView`.

## Verify

Contract promise `android-embedder.triples:not-toolchain` has a `test:` pointer. [[test-android-embedder]] names the CHECK. Open product questions are none. No product code. Emulator and arm64-v8a promises still hold.

scope: docs/specs/ui-framework/android-embedder/

## Links

- [[slice-360-android-not-toolchain-d04]]
- [[rounds-359-freeze-android-not-toolchain-d04]]
- [[location-52-android-triples]]
- [[purpose-android-embedder]]
- [[contract-android-embedder]]
- [[intent]]
