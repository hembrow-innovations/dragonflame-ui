---
id: "rounds-388-freeze-input"
title: "Freeze Input"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T09:00:39Z"
updated_at: "2026-09-12T09:00:39Z"
---

# Freeze Input

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Input under [[location-39-desktop-embedder]]. Sprint `mobile-after-desktop` may freeze. [[slice-76-desktop-vsync-window]] is met. Do not restage [[slice-80-ios-counter]], [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], [[slice-84-platform-view-hatch]], [[slice-300-desktop-first]], [[slice-320-funding]], [[slice-328-phase-3-gate-unstated]], [[slice-356-not-toolchain-d04]], [[slice-360-android-not-toolchain-d04]], [[slice-364-pipeline-copy]], [[slice-373-engine-glyphs]], [[slice-381-io-font-load]], or [[slice-385-single-ui-thread]]. Do not rewrite a location destination.

## Vault pack

Query: this is working when the embedder owns input, IME, clipboard, and accessibility plumbing.
Area: desktop-embedder

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-39-desktop-embedder.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `.heio/archive/planning/sprints/native-if-funded/slice-76-desktop-vsync-window.md`
- `docs/specs/ui-framework/desktop-embedder/purpose.md`
- `docs/specs/ui-framework/desktop-embedder/contract.md`
- `docs/overview/glossary.md`
- `docs/architecture/architecture-layer-cake.md`

Related:

- `docs/overview/overview-ui-framework.md`
- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-46-gesture-arena.md`
- `docs/specs/ui-framework/gesture-arena/contract.md`
- `.heio/planning/locations/location-54-accessibility.md`
- `docs/specs/ui-framework/talk-and-measure/contract.md`

Excluded: scribble, ADRs none, no packer in package.json, Window / Vsync / No WebView / No JS engine / Phase 2 gate as this grain, restaging slice-76 vsync window no-WebView no-JS-engine oracles, restaging gesture-arena pointer packets, restaging talk-and-measure SemanticsNode dump, mobile IME, WebView shells

Next: freeze grain Input on location-39-desktop-embedder. Do not write docs/specs in this sitting. slice-76 is met; desktop-embedder oracles still leave input, IME, clipboard, and accessibility plumbing unimplemented. Open product questions are none.

No packer script exists. Assembled by hand. Open product questions are none. [[purpose-desktop-embedder]] already lists Input in scope and currently parks those four jobs as out of scope for the vsync-window oracles. Area oracles do not prove input plumbing.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-39-desktop-embedder]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether vsync-window, arena, or talk-and-measure oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Input. Done: the embedder owns input, IME, clipboard, and accessibility plumbing. Bet: try embedder input; pivot if a WebView shell owns input. Window, Vsync, No WebView, No JS engine, and Phase 2 gate stay out.
2. **Named set**: [[location-39-desktop-embedder]] Input sentence is locked. Public surface stays `open_vsync_window`. No public Input. No Clipboard. No IME. No AccessibilityBridge. No PointerPacket. First desktop OS stays macOS. Window crate stays winit. Smallest reversible defaults: the four jobs live as private adapters in `crates/embedder`; winit `WindowEvent` stays private; Framework still owns `GestureArena` winner and `SemanticsNode`; assert `desktop-embedder.input:embedder-owns` on the existing desktop-embedder ladder; CHECK lives in `tests/desktop-embedder/input-plumbing.test.mjs`. All tasks `mode: afk`. Do not wait on [[slice-76-desktop-vsync-window]] beyond desktop honesty. Do not wait on [[slice-83-talk-and-measure]].
3. **Ladder**: [[purpose-desktop-embedder]] and [[contract-desktop-embedder]] exist. Window, vsync, GPU, no-WebView, and no-JS-engine are locked. No matching promise for input, IME, clipboard, or accessibility plumbing. This sitting does not write specs. First drain asserts `desktop-embedder.input:embedder-owns` from the location destination plus [[glossary]] and [[architecture-layer-cake]], and moves those four jobs out of purpose Out of scope.
4. **Repeat**: Do not restage vsync-window or no-WebView no-JS-engine. Those live on [[purpose-desktop-embedder]] and [[slice-76-desktop-vsync-window]]. Do not restage gesture-arena pointer packets. Those live on [[location-46-gesture-arena]]. Do not restage SemanticsNode dump. That lives on [[slice-83-talk-and-measure]].
5. **Wait**: Public Input. Clipboard. IME. AccessibilityBridge. PointerPacket. UIKit class lists. Mobile IME. Window, Vsync, No WebView, No JS engine, or Phase 2 gate as this grain. Restaging [[slice-76-desktop-vsync-window]] or [[slice-83-talk-and-measure]]. Rewriting the location destination. Writing `docs/specs/` here. A `docs/specs/ui-framework/input/` area.

### Candidate A

Already-named ownership. The embedder Host owns input, IME, clipboard, and accessibility plumbing. No public app-facing Input type.

#### Problem

[[location-39-desktop-embedder]] Input is leftover after [[slice-76-desktop-vsync-window]] proved window, vsync, and GPU split. The grain is working when the embedder owns input, IME, clipboard, and accessibility plumbing. The bet tries embedder input and pivots if a WebView shell owns input. [[purpose-desktop-embedder]] already lists that sentence in scope and currently parks those four jobs as out of scope for the vsync-window oracles. [[contract-desktop-embedder]] has no matching promises. A public Input, Clipboard, IME, or a11y-bridge type would leak OS plumbing into app code. [[location-46-gesture-arena]] already locked arena compete. [[location-54-accessibility]] already locked the SemanticsNode dump on [[slice-83-talk-and-measure]]. This grain is host ownership, not those Framework tracers.

#### Usage

App code still submits one packed scene and still writes `h(pressable, { onPress })`. Callers do not import Input, Clipboard, IME, or an accessibility bridge. The desktop crate surface stays `open_vsync_window` in `crates/embedder`. Tests under `tests/desktop-embedder/` prove the Host owns the four OS jobs. They do not construct `GestureArena`, do not dump `SemanticsNode`, and do not restage the vsync-window binary oracles.

```js
import { submit } from "dragonflame-ui"

submit(scene)
```

A WebView shell does not own keyboard, pasteboard, or a11y. Framework still decides the gesture winner. Engine still owns the GPU surface.

#### Shape

No new public names. Policy lives behind the existing embedder Host.

- **embedder**: one Host in `crates/embedder` owns OS input, desktop IME, clipboard, and accessibility plumbing. winit `WindowEvent` stays private. First desktop OS stays macOS.
- **framework**: `GestureArena` still decides the winner. `SemanticsNode` still is the tree. Neither is restaged here.
- **engine**: GPU only. Not input.
- **Runtime**: GC and jobs. Not input.

Invariants: embedder owns those four jobs. Engine, Runtime, and embedder stay uncollapsed. Callers never see Input, PointerPacket, Clipboard, IME, AccessibilityBridge, UIKit class lists, Thread, `occupyHatch`, or `UiKitView`. Leftover proof owner is [[purpose-desktop-embedder]]. No new spec area. Mobile IME is not this grain. WebView shells are the named pivot, not the plan.

#### Red flags

- **Shallow**: restaging Window, Vsync, No WebView, No JS engine, or Phase 2 gate as this grain. Four public handle methods for the four jobs.
- **Leakage**: exporting Input, PointerPacket, winit `WindowEvent`, Clipboard, IME, AccessibilityBridge, NSAccessibility, or UIKit class lists.
- **Temporal**: public Capture then IME then Clipboard then A11y stages.
- **Pass-through**: a public Input that only forwards `WindowEvent` onto `GestureArena.addPointer`.
- **Skip**: pointing CHECK at `tests/desktop-embedder/vsync-window.test.mjs`, `tests/gesture-arena/embedder-packets.test.mjs`, or `tests/talk-and-measure/semantics-dump.test.mjs`.

#### Next implementation step

Assert from the location destination plus `docs/` that the embedder owns input, IME, clipboard, and accessibility plumbing, then red-green one ownership oracle under `tests/desktop-embedder/`.

### Candidate B

Hide more behind the existing winit host. Prove embedder ownership with private adapters. No public Input type.

#### Problem

Same leftover grain. [[slice-76-desktop-vsync-window]] already proved window, vsync, and GPU. A already names those four as the public cut. The non-obvious cut is that `crates/embedder` already exports only `open_vsync_window`. Growing four host methods, a combined Input object, or leaked winit types would make callers learn OS events. Stealing arena winner or SemanticsNode would collapse embedder into Framework, forbidden by [[glossary]], [[location-46-gesture-arena]] Embedder input, and [[location-54-accessibility]] Embedder plumbing.

#### Usage

App and tests still open the existing macOS winit window. They never import Input, IME, clipboard, or a11y types.

```rust
embedder::open_vsync_window()
```

Inside `Host` in `crates/embedder`, pointer, key, IME, clipboard, and a11y OS events stay private adapters. Framework still owns the arena winner and SemanticsNode dump. Callers do not call four plumbing methods.

#### Shape

Public surface stays `open_vsync_window`. Window crate stays winit. First OS stays macOS. Engine still owns GPU. Engine, Runtime, and Embedder stay uncollapsed.

- **embedder**: owns host contact for the four as private adapters beside `window` and `vsync`. Never `pub use` winit or OS types. Never export Input.
- **framework**: GestureArena still decides the winner. SemanticsNode still dumps on the framework side. [[slice-83-talk-and-measure]] is not restaged.
- **engine**: GPU only. Not input.

Proof is crate graph and public surface: `lib.rs` still only exports the window entry. The four live as private modules, never four methods. Leftover promise owner is [[purpose-desktop-embedder]]. No new spec area. No second crate. Depth: one existing function hides OS adaptation for all four. Does not restage [[slice-76-desktop-vsync-window]] or gesture-arena pointer packets. WebView shells are the pivot, not the plan.

#### Red flags

- **Shallow**: four public methods callers must coordinate, or a public Input object.
- **Leakage**: `pub use` of winit events, OS pasteboard, AX types, PointerPacket, or SemanticsNode.
- **Temporal**: public Receive then Adapt then Forward stages.
- **Pass-through**: an Input type that only forwards `WindowEvent`.
- **Skip**: pointing CHECK at `tests/desktop-embedder/vsync-window.test.mjs`, arena packets, or talk-and-measure dump.
- **Collapse**: embedder deciding arena winner or owning SemanticsNode.

#### Next implementation step

First drain asserts the leftover Input ownership on the existing desktop-embedder ladder from the location destination plus `docs/`, then red-green a CHECK that `open_vsync_window` remains the only public host surface and that input, IME, clipboard, and a11y stay private adapters with no public Input type and no stolen arena or SemanticsNode ownership.

## Synthesis

Base is Candidate A. Graft from B: public surface stays `open_vsync_window`; the four live as private adapters in `crates/embedder`; never `pub use` winit or OS types; never steal arena winner or SemanticsNode; promise id `desktop-embedder.input:embedder-owns`; test path `tests/desktop-embedder/input-plumbing.test.mjs`.

Reject B as the slice shape: proving only that `open_vsync_window` remains the only export without the destination sentence as Done understates that the embedder owns input, IME, clipboard, and accessibility plumbing. The crate surface is evidence, not the cut. Do not wait on [[slice-76-desktop-vsync-window]] beyond desktop honesty. Do not wait on [[slice-83-talk-and-measure]].

Tradeoffs accepted:

- We accept the existing public `open_vsync_window` in exchange for not adding a public Input, Clipboard, IME, or AccessibilityBridge.
- We accept one ownership oracle in exchange for not repeating vsync-window, arena packet, or SemanticsNode dump tests.
- We accept desktop-embedder owning the leftover proof in exchange for not minting an input spec folder.
- We accept asserting a new `desktop-embedder.input:embedder-owns` promise in exchange for not overloading vsync-window oracles.

Alternatives considered:

- Four public handle methods or a public Input object: leakage and shallow, lost.
- Waiting on [[slice-83-talk-and-measure]]: that slice is SemanticsNode dump, not this host cut, lost.
- A new spec folder beside desktop-embedder: second owner for a sentence already in [[purpose-desktop-embedder]], lost.
- Restaging vsync-window or no-WebView no-JS-engine as this grain: mixes cuts, lost.
- Letting a WebView shell own input: the named pivot, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-39-desktop-embedder]], [[purpose-desktop-embedder]], [[glossary]], and [[architecture-layer-cake]]. Smallest reversible default: one CHECK under `tests/desktop-embedder/` that the embedder owns input, IME, clipboard, and accessibility plumbing while `open_vsync_window` stays the only public host surface.

Next implementation step: assert `desktop-embedder.input:embedder-owns` on the desktop-embedder ladder, then red-green the ownership oracle.

### Tracer bullets

1. Assert embedder-owns input promise on desktop-embedder. blocked_by: none besides desktop honesty. AFK. Point [[contract-desktop-embedder]] `desktop-embedder.input:embedder-owns` at a test. Purpose and contract already exist. Move the four jobs out of purpose Out of scope. No product code. Do not mint an input spec folder. Do not rewrite vsync-window, no-WebView, or no-JS-engine promises.
2. Red-green embedder input plumbing. blocked_by: assert promise. AFK. `tests/desktop-embedder/input-plumbing.test.mjs`. Embedder owns input, IME, clipboard, and accessibility plumbing. Public surface stays `open_vsync_window`. Private adapters. No stolen arena or SemanticsNode. Do not restage vsync-window oracles. Do not wait on [[slice-83-talk-and-measure]].

## Confirm

Confirmed.
