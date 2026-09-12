---
id: "task-386-assert-heavy-off-ui-promise"
title: "Assert heavy-off-ui promise"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "mobile-after-desktop"
slice: "slice-385-single-ui-thread"
tags: []
created_at: "2026-09-12T08:43:09Z"
updated_at: "2026-09-12T08:43:09Z"
---

# Assert heavy-off-ui promise

## Blocked by

None.

## Done

[[contract-platform-views]] `platform-views.thread:heavy-off-ui` points at a test. Heavy work is off the UI thread. Platform views stay an escape hatch, not the default.

## Context

No matching promise for this leftover grain. Assert [[purpose-platform-views]], [[contract-platform-views]], and [[test-platform-views]] from [[location-56-platform-views]] Single UI thread plus `docs/` or the smallest reversible default.

Current: [[purpose-platform-views]] already lists Single UI thread in scope. Hatch-not-default and slot-occupied are already locked. Occupancy oracles live on [[slice-84-platform-view-hatch]]. No `test:` pointer for heavy work off the UI thread.

Desired: the promise is locked. Heavy work is off the UI thread. Platform views stay hatch, not default. Pivot if platform views are how all native UI is built. Public surface stays packed-scene `submit`. No public Thread. No `occupyHatch`. No `UiKitView`.

Locked defaults from [[rounds-384-freeze-single-ui-thread]]: Runtime job queue is the one UI thread. Raster, IO, and compute stay private in `crates/engine` and never share a signal object. Occupy does not mint a second framework UI thread. No `docs/specs/ui-framework/single-ui-thread/` area. Test path is `tests/platform-views/single-ui-thread.test.mjs`. Do not rewrite occupancy or hatch-not-default promises. Do not wait on [[slice-84-platform-view-hatch]].

Out of scope: product code. Restaging [[slice-80-ios-counter]] through [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], or [[slice-381-io-font-load]]. Repeating occupancy or hatch-not-default oracles.

## Verify

Contract promise `platform-views.thread:heavy-off-ui` has a `test:` pointer. [[test-platform-views]] names the CHECK. Open product questions are none. No product code. Occupancy and hatch-not-default promises still hold.

scope: docs/specs/ui-framework/platform-views/

## Links

- [[slice-385-single-ui-thread]]
- [[rounds-384-freeze-single-ui-thread]]
- [[location-56-platform-views]]
- [[purpose-platform-views]]
- [[contract-platform-views]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
