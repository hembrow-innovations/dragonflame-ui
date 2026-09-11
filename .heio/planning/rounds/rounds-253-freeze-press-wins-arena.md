---
id: "rounds-253-freeze-press-wins-arena"
title: "Freeze press wins the arena"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-11T06:49:29Z"
updated_at: "2026-09-11T06:49:29Z"
---

# Freeze press wins the arena

Counterpart is the product peer. Notebook is this round.

Pick: [[ticket-171-gesture-apis-unnamed]]. Unblocked open ticket. Does not fit a frozen or active slice. [[slice-78-press-wins-arena]] is shaping. [[slice-76-desktop-vsync-window]] and [[slice-77-draw-a-rect]] are met. Sprint `native-if-funded` may freeze press now that APIs are named on [[rounds-251-name-gesture-apis]] and [[glossary]]. Do not freeze [[slice-79-oem-hatch-slot]]. Do not rewrite a location destination.

## Vault pack

Query: freeze press-wins-arena; tap versus horizontal drag; onPress joins; embedder pointer packets
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-46-gesture-arena.md`
- `.heio/planning/sprints/native-if-funded/shape.md`
- `.heio/planning/sprints/native-if-funded/slice-78-press-wins-arena.md`
- `.heio/planning/tickets/ticket-171-gesture-apis-unnamed.md`
- `.heio/archive/planning/rounds/rounds-251-name-gesture-apis.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`

Related:

- `docs/specs/ui-framework/leaf-kit/purpose.md`
- `docs/specs/ui-framework/signal-dirtying/purpose.md`
- `docs/specs/ui-framework/desktop-embedder/purpose.md`
- `docs/specs/ui-framework/render-object/purpose.md`
- `.heio/planning/locations/location-32-host-leaves.md`
- `.heio/planning/sprints/native-if-funded/slice-79-oem-hatch-slot.md`

Excluded: OEM class lists, mobile, JSX, scribble, rewriting location destinations, inventing onPressIn or PointerRouter, writing `docs/specs/` here.

Next: freeze [[slice-78-press-wins-arena]] with oracles and tasks. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and matching purpose files are empty. Gesture APIs are named.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-46-gesture-arena]] this sitting freezes.
2. **Named set**: Which first-tracer names [[rounds-251-name-gesture-apis]] and [[glossary]] already locked.
3. **Ladder**: Whether a gesture spec folder exists.
4. **Repeat**: Whether signal-not-hit-test oracles belong here.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze [[slice-78-press-wins-arena]]. Two recognizers compete. Pressable can win. Embedder owns input. Framework arena decides the winner. DOM `stopPropagation` is not the native model.
2. **Named set**: Competing pair is tap versus horizontal drag. App code is `h(pressable, { onPress })`. Export `TapGestureRecognizer` and `HorizontalDragGestureRecognizer`. Setting `onPress` creates the tap recognizer and joins it. `GestureArena` verbs are `add`, `close`, `sweep`. Recognizer verbs are `addPointer`, `acceptGesture`, `rejectGesture`, `resolve`. First to accept, or last not to reject, wins. `sweep` on pointer up gives the win to the first member still in. Embedder delivers pointer down, move, and up. Smallest reversible default: tests drive those packets through `addPointer`; no public packet type name.
3. **Ladder**: None. First task writes purpose, contract, and test only.
4. **Repeat**: Do not repeat. [[purpose-signal-dirtying]] already locks signals do not replace hit-test or the gesture arena.
5. **Wait**: `onPressIn`, `onPressOut`, `onTapDown`, `onTapCancel`, long press, double tap, scale, pan, `GestureArenaTeam`, public `PointerRouter` or `Listener`, scroll actually scrolling, RNGH composition, UIKit `require(toFail:)`, every UIKit class as a recognizer, OEM widget class lists, hit-test algorithm.

### Candidate A

One deep gestures module. App stays `h(pressable, { onPress })`. Arena owns competition and hides packet fan-out.

#### Problem

Native input needs competing recognizers. Pressable already exists as a host leaf with no join. [[location-46-gesture-arena]] wants an arena, not DOM bubbling, and not the OS view tree as the only recognizer. Named verbs exist. A public `PointerRouter` does not.

#### Usage (caller's view)

```js
import { h, pressable, GestureArena, TapGestureRecognizer, HorizontalDragGestureRecognizer } from "dragonflame-ui";

function App() {
	return h(pressable, { onPress: () => {} });
}
```

App code this tracer is `h(pressable, { onPress })`. Tests construct `GestureArena`, add a `HorizontalDragGestureRecognizer` as the named competitor, deliver pointer down, move, and up through `addPointer`, then `close` and `sweep`. Callers do not import `GestureDetector`. They do not import `PointerRouter`.

#### Shape

Public surface is `pressable` plus `onPress`, `GestureArena`, `TapGestureRecognizer`, and `HorizontalDragGestureRecognizer`. One `src/gestures/` module owns add, close, sweep, recognizer resolve, and private fan-out of embedder packets onto `addPointer`. Setting `onPress` creates the tap recognizer and `add`s it. Hit-test stays on render objects and is not implemented this slice. Complexity hidden: who wins, when `close` happens, how sweep picks the first member still in. Invariants: first to accept or last not to reject wins; signals do not join; no DOM `stopPropagation` as the native model.

#### Red flags

- **Shallow**: avoided. Callers set `onPress`. Arena policy stays behind that join.
- **Leakage**: avoided if packet routing stays private. Exporting `PointerRouter` would leak.
- **Temporal**: one module owns join, compete, and resolve, not a public down-then-route-then-arena pipeline.
- **Pass-through**: a public `joinArena(pressable)` that only forwards `onPress` would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green press wins, then red-green embedder packets.

### Candidate B

Public pointer router plus arena plus recognizers as separate stages. Apps or tests wire the pipeline.

#### Problem

Same destinations. Candidate A hides routing. Candidate B would export a router, an arena, and recognizer objects as three public steps.

#### Usage (caller's view)

```js
import { h, pressable, PointerRouter, GestureArena, TapGestureRecognizer, HorizontalDragGestureRecognizer } from "dragonflame-ui";

const router = new PointerRouter();
const arena = new GestureArena();
router.addRoute(pointer, recognizer);
arena.add(recognizer);
```

Setting `onPress` would still create tap, but callers would also own routing.

#### Shape

Three public stages: route packets, then add to the arena, then resolve. Interface grows by `PointerRouter`, which [[rounds-251-name-gesture-apis]] left unnamed. Callers coordinate methods to complete one pointer up. Win policy leaks into test and app code.

#### Red flags

- **Shallow**: callers call router, arena, and recognizer to finish one press.
- **Leakage**: pointer routing protocol becomes public. `PointerRouter` is unnamed.
- **Temporal**: route, then add, then close, then sweep as public stages.
- **Pass-through**: router methods that only forward `addPointer` add a layer without policy.

#### Next implementation step

Add public `PointerRouter`. Invents API. Contradicts the Wait list on [[rounds-251-name-gesture-apis]].

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents public `PointerRouter` and splits one pointer up into public stages.

Tradeoffs accepted:

- We accept exporting recognizer type names in exchange for tests adding the horizontal drag competitor without a `GestureDetector`.
- We accept tests driving down, move, and up through `addPointer` in exchange for no public packet type name.
- We accept not implementing hit-test this slice in exchange for join-when-`onPress`-is-set.
- We accept not repeating signal-not-arena oracles in exchange for press-wins and embedder-packet oracles.

Alternatives considered:

- Public `PointerRouter` plus arena plus recognizers: unnamed and temporally decomposed, lost.
- OS view-tree recognizers as the only winner: rewrites [[location-46-gesture-arena]] embedder-plus-framework-arena, lost.
- App-constructed recognizers with no `onPress` join: contradicts the named join rule, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-46-gesture-arena]], [[glossary]], and [[rounds-251-name-gesture-apis]].

Next implementation step: write purpose, contract, and test for the gesture arena, then red-green press wins, then red-green embedder packets.

### Tracer bullets

1. Spec ladder for the gesture arena. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green press wins the arena. blocked_by: spec. AFK. Tap versus horizontal drag. `onPress` fires when tap wins.
3. Red-green embedder packets. blocked_by: press wins. AFK. Pointer down, move, and up. Framework arena decides. Not DOM `stopPropagation`.

## Confirm

Confirmed.
