---
id: "purpose-gesture-arena"
title: "Gesture arena purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the first-tracer gesture arena. Tap versus horizontal drag, onPress joins, embedder pointer packets."
status: active
domain: ui-framework
area: gesture-arena
tags: [purpose]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Gesture arena purpose

## Job

Competing recognizers for pointer input exist, and DOM `stopPropagation` is not the native model.

Planning sitting [[rounds-253-freeze-press-wins-arena]], named set [[rounds-251-name-gesture-apis]], and [[glossary]]:

- **Competing pair**: tap versus horizontal drag.
- **App code**: `h(pressable, { onPress })`.
- **Types**: export `TapGestureRecognizer` and `HorizontalDragGestureRecognizer`.
- **Join**: setting `onPress` creates the tap recognizer and joins it. Horizontal drag is the named competitor in the oracle.
- **Arena**: `GestureArena` verbs are `add`, `close`, `sweep`. Recognizer verbs are `addPointer`, `acceptGesture`, `rejectGesture`, `resolve`. First to accept, or last not to reject, wins. `sweep` on pointer up gives the win to the first member still in.
- **Packets**: embedder delivers pointer down, move, and up. Tests drive those packets through `addPointer`. No public packet type name.

## In scope

Child destination sentences from [[location-46-gesture-arena]]:

- **Competing recognizers**: pointer input uses a gesture arena of competing recognizers.
- **Signals do not replace it**: signals do not replace the gesture arena.
- **Embedder input**: the embedder owns input and the framework arena decides the winner.
- **Pressable leaf**: pressable is a host leaf that can join the arena. See [[location-32-host-leaves]]

This area's oracles prove tap versus horizontal drag compete, pressable joins when `onPress` is set, embedder pointer packets, and DOM `stopPropagation` is not the native model. They do not prove signals do not replace the arena. Those live on [[purpose-signal-dirtying]]. They do not prove pressable as a host leaf. Those live on [[purpose-leaf-kit]].

## Out of scope

- `onPressIn`, `onPressOut`, `onTapDown`, `onTapCancel`.
- Long press, double tap, scale, pan.
- `GestureArenaTeam`. Public `PointerRouter` or `Listener`. Public `GestureDetector`.
- Scroll actually scrolling.
- RNGH composition. UIKit `require(toFail:)`. Every UIKit class as a recognizer. OEM widget class lists.
- A hit-test algorithm. Hit-test stays on render objects.
- A public packet type name. A public `joinArena`.
- Repeating signal-not-arena oracles. Those live on [[purpose-signal-dirtying]].
- Repeating six-leaf oracles. Those live on [[purpose-leaf-kit]].
- Implementing the compiler in this repo.

## Surfaces

App code this tracer is `h(pressable, { onPress })`. Tests construct `GestureArena`, add a `HorizontalDragGestureRecognizer` as the named competitor, deliver pointer down, move, and up through `addPointer`, then `close` and `sweep`. Callers do not import `GestureDetector`. Callers do not import `PointerRouter`.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-253-freeze-press-wins-arena]], [[rounds-251-name-gesture-apis]], [[ticket-171-gesture-apis-unnamed]], [[location-46-gesture-arena]], [[glossary]], and [[architecture-layer-cake]].

## Open product questions

- (none)
