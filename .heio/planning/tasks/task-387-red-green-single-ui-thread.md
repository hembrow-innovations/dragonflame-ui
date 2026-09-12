---
id: "task-387-red-green-single-ui-thread"
title: "Red-green Single UI thread"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-386-assert-heavy-off-ui-promise"
sprint: "mobile-after-desktop"
slice: "slice-385-single-ui-thread"
tags: []
created_at: "2026-09-12T08:43:09Z"
updated_at: "2026-09-12T08:43:09Z"
---

# Red-green Single UI thread

## Blocked by

[[task-386-assert-heavy-off-ui-promise]]: heavy-off-ui promise first.

## Done

`node --test tests/platform-views/single-ui-thread.test.mjs` passes.

## Context

Current: [[purpose-platform-views]] names Single UI thread in scope. Occupancy and hatch-not-default oracles exist. No placement oracle that heavy work is off the UI thread while hatch stays hatch.

Desired: the test proves occupying a hatch still leaves framework work on the Runtime job queue, that engine raster, IO, and compute never share a signal object, that canvas remains the default host, and that no public Thread, `occupyHatch`, or `UiKitView` is exported. No `docs/specs/ui-framework/single-ui-thread/` area.

Do not restage occupying the hatch or hatch-not-default. Those live on [[purpose-platform-views]] and [[slice-84-platform-view-hatch]]. Do not restage IO font load. That lives on [[slice-381-io-font-load]]. Do not invent a public Thread. Do not make platform views how all native UI is built.

## Verify

CHECK: node --test tests/platform-views/single-ui-thread.test.mjs
EXPECT: pass

scope: tests/platform-views/ crates/engine/ docs/specs/ui-framework/platform-views/ src/

## Links

- [[slice-385-single-ui-thread]]
- [[task-386-assert-heavy-off-ui-promise]]
- [[rounds-384-freeze-single-ui-thread]]
