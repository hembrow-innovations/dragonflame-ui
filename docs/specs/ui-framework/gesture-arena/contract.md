---
id: "contract-gesture-arena"
title: "Gesture arena contract"
kind: contract
description: "Durable, plain-language promises for the first-tracer gesture arena. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: gesture-arena
tags: [contract]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Gesture arena contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `gesture-arena.compete:tap-vs-drag`: Pointer input uses a gesture arena of competing recognizers. The competing pair is tap versus horizontal drag. Export `TapGestureRecognizer` and `HorizontalDragGestureRecognizer`. `GestureArena` verbs are `add`, `close`, `sweep`. Recognizer verbs are `addPointer`, `acceptGesture`, `rejectGesture`, `resolve`. First to accept, or last not to reject, wins. `sweep` on pointer up gives the win to the first member still in.
  test: press wins the arena
- `gesture-arena.pressable:onpress-joins`: App code is `h(pressable, { onPress })`. Setting `onPress` creates the tap recognizer and joins it. Horizontal drag is the named competitor in the oracle. `onPress` fires when tap wins. Signals do not join.
  test: press wins the arena
- `gesture-arena.embedder:owns-input`: The embedder owns input and the framework arena decides the winner. Embedder delivers pointer down, move, and up. Tests drive those packets through `addPointer`. There is no public packet type name.
  test: embedder packets, not DOM stopPropagation
- `gesture-arena.model:forbid-dom-stop`: DOM `stopPropagation` is not the native model.
  test: embedder packets, not DOM stopPropagation
- `gesture-arena.surface:forbid-unnamed`: The first tracer does not export `onPressIn`, `onPressOut`, `onTapDown`, `onTapCancel`, `GestureArenaTeam`, public `PointerRouter`, public `Listener`, public `GestureDetector`, or a public `joinArena`.
- `gesture-arena.kinds:forbid-later`: Long press, double tap, scale, pan, and scroll actually scrolling stay unnamed.
- `gesture-arena.host:forbid-os-only`: The OS view tree is not the only recognizer. UIKit `require(toFail:)`, every UIKit class as a recognizer, OEM widget class lists, and RNGH composition stay unnamed.
- `gesture-arena.hit:forbid-algorithm`: This tracer does not invent a hit-test algorithm. Hit-test stays on render objects.
