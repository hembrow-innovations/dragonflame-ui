---
id: "test-gesture-arena"
title: "Gesture arena tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: gesture-arena
tags: [test]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Gesture arena tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `gesture-arena.compete:tap-vs-drag`, `gesture-arena.pressable:onpress-joins`, `gesture-arena.embedder:owns-input`, and `gesture-arena.model:forbid-dom-stop`. Oracle commands:

- node --test tests/gesture-arena/press-wins.test.mjs
- node --test tests/gesture-arena/embedder-packets.test.mjs

## Tests

- **tests/gesture-arena/press-wins.test.mjs**: `press wins the arena`
  - **How:** app code is `h(pressable, { onPress })`. Setting `onPress` creates the tap recognizer and joins it. Tests construct `GestureArena`, add a `HorizontalDragGestureRecognizer` as the named competitor, deliver pointer down, move, and up through `addPointer`, then `close` and `sweep`. Tap wins. `onPress` fires. Signals do not join
  - **Why:** promises `gesture-arena.compete:tap-vs-drag` and `gesture-arena.pressable:onpress-joins`
- **tests/gesture-arena/embedder-packets.test.mjs**: `embedder packets, not DOM stopPropagation`
  - **How:** embedder delivers pointer down, move, and up. Tests drive those packets through `addPointer`. Framework arena decides the winner. Fails if DOM `stopPropagation` is the native model. No public packet type name
  - **Why:** promises `gesture-arena.embedder:owns-input` and `gesture-arena.model:forbid-dom-stop`

## Gaps

- No test yet for `gesture-arena.surface:forbid-unnamed`, `gesture-arena.kinds:forbid-later`, `gesture-arena.host:forbid-os-only`, or `gesture-arena.hit:forbid-algorithm`.
- Signal-not-arena oracles stay on [[test-signal-dirtying]].
- Six-leaf oracles stay on [[test-leaf-kit]].
- Hit-test stays unimplemented.
