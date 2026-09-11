---
id: "task-261-red-green-canvas-default"
title: "Red-green: canvas remains default"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-260-spec-oem-hatch"
sprint: "native-if-funded"
slice: "slice-79-oem-hatch-slot"
tags: []
created_at: "2026-09-11T07:41:56Z"
updated_at: "2026-09-11T07:41:56Z"
---

# Red-green: canvas remains default

## Blocked by

[[task-260-spec-oem-hatch]]: spec first.

## Done

A packed scene with no hatch still records the canvas draw list. OEM is not the default host.

## Context

TDD: write the O1 tests named in the OEM hatch spec. Red, then implement. One packed `extern "C"` submit. Default remains the canvas picture path from [[location-43-native-canvas-host]]. OEM widgets are an escape hatch, not the default, from [[location-44-oem-escape-hatch]] and [[rounds-01-chart-framework]] answer 6.

Do not add public OEM widget classes. Do not switch the native default to OEM. Do not make platform-view slot proof; that is [[task-262-red-green-platform-view-slot]]. Do not repeat Taffy-rect or GPU-not-UI oracles.

## Verify

O1 command named in the OEM hatch spec test.md passes.

scope: tests/ named by that spec, plus engine scene default-host proof this task must add

## Links

- [[slice-79-oem-hatch-slot]]
- [[task-260-spec-oem-hatch]]

## Gauntlet

- round 1: `node --test tests/oem-hatch/canvas-default.test.mjs` win. Promise canvas remains the native default host.
