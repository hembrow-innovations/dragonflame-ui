---
id: "rounds-323-freeze-web-may-use-css"
title: "Freeze Web may use CSS"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan]
created_at: "2026-09-12T05:03:08Z"
updated_at: "2026-09-12T05:03:08Z"
---

# Freeze Web may use CSS

Counterpart is the product peer. Notebook is this round.

Pick: GRAIN Web may use CSS under [[location-33-style-as-data]]. Sprint `framework-in-draconic` may freeze. Do not rewrite [[location-33-style-as-data]] or [[location-31-web-layout]]. Do not restage locked [[contract-style-as-data]] honesty oracles or [[contract-leaf-kit]] CSS-on-web oracles. Do not freeze StyleSheet shape, Native feed, Taffy, or one CSS engine for both hosts.

## Vault pack

Query: Web may use CSS because the browser already has it
Area: style-as-data

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-33-style-as-data.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `docs/specs/ui-framework/style-as-data/purpose.md`
- `docs/specs/ui-framework/style-as-data/contract.md`
- `docs/specs/ui-framework/web-layout/purpose.md`
- `docs/specs/ui-framework/web-layout/contract.md`
- `docs/specs/ui-framework/leaf-kit/purpose.md`
- `docs/specs/ui-framework/leaf-kit/contract.md`
- `docs/overview/overview-ui-framework.md`

Related:

- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-31-web-layout.md`
- `.heio/planning/locations/location-42-native-layout.md`
- `docs/architecture/architecture-layer-cake.md`
- `.heio/planning/sprints/framework-in-draconic/slice-315-native-feed.md`
- `docs/specs/ui-framework/leaf-kit/test.md`

Excluded: scribble, archive, ADRs none, no blocking slice, no packer, CSS as native layout, one CSS engine for both hosts, native feed implementation, compiler work in this repo

Next: freeze one Web may use CSS slice. Do not write `docs/specs/`.

No packer script exists. Assembled by hand. Open product questions are none.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-33-style-as-data]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether the style-as-data spec folder already covers this grain.
4. **Repeat**: Whether honesty or CSS-on-web leaf oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze Web may use CSS. Done: web may use CSS because the browser already has it. Try CSS on web and data on native. Pivot if one CSS engine is required for both hosts. Callers still use `StyleSheet.create`. The web leaf adapter privately applies those objects. This package does not expose a CSS mapper.
2. **Named set**: Locked [[intent]] not CSS as the native layout runtime. [[overview-ui-framework]] Web may use CSS because the browser already has it. Web layout is CSS. Native layout is Taffy. [[purpose-leaf-kit]] already locks CSS on web and StyleSheet shape, including this grain sentence. Locked [[contract-style-as-data]] honesty: `style-as-data.style:forbid-css-language`, `style-as-data.style:forbid-css-engine`. Locked [[contract-web-layout]] not-pixel-identical and copy-DOM-idea-not-Impeller. Smallest reversible defaults: new area `web-may-use-css`, no public `css` tagged template, no public `parseCss`, no CSS source strings as style, no public mapper, no public LayoutEngine, callers still use `StyleSheet.create`, CHECK lives in `tests/web-may-use-css/`. All tasks `mode: afk`.
3. **Ladder**: Exists at `docs/specs/ui-framework/style-as-data/` but [[purpose-style-as-data]] owns honesty forbids, not this prove. [[purpose-leaf-kit]] already in-scopes this grain and locks CSS-on-web leaf oracles. [[purpose-web-layout]] forbids repeating those oracles. Open product questions none. Mismatched ladder. First drain task writes purpose, contract, and test under `docs/specs/ui-framework/web-may-use-css/` from the Web may use CSS destination plus `docs/`. This sitting does not write `docs/specs/`.
4. **Repeat**: Do not restage `style-as-data.style:forbid-css-language` or `style-as-data.style:forbid-css-engine`. Do not restage StyleSheet-shaped or CSS-on-web oracles on [[purpose-leaf-kit]]. Do not point CHECK at `tests/leaf-kit/leaf-view-text-style.test.mjs`. Do not restage [[contract-web-layout]]. Do not restage [[slice-315-native-feed]].
5. **Wait**: StyleSheet shape. Native feed. Taffy in the Rust engine. Constraints. Implementing native hosts. CSS as the native layout runtime. One CSS engine for both hosts. Public LayoutEngine. Public `css`. Public `parseCss`. Public CSS mapper.

### Candidate A

Location-named surface. Existing StyleSheet. Web maps to CSS.

#### Problem

[[location-33-style-as-data]] already says style is StyleSheet-shaped objects. This nested grain is the web half of that split: this is working when web may use CSS because the browser already has it. The bet is CSS on web and data on native, and the pivot is one CSS engine for both hosts. [[slice-315-native-feed]] already froze the native half. Web must consume the same objects without becoming a CSS language, a CSS engine product, or that shared engine. [[purpose-leaf-kit]] already names this grain and locks `leaf-kit.layout:css-on-web` plus `leaf-kit.style:stylesheet-shaped`. The cut that is easy to get wrong is proving the grain by exporting a CSS surface, instead of hiding that the browser already lays out.

#### Usage

Callers keep `h`, `render`, the closed leaf kit, and `StyleSheet.create`. They do not import `css`. They do not call `parseCss`. They do not pass CSS source strings as style. Same objects on both hosts. Web happens to land on CSS because the browser already has it.

#### Shape

Public surface stays `StyleSheet.create`. Web CSS is how those objects are consumed on the DOM host, not a new type. Framework owns the objects. The web leaf adapter privately maps them onto CSS because the browser already has it. First drain asserts a fence promise under a new area `web-may-use-css`. Do not patch [[contract-style-as-data]]. Do not restage [[contract-leaf-kit]].

#### Red flags

A public `toCss`, `applyCss`, or `css` tagged template is a shallow module. Exporting CSSOM types or stylesheet strings is leakage. Public `parseCss` then map then apply is temporal decomposition. A slice CHECK that only re-runs `tests/leaf-kit/leaf-view-text-style.test.mjs` is a pass-through.

#### Next implementation step

On first drain, write purpose, contract, and test under area `web-may-use-css` for this grain only, then red-green `tests/web-may-use-css/css-because-browser-has-it.test.mjs`.

### Candidate B

Ownership cut. Same destination. Hide the CSS apply.

#### Problem

Locked CHECKs already prove CSS absence and CSS-on-web leaf rendering. The destination still says web may use CSS because the browser already has it. This repo must not export a CSS path, must not restage [[contract-leaf-kit]] or [[contract-style-as-data]], and must not invent one CSS engine for both hosts. The cut that is easy to get wrong is proving the grain by exporting a CSS mapper, instead of hiding apply in the leaf adapter.

#### Usage

App code keeps `StyleSheet.create` and passes StyleSheet-shaped objects as `style`. Tests import the shipped library the same way. They do not import a host apply helper. README claim: on web those objects apply as CSS because the browser already has it. This package does not expose how. Native feed stays [[slice-315-native-feed]].

#### Shape

Ownership cut, not a CSS surface. Public style API stays `StyleSheet.create` and the `style` prop. Framework owns StyleSheet-shaped objects. The web leaf adapter privately owns apply: consume those objects, write them through CSSOM or inline styles, reject CSS source strings. Do not export `css`, `parseCss`, `StyleApply`, `LayoutEngine`, or Taffy. Depth: one create call hides host-split consumption, the same way [[slice-315-native-feed]] hid Taffy.

#### Red flags

A public `css`, `parseCss`, `toCss`, `StyleApply`, or `applyStyle` is a shallow module and leakage. Public create, then map to CSS text, then parse, then set `style` is temporal decomposition. Pointing CHECK at the leaf-kit view and text oracle restages [[contract-leaf-kit]] and [[purpose-web-layout]]. Restaging `style-as-data.style:forbid-css-language` is the wrong owner.

#### Next implementation step

Add one CHECK that on web those objects apply as CSS because the browser already has it, owned as private leaf-adapter apply, without restaging leaf-kit or the style-as-data honesty tests.

## Synthesis

Base is Candidate B. Graft from A: Done quotes the [[location-33-style-as-data]] Web may use CSS destination. First drain writes `web-may-use-css.style:css-because-browser-has-it` under `docs/specs/ui-framework/web-may-use-css/`. CHECK lives in `tests/web-may-use-css/css-because-browser-has-it.test.mjs` and fails if this checkout grows a public `css` tagged template, a public `parseCss`, CSS source strings as style, a public mapper, a public LayoutEngine, or one CSS engine for both hosts. No public CSS helper.

Reject A as the slice shape: treating web CSS as a consumption API this package exposes, or pointing CHECK at `leaf-view-text-style`, is leakage or a pass-through.

Tradeoffs accepted:

- We accept a new `web-may-use-css` ladder in exchange for not stretching [[purpose-style-as-data]] past its fence and not restaging [[purpose-leaf-kit]].
- We accept no public mapper in exchange for hiding how the web adapter applies the objects.
- We accept not implementing a CSS engine this sitting in exchange for not rewriting [[location-33-style-as-data]].

Alternatives considered:

- Public `css`, `parseCss`, `StyleApply`, or LayoutEngine: shallow leakage, lost.
- Slice CHECK is `tests/leaf-kit/leaf-view-text-style.test.mjs`: pass-through, lost.
- Restage [[contract-style-as-data]] CSS forbids: wrong owner, lost.
- Freeze StyleSheet shape or Native feed in this sitting: different grain, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-33-style-as-data]], [[intent]], and [[overview-ui-framework]].

Next implementation step: assert `web-may-use-css.style:css-because-browser-has-it` on a new ladder, then red-green a prove that web may use CSS because the browser already has it.

### Tracer bullets

1. Assert `web-may-use-css.style:css-because-browser-has-it` under `docs/specs/ui-framework/web-may-use-css/`. blocked_by: none. AFK. Write purpose, contract, and test from the Web may use CSS destination plus `docs/`. Do not write a style-as-data promise. Do not restage locked honesty or leaf-kit CSS-on-web promises. Named test: web may use CSS because the browser already has it. CHECK lives in `tests/web-may-use-css/`. No public `css`. No public `parseCss`. No public mapper. No public LayoutEngine.
2. Red-green that CHECK. blocked_by: the spec task. AFK. Fail if this checkout grows a public `css` tagged template, a public `parseCss`, CSS source strings as style, a public mapper, a public LayoutEngine, or one CSS engine for both hosts. Do not point CHECK at `tests/leaf-kit/leaf-view-text-style.test.mjs`. Do not restage forbid-css-language, forbid-css-engine, StyleSheet shape, or CSS-on-web leaf oracles. Do not freeze StyleSheet shape or Native feed.

## Confirm

Confirmed.
