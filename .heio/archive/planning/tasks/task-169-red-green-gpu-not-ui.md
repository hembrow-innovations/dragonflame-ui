---
id: "task-169-red-green-gpu-not-ui"
title: "Red-green: GPU submit not on UI thread"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-168-red-green-taffy-rect"
sprint: "native-if-funded"
slice: "slice-77-draw-a-rect"
tags: []
created_at: "2026-09-11T12:00:00Z"
updated_at: "2026-09-11T23:30:00Z"
---

# Red-green: GPU submit not on UI thread

## Blocked by

[[task-168-red-green-taffy-rect]]: a scene submit exists first.

## Done

GPU submit of that draw list is not on the UI thread. Raster thread owns submit. Frame callback is a job on the Runtime queue.

## Context

TDD: write the O2 tests named in the scene spec. Red, then implement. UI thread is the Runtime job queue. Raster thread is engine GPU submit.

Do not share a signal object across workers. Do not invent later FFI commands. Do not collapse Engine, Runtime, and Embedder.

## Verify

O2 command named in the scene spec test.md passes.

scope: tests/ named by that spec, plus thread split this task must add

## Links

- [[slice-77-draw-a-rect]]
- [[task-168-red-green-taffy-rect]]

## Gauntlet

- round 1: `node --test tests/ffi-scene-commands/gpu-not-ui.test.mjs` win. Promises `ffi-scene-commands.raster:gpu-not-ui`, `ffi-scene-commands.threads:frame-is-job`.
