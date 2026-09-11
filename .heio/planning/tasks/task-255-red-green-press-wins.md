---
id: "task-255-red-green-press-wins"
title: "Red-green: press wins the arena"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-254-spec-gesture-arena"
sprint: "native-if-funded"
slice: "slice-78-press-wins-arena"
tags: []
created_at: "2026-09-11T06:49:29Z"
updated_at: "2026-09-11T06:49:29Z"
---

# Red-green: press wins the arena

## Blocked by

[[task-254-spec-gesture-arena]]: spec first.

## Done

Tap and horizontal drag compete. Pressable joins when `onPress` is set. `onPress` fires when tap wins.

## Context

TDD: write the O1 tests named in the gesture arena spec. Red, then implement. One `src/gestures/` module. App code is `h(pressable, { onPress })`. Export `TapGestureRecognizer` and `HorizontalDragGestureRecognizer`. Setting `onPress` creates the tap recognizer and joins it. Horizontal drag is the named competitor in the oracle. `GestureArena` verbs are `add`, `close`, `sweep`. Recognizer verbs are `addPointer`, `acceptGesture`, `rejectGesture`, `resolve`. First to accept, or last not to reject, wins. `sweep` on pointer up gives the win to the first member still in.

Do not add `GestureDetector`. Do not add public `PointerRouter`. Do not add `onPressIn`. Do not make embedder-packet proof; that is [[task-256-red-green-embedder-packets]]. Do not implement a hit-test algorithm. Do not treat DOM `stopPropagation` as the native model.

## Verify

O1 command named in the gesture arena spec test.md passes.

scope: tests/ named by that spec, plus src/gestures/ and pressable join this task must add

## Links

- [[slice-78-press-wins-arena]]
- [[task-254-spec-gesture-arena]]

## Gauntlet

- round 1: `node --test tests/gesture-arena/press-wins.test.mjs` win. Promises named in the gesture arena contract for tap versus horizontal drag and `onPress` join.
