---
id: "rounds-318-freeze-native-feed"
title: "Freeze Native feed"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T15:00:00Z"
updated_at: "2026-09-12T15:00:00Z"
---

# Freeze Native feed

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Native feed under [[location-33-style-as-data]]. Sprint `framework-in-draconic` may freeze. Do not rewrite [[location-33-style-as-data]] or [[location-42-native-layout]]. Do not restage locked [[contract-style-as-data]] honesty oracles or `ffi-scene-commands.layout:taffy`. Do not freeze Taffy, Constraints, Web may use CSS, or StyleSheet shape.

## Vault pack

Query: freeze a slice so on native StyleSheet-shaped objects feed layout and paint
Area: style-as-data

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-33-style-as-data.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `docs/specs/ui-framework/style-as-data/purpose.md`
- `docs/specs/ui-framework/style-as-data/contract.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/locations/location-42-native-layout.md`
- `.heio/planning/locations/location-43-native-canvas-host.md`
- `.heio/planning/sprints/framework-in-draconic/slice-287-aot-host-descriptors.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/specs/ui-framework/ffi-scene-commands/purpose.md`
- `docs/specs/ui-framework/ffi-scene-commands/contract.md`
- `docs/specs/ui-framework/style-as-data/test.md`

Excluded: CSS language in the framework, CSS engine product, CSS as native layout, web CSS layout, repeating StyleSheet-shape or Taffy-rect oracles, inventing a Taffy test list at the tests location, rewriting location destinations, mobile, compiler

Next: freeze one Native feed slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions are none.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-33-style-as-data]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether the style-as-data spec folder already covers this grain.
4. **Repeat**: Whether honesty or Taffy-rect oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Native feed. Done: on native those objects feed layout and paint. Try data into Taffy and paint. Pivot if they become a CSS engine on native. Framework owns StyleSheet-shaped objects. Engine privately owns Taffy and paint. No public feed mapper.
2. **Named set**: Locked [[intent]] not CSS as the native layout runtime. [[overview-ui-framework]] StyleSheet-shaped objects; on native they feed layout and paint; they must not become a CSS engine. Native layout is Taffy in the Rust engine. Web layout is CSS. [[purpose-leaf-kit]] already locks StyleSheet shape. Locked [[contract-style-as-data]] honesty: `style-as-data.style:forbid-css-language`, `style-as-data.style:forbid-css-engine`. Locked `ffi-scene-commands.layout:taffy`. [[slice-307-layout-tests-later]] already fenced a Taffy list at the tests location. Smallest reversible defaults: new area `native-feed`, no public feed mapper, no public LayoutEngine, no Taffy types, callers still use `StyleSheet.create`, CHECK lives in `tests/native-feed/`. All tasks `mode: afk`.
3. **Ladder**: Exists at `docs/specs/ui-framework/style-as-data/` but [[purpose-style-as-data]] puts native objects feeding Taffy and paint out of that folder. Open product questions none. Mismatched ladder. First drain task writes purpose, contract, and test under `docs/specs/ui-framework/native-feed/` from the Native feed destination plus `docs/`. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `style-as-data.style:forbid-css-language` or `style-as-data.style:forbid-css-engine`. Do not restage StyleSheet-shaped oracles on [[purpose-leaf-kit]]. Do not restage `ffi-scene-commands.layout:taffy` or point CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`. Do not restage [[slice-307-layout-tests-later]].
5. **Wait**: StyleSheet shape. Web may use CSS. Taffy in the Rust engine. Constraints. Implementing native hosts. CSS as the native layout runtime. One CSS engine for both hosts. Public LayoutEngine. Public feed mapper.

### Candidate A

Location-named surface. Existing StyleSheet. Objects feed layout and paint.

#### Problem

This grain is already named on [[location-33-style-as-data]]: on native those objects feed layout and paint. The bet is try data into Taffy and paint; pivot if they become a CSS engine on native. Callers already use `StyleSheet.create`. [[purpose-style-as-data]] fences this feed as [[location-42-native-layout]]. Locked honesty proves not a CSS language and not a CSS engine. [[purpose-leaf-kit]] already locks StyleSheet shape. [[contract-ffi-scene-commands]] already locks Taffy-rect. The non-obvious cut is the data path without freezing the engine or restaging CSS-engine absence.

#### Usage

The consumer keeps `h`, `render`, the closed leaf kit, and `StyleSheet.create`. On native those objects feed layout and paint. App code does not import Taffy, LayoutEngine, or `css`. It does not call `parseCss`, `feedToTaffy`, or `toPaint`.

#### Shape

Public surface stays `StyleSheet.create`. Native feed is how those objects are consumed, not a new type. Depth comes from hiding mapping into layout and paint. First drain asserts a promise under area `native-feed`. Do not patch [[purpose-style-as-data]] contract ids.

#### Red flags

A public `feedToTaffy`, `toPaint`, NativeStyle, or LayoutEngine is a shallow module. Pointing CHECK at `taffy-rect` restages [[contract-ffi-scene-commands]]. Public validate, then toLayout, then toPaint is temporal decomposition. A CHECK that only re-runs `no-css-engine` is a pass-through.

#### Next implementation step

On first drain, write purpose, contract, and test under area `native-feed` for this grain only, then red-green `tests/native-feed/objects-feed-layout-paint.test.mjs`.

### Candidate B

Ownership cut. Same destination. Hide the mapping.

#### Problem

Locked CHECKs only prove CSS absence and StyleSheet shape. The destination still says on native those objects feed layout and paint. This repo must not own Taffy, must not invent a public mapper, and must not restage [[contract-style-as-data]] or `taffy-rect`. The cut that is easy to get wrong is proving the grain by exporting a feed path, instead of hiding it.

#### Usage

App code keeps `StyleSheet.create` and passes StyleSheet-shaped objects as `style`. Tests import the shipped library the same way. They do not import a feed helper. README claim: on native those objects are the input layout and paint consume. This package does not expose how.

#### Shape

Ownership cut, not a mapper surface. Framework owns StyleSheet-shaped objects. Engine owns Taffy and paint. This grain's knowledge is only the native input: those objects feed layout and paint. First drain writes a new `native-feed` ladder because [[purpose-style-as-data]] refuses this prove. Depth: one create call hides the host-split consumption.

#### Red flags

A public `feedNative` or Style-to-Taffy helper is a pass-through and leakage. Splitting parse, map, feed, layout as public stages is temporal decomposition. Restaging CSS forbids, StyleSheet shape, or taffy-rect is the wrong owner. A public LayoutEngine is forbidden and shallow.

#### Next implementation step

Add one [[test-native-feed]] CHECK that on native those objects feed layout and paint, and point a new locked promise at it, without new public types.

## Synthesis

Base is Candidate B. Graft from A: Done quotes the [[location-33-style-as-data]] Native feed destination. First drain writes `native-feed.style:objects-feed-layout-paint` under `docs/specs/ui-framework/native-feed/`. CHECK lives in `tests/native-feed/objects-feed-layout-paint.test.mjs` and fails if this checkout grows a public feed mapper, LayoutEngine, or Taffy types. No public feed helper.

Reject A as the slice shape: treating feed as a consumption API this package exposes, or pointing CHECK at `taffy-rect`, is leakage or a pass-through.

Tradeoffs accepted:

- We accept a new `native-feed` ladder in exchange for not stretching [[purpose-style-as-data]] past its fence.
- We accept no public mapper in exchange for hiding how the engine will consume the objects.
- We accept not implementing Taffy this sitting in exchange for not rewriting [[location-42-native-layout]].

Alternatives considered:

- Public feed helper or LayoutEngine: shallow leakage, lost.
- Slice CHECK is `tests/ffi-scene-commands/taffy-rect.test.mjs`: pass-through, lost.
- Restage [[contract-style-as-data]] CSS forbids: wrong owner, lost.
- Freeze Taffy or Constraints in this sitting: different grain, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-33-style-as-data]], [[intent]], and [[overview-ui-framework]].

Next implementation step: assert `native-feed.style:objects-feed-layout-paint` on a new ladder, then red-green a prove that on native those objects feed layout and paint.

### Tracer bullets

1. Assert `native-feed.style:objects-feed-layout-paint` under `docs/specs/ui-framework/native-feed/`. blocked_by: none. AFK. Write purpose, contract, and test from the Native feed destination plus `docs/`. Do not write a style-as-data promise. Do not restage locked honesty promises. Named test: on native those objects feed layout and paint. CHECK lives in `tests/native-feed/`. No public feed mapper. No public LayoutEngine. No Taffy types.
2. Red-green that CHECK. blocked_by: the spec task. AFK. Fail if this checkout grows a public feed mapper, LayoutEngine, or Taffy types. Do not point CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`. Do not restage forbid-css-language, forbid-css-engine, StyleSheet shape, or taffy-rect. Do not freeze Taffy or Constraints.

## Confirm

Confirmed.
