---
id: "task-256-red-green-embedder-packets"
title: "Red-green: embedder pointer packets"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-255-red-green-press-wins"
sprint: "native-if-funded"
slice: "slice-78-press-wins-arena"
tags: []
created_at: "2026-09-11T06:49:29Z"
updated_at: "2026-09-11T08:10:00Z"
---

# Red-green: embedder pointer packets

## Blocked by

[[task-255-red-green-press-wins]]: press wins first.

## Done

Embedder delivers pointer down, move, and up. Framework arena decides the winner. DOM `stopPropagation` is not the native model.

## Context

TDD: write the O2 tests named in the gesture arena spec. Red, then implement. Tests drive pointer down, move, and up through `addPointer`. No public packet type name. No public `PointerRouter`. Embedder owns input. Framework arena decides the winner.

Do not add OS view-tree recognizers as the only recognizer. Do not repeat press-wins oracles. Those live on [[task-255-red-green-press-wins]]. Do not repeat signal-not-arena oracles. Do not invent IME, clipboard, or accessibility plumbing. Do not invent OEM widget class lists.

## Verify

O2 command named in the gesture arena spec test.md passes.

scope: tests/ named by that spec, plus src/gestures/ packet fan-out this task must add

## Links

- [[slice-78-press-wins-arena]]
- [[task-255-red-green-press-wins]]

## Gauntlet

- round 1: `node --test tests/gesture-arena/embedder-packets.test.mjs` win. Promises named in the gesture arena contract for embedder packets and no DOM `stopPropagation`.
