---
id: "task-168-red-green-taffy-rect"
title: "Red-green: Taffy lays out a rect"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-167-spec-scene-submit"
sprint: "native-if-funded"
slice: "slice-77-draw-a-rect"
tags: []
created_at: "2026-09-11T12:00:00Z"
updated_at: "2026-09-11T12:00:00Z"
---

# Red-green: Taffy lays out a rect

## Blocked by

[[task-167-spec-scene-submit]]: spec first.

## Done

A colored rect is laid out by Taffy in the engine and submitted as one packed scene through one `extern "C"` submit.

## Context

TDD: write the O1 tests named in the scene spec. Red, then implement. Framework talks one packed scene struct. Engine records a draw list. CSS is not the native layout runtime.

Do not add a begin/end command stream. Do not add a second IR. Do not share a signal object across workers. Do not make GPU submit the UI-thread proof; that is [[task-169-red-green-gpu-not-ui]].

## Verify

O1 command named in the scene spec test.md passes.

scope: tests/ named by that spec, plus engine layout and scene submit this task must add

## Links

- [[slice-77-draw-a-rect]]
- [[task-167-spec-scene-submit]]
