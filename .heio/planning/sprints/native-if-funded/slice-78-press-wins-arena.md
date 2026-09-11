---
id: "slice-78-press-wins-arena"
title: "Press wins the arena"
kind: slice
status: frozen
sprint: "native-if-funded"
blocked_by:
  - "slice-77-draw-a-rect"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T06:49:29Z"
---

# Press wins the arena

## Why

Input demo. Competing recognizers. DOM stopPropagation is not the native model.

## Done

Two recognizers compete. Pressable can win. Signals do not replace hit-test. Embedder owns input. Framework arena decides the winner. Tap versus horizontal drag. App code is `h(pressable, { onPress })`. Setting `onPress` joins tap.

## Blocked by

[[slice-77-draw-a-rect]]: a native scene exists first. [[ticket-171-gesture-apis-unnamed]] promoted: first-tracer names live on [[rounds-251-name-gesture-apis]] and [[glossary]].

## Non-goals

DOM bubbling as the native gesture model. Every UIKit class as a recognizer. `onPressIn`, `onPressOut`, cancel, long press, double tap, scale, pan. `GestureArenaTeam`. Public `PointerRouter`. Scroll actually scrolling. OEM widget class lists. Hit-test algorithm. Repeating signal-not-arena oracles.

## Oracle checklist

- [ ] O1: press wins the arena
  CHECK: node --test tests/gesture-arena/press-wins.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: embedder packets, not DOM stopPropagation
  CHECK: node --test tests/gesture-arena/embedder-packets.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-254-spec-gesture-arena]]
- [[task-255-red-green-press-wins]]
- [[task-256-red-green-embedder-packets]]

## See also

- [[location-46-gesture-arena]]
- [[location-32-host-leaves]]
- [[ticket-171-gesture-apis-unnamed]]
- [[rounds-251-name-gesture-apis]]
- [[rounds-253-freeze-press-wins-arena]]
- [[glossary]]
