---
id: "task-281-red-green-hatch-not-default"
title: "Red-green: hatch not default"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-280-spec-platform-views"
sprint: "mobile-after-desktop"
slice: "slice-84-platform-view-hatch"
tags: []
created_at: "2026-09-11T21:22:00Z"
updated_at: "2026-09-11T21:22:00Z"
---

# Red-green: hatch not default

## Blocked by

[[task-280-spec-platform-views]]: spec first.

## Done

Occupying the hatch on iOS does not make OEM how all native UI is built. Canvas remains the default host.

## Context

TDD: write the O1 tests named in the platform-views spec. Red, then implement. iOS host from [[purpose-ios-embedder]]. Native default stays canvas from [[location-43-native-canvas-host]] and [[rounds-01-chart-framework]] answer 6. Platform views are a hatch, not the default, from [[location-56-platform-views]].

Do not add public OEM widget classes. Do not switch the native default to OEM. Do not make slot-occupied proof; that is [[task-282-red-green-slot-occupied-on-ios]]. Do not repeat [[purpose-oem-hatch]] canvas-default. Do not repeat [[purpose-ios-embedder]] counter or no-webview oracles.

## Verify

O1 command named in the platform-views spec test.md passes.

scope: tests/ named by that spec, plus iOS embedder default-host proof this task must add

## Links

- [[slice-84-platform-view-hatch]]
- [[task-280-spec-platform-views]]
- [[rounds-279-freeze-platform-view-hatch]]

## Gauntlet

- round 1: `node --test tests/platform-views/hatch-not-default.test.mjs` win. Promise occupying the hatch does not make OEM the default host.
