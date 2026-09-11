---
id: "purpose-talk-and-measure"
title: "Talk and measure purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the semantics tree dump and per-host text metrics seam."
status: active
domain: ui-framework
area: talk-and-measure
tags: [purpose]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Talk and measure purpose

## Job

A semantics tree sits beside the render tree, and text measurement is a per-host seam, not ARIA-only DOM and not CSS as iOS layout.

Named first-tracer set from [[rounds-258-name-phase3-apis]], [[ticket-68-phase3-apis-unnamed]], and [[glossary]]:

- **Framework node**: `SemanticsNode`.
- **Dump**: `toStringDeep`.
- **Props**: reuse `testID` and `accessibilityLabel`.
- **Metrics**: `measureText`. Sizes may disagree across DOM, UIKit, and the engine.
- **Fonts**: `loadFont` on the IO thread.
- **Plumbing**: the embedder owns a11y plumbing. OS class lists stay unnamed.

## In scope

Child destination sentences from [[location-54-accessibility]]:

- **Semantics tree**: this is working when a semantics tree sits beside the render tree.
- **Signals do not replace it**: this is working when signals do not replace semantics.
- **Embedder plumbing**: this is working when the embedder owns accessibility plumbing.
- **Pipeline copy**: this is working when a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers.

Child destination sentences from [[location-55-text]]:

- **Per-host metrics**: this is working when text measurement disagrees across DOM, UIKit, and a native canvas engine, and a per-host metrics seam exists.
- **Engine glyphs**: this is working when native glyphs live in the Rust engine. See [[location-37-rust-engine]]
- **Text leaf**: this is working when text is a host leaf. See [[location-32-host-leaves]]
- **IO font load**: this is working when font load runs on the IO thread.

This area's oracles prove a `SemanticsNode` dump via `toStringDeep` that reuses `testID` and `accessibilityLabel`, that signals do not replace that dump, a per-host `measureText` seam, that CSS is not iOS layout, and `loadFont` on the IO thread. They do not prove web a11y and test ID props. Those live on [[purpose-a11y-test-ids]]. They do not prove iOS host honesty. Those live on [[purpose-ios-embedder]]. They do not prove text as a host leaf. Those live on [[purpose-host-leaves]] and [[purpose-leaf-kit]]. They do not prove engine glyphs. They do not prove the gesture arena or vsync tickers. Those live on [[purpose-gesture-arena]] and the embedder specs.

## Out of scope

- `SemanticsOwner`. Flutter `SemanticsBinding`. RN `AccessibilityInfo`.
- `accessibilityHint`. `liveRegion`.
- `UIAccessibility`. `AccessibilityNodeInfo`.
- UIKit or Android view class lists.
- `Paragraph.layout`. `TextPainter`.
- A second native a11y prop set.
- Skia for text.
- Glyph atlas and font file formats.
- Repeating web a11y and test ID oracles. Those live on [[purpose-a11y-test-ids]].
- Repeating iOS host honesty oracles. Those live on [[purpose-ios-embedder]].
- Repeating six-leaf oracles. Those live on [[purpose-leaf-kit]].
- Repeating signal-dirtying oracles. Those live on [[purpose-signal-dirtying]].
- Implementing the compiler in this repo.

## Surfaces

Framework dumps `SemanticsNode` with `toStringDeep` beside the render tree. Callers reuse `testID` and `accessibilityLabel`. `measureText` is the per-host metrics seam. `loadFont` runs on the IO thread. Callers do not import a second native a11y prop set. Callers do not import `SemanticsOwner`. Callers do not import `AccessibilityInfo`. Callers do not import `Paragraph.layout`. Callers do not import `TextPainter`.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-258-name-phase3-apis]], [[ticket-68-phase3-apis-unnamed]], [[location-54-accessibility]], [[location-55-text]], [[glossary]], and [[architecture-layer-cake]].

## Open product questions

- (none)
