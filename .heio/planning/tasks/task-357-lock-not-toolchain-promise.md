---
id: "task-357-lock-not-toolchain-promise"
title: "Lock not-toolchain promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-356-not-toolchain-d04"
tags: []
created_at: "2026-09-12T06:52:16Z"
updated_at: "2026-09-12T06:52:16Z"
---

# Lock not-toolchain promise

## Blocked by

None.

## Done

[[contract-ios-embedder]] `ios-embedder.triples:not-toolchain` points at a test. These triples are this product's mobile packaging, not toolchain D04.

## Context

Asserted promise, no test pointer. Point [[contract-ios-embedder]] and [[test-ios-embedder]] at the ownership oracle from [[location-51-ios-triples]] Not toolchain D04 plus `docs/` or the smallest reversible default.

Current: [[purpose-ios-embedder]] already names the grain. [[contract-ios-embedder]] asserts `ios-embedder.triples:not-toolchain` with no `test:` line. Simulator and arm64 device membership are already locked.

Desired: the ownership promise is locked. These triples are this product's mobile packaging, not toolchain D04. Pivot if triples are filed on the language ROADMAP.

Locked defaults from [[rounds-355-freeze-not-toolchain-d04]]: no public `TargetTriple`, `IosTriple`, or `shippedTriples()` type. No `docs/specs/ui-framework/ios-triples/` area. No second crate. Test path is `tests/ios-embedder/not-toolchain-triples.test.mjs`. Do not edit [[contract-android-embedder]]. Do not grep a sibling toolchain ROADMAP as this product's CHECK. Do not rewrite simulator or arm64-device promises.

Out of scope: product code. Restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]]. Repeating simulator, arm64-device, or crate-workspace identity oracles. Android not-toolchain. Store names and formats. A general LLVM lowerer. `UiKitView`.

## Verify

Contract promise `ios-embedder.triples:not-toolchain` has a `test:` pointer. [[test-ios-embedder]] names the CHECK. Open product questions are none. No product code. Simulator and arm64-device promises still hold.

scope: docs/specs/ui-framework/ios-embedder/

## Links

- [[slice-356-not-toolchain-d04]]
- [[rounds-355-freeze-not-toolchain-d04]]
- [[location-51-ios-triples]]
- [[purpose-ios-embedder]]
- [[contract-ios-embedder]]
- [[intent]]
