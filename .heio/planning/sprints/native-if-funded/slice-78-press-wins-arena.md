---
id: "slice-78-press-wins-arena"
title: "Press wins the arena"
kind: slice
status: shaping
sprint: "native-if-funded"
blocked_by:
  - "slice-77-draw-a-rect"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Press wins the arena

## Why

Input demo. Competing recognizers. DOM stopPropagation is not the native model.

## Done

Two recognizers compete. Pressable can win. Signals do not replace hit-test. Embedder owns input. Framework arena decides the winner.

## Blocked by

[[slice-77-draw-a-rect]]: a native scene exists first.

## Non-goals

DOM bubbling as the native gesture model. Every UIKit class as a recognizer.

## Oracle checklist

- [ ] O1: press wins the arena
  CHECK: command named in the gesture spec test.md after freeze
  EXPECT: pass
  EVIDENCE: pending

## Pool

None until freeze.

## See also

- [[location-46-gesture-arena]]
