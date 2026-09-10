---
id: "task-167-spec-scene-submit"
title: "Spec one scene submit"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-166-red-green-vsync-window"
sprint: "native-if-funded"
slice: "slice-77-draw-a-rect"
tags: []
created_at: "2026-09-11T12:00:00Z"
updated_at: "2026-09-11T22:30:00Z"
---

# Spec one scene submit

## Blocked by

[[task-166-red-green-vsync-window]]: desktop window first.

## Done

Scene spec folder exists from wayfinder and [[rounds-160-fund-native]]: Taffy in the engine, one packed scene struct with a colored rect, one `extern "C"` submit, draw list recorded, GPU submit on the raster thread.

## Context

Write purpose, contract, and test.md from [[rounds-160-fund-native]], [[ticket-66-ffi-commands-unnamed]], and locations 27, 37, 40, 41, 42, 43, 45. Quote child destination sentences.

First-tracer set is one packed scene struct with a colored rect and one `extern "C"` submit. Engine records the draw list and rasters. Unboxed numbers and structs. In-process. Synchronous. Frame callback is a job on the Runtime queue. Workers never share a signal object.

Do not invent a begin/end command stream. Do not invent later commands. Do not invent a second IR or UI bytecode. Do not use CSS as native layout. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/ffi-scene-commands/

## Links

- [[slice-77-draw-a-rect]]
- [[rounds-160-fund-native]]
- [[ticket-66-ffi-commands-unnamed]]
