---
id: "task-254-spec-gesture-arena"
title: "Spec gesture arena"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "native-if-funded"
slice: "slice-78-press-wins-arena"
tags: []
created_at: "2026-09-11T06:49:29Z"
updated_at: "2026-09-11T06:49:29Z"
---

# Spec gesture arena

## Blocked by

None.

## Done

Gesture arena spec folder exists from [[location-46-gesture-arena]], [[rounds-251-name-gesture-apis]], and [[glossary]]: tap versus horizontal drag, `h(pressable, { onPress })`, `GestureArena` add close sweep, recognizer addPointer acceptGesture rejectGesture resolve, embedder pointer down move up.

## Context

Write purpose, contract, and test.md from [[rounds-253-freeze-press-wins-arena]], [[rounds-251-name-gesture-apis]], [[ticket-171-gesture-apis-unnamed]], and [[location-46-gesture-arena]]. Quote child destination sentences.

First tracer: `h(pressable, { onPress })`. Export `TapGestureRecognizer` and `HorizontalDragGestureRecognizer`. Setting `onPress` creates the tap recognizer and joins it. Horizontal drag is the named competitor in the oracle. First to accept, or last not to reject, wins. `sweep` on pointer up gives the win to the first member still in. Tests drive pointer down, move, and up through `addPointer`. No public packet type name.

Do not invent `onPressIn`, `onPressOut`, `onTapDown`, `onTapCancel`, long press, double tap, scale, pan, `GestureArenaTeam`, public `PointerRouter` or `Listener`, scroll actually scrolling, RNGH composition, UIKit `require(toFail:)`, every UIKit class as a recognizer, or OEM widget class lists. Do not repeat signal-not-arena oracles. Those live on [[purpose-signal-dirtying]]. Do not invent a hit-test algorithm. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the two oracle tests.

scope: docs/specs/ui-framework/gesture-arena/

## Links

- [[slice-78-press-wins-arena]]
- [[rounds-253-freeze-press-wins-arena]]
- [[rounds-251-name-gesture-apis]]
- [[ticket-171-gesture-apis-unnamed]]
