---
id: "rounds-251-name-gesture-apis"
title: "Name first gesture recognizer APIs"
kind: round
sitting_kind: planning
status: published
tags: []
created_at: "2026-09-11T06:41:57Z"
updated_at: "2026-09-11T06:55:00Z"
---

# Name first gesture recognizer APIs

Counterpart is the user in chat. Notebook is this round.

Pick: [[ticket-171-gesture-apis-unnamed]]. Name the first recognizer APIs so a later /afk-plan can freeze [[slice-78-press-wins-arena]]. Quote [[location-46-gesture-arena]] only: two recognizers compete, pressable can win, signals do not replace hit-test, embedder owns input, framework arena decides the winner. Do not invent UIKit class lists. Do not freeze this sitting. Do not name OEM widget classes.

## Vault pack

Query: name first native gesture recognizer APIs for press-wins-arena
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-46-gesture-arena.md`
- `.heio/planning/sprints/native-if-funded/shape.md`
- `.heio/planning/sprints/native-if-funded/slice-78-press-wins-arena.md`
- `.heio/planning/tickets/ticket-171-gesture-apis-unnamed.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`

Related:

- `docs/specs/ui-framework/leaf-kit/purpose.md`
- `docs/specs/ui-framework/signal-dirtying/purpose.md`
- `.heio/archive/planning/rounds/rounds-160-fund-native.md`
- `.heio/planning/sprints/native-if-funded/slice-79-oem-hatch-slot.md`

Excluded: mobile, JSX, scribble, OEM class lists, rewriting location destinations, inventing names without counterpart.

Next: HITL names. Then /afk-plan freezes. Do not write `docs/specs/` here.

No packer script exists. Assembled by hand. Open product questions on the overview are empty. Gesture recognizer APIs stay unnamed on [[rounds-160-fund-native]].

## Round 1

### Questions

1. **Competing pair**: Which two recognizer kinds compete in the first press-wins-arena tracer.

### Answers

1. **Competing pair**: Tap versus horizontal drag. Pressable is the tap side. Scroll actually scrolling waits. A dummy competitor is out.

## Round 2

### Questions

1. **Press callback**: What app-facing callback on the pressable leaf fires when tap wins the arena.

### Answers

1. **Press callback**: `onPress` on the pressable leaf. Not Flutter `onTap`. `onPressIn`, `onPressOut`, and cancel stay unnamed this tracer.

## Round 3

Counterpart said use the remaining recommended names.

### Questions

1. **Public types**: Whether this tracer exports recognizer type names, or only `pressable` plus `onPress`.
2. **Join rule**: How pressable joins the arena.
3. **Arena verbs**: First arena and recognizer verbs.
4. **Embedder packets**: What the embedder delivers.
5. **Wait**: What stays unnamed.

### Answers

1. **Public types**: Export `TapGestureRecognizer` and `HorizontalDragGestureRecognizer`. App code this tracer is still `h(pressable, { onPress })`. Not a public `GestureDetector`. Not RNGH `Gesture.Tap` / `Gesture.Race`.
2. **Join rule**: Setting `onPress` creates the tap recognizer and joins it. Horizontal drag is the named competitor in the oracle. Signals do not join. Hit-test stays on render objects.
3. **Arena verbs**: `GestureArena` with `add`, `close`, `sweep`. Recognizer verbs `addPointer`, `acceptGesture`, `rejectGesture`, `resolve`. First to accept, or last not to reject, wins. `sweep` on pointer up gives the win to the first member still in.
4. **Embedder packets**: Pointer down, move, and up only. Embedder owns input. Framework arena decides the winner. Not DOM `stopPropagation`. Not OS view-tree recognizers as the only recognizer.
5. **Wait**: `onPressIn`, `onPressOut`, `onTapDown`, `onTapCancel`, long press, double tap, scale, pan, `GestureArenaTeam`, public `PointerRouter` or `Listener`, scroll actually scrolling, RNGH composition, UIKit `require(toFail:)`, every UIKit class as a recognizer, OEM widget class lists.

## Confirm

Confirmed.

## Objectives

Name the first recognizer APIs. Leave freeze of [[slice-78-press-wins-arena]] to /afk-plan. Do not implement. Do not write `docs/specs/`.

## Decisions so far

- Competing pair is tap versus horizontal drag.
- App callback is `onPress` on pressable.
- Export `TapGestureRecognizer` and `HorizontalDragGestureRecognizer`.
- Setting `onPress` joins tap. Horizontal drag is the oracle competitor.
- `GestureArena` verbs are `add`, `close`, `sweep`.
- Recognizer verbs are `addPointer`, `acceptGesture`, `rejectGesture`, `resolve`.
- Embedder delivers pointer down, move, and up.

## Not yet specified

- `onPressIn`, `onPressOut`, cancel, long press, double tap, scale, pan
- `GestureArenaTeam`, public `PointerRouter`
- Scroll actually scrolling
- OEM widget class list

## Out of scope

- Freezing [[slice-78-press-wins-arena]] in this sitting
- Writing `docs/specs/`
- Mobile embedders
- DOM bubbling as the native gesture model
- Every UIKit class as a recognizer
