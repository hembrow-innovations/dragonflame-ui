---
id: "rounds-258-name-phase3-apis"
title: "Name first native a11y and text APIs"
kind: round
sitting_kind: planning
status: published
tags: []
created_at: "2026-09-11T07:00:00Z"
updated_at: "2026-09-11T07:00:00Z"
---

# Name first native a11y and text APIs

Counterpart is the user in chat. Notebook is this round.

Pick: [[ticket-68-phase3-apis-unnamed]]. Name the first native a11y and text APIs so a later /afk-plan can freeze [[slice-83-talk-and-measure]]. Quote [[location-54-accessibility]] and [[location-55-text]]: semantics tree beside the render tree, embedder plumbing, per-host metrics seam, no CSS on iOS, font load not on the UI thread. Do not invent UIKit class lists. Sprint `mobile-after-desktop` still says do not freeze. Do not write `docs/specs/`.

## Vault pack

Query: name first native semantics dump and per-host text metrics seam
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-54-accessibility.md`
- `.heio/planning/locations/location-55-text.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-83-talk-and-measure.md`
- `.heio/planning/tickets/ticket-68-phase3-apis-unnamed.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`

Related:

- `docs/specs/ui-framework/a11y-test-ids/purpose.md`
- `docs/specs/ui-framework/a11y-test-ids/contract.md`
- `.heio/planning/locations/location-34-a11y-test-ids.md`
- `.heio/archive/planning/sprints/web-tracers/slice-73-testid-pressable.md`

Excluded: UIKit class lists, AccessibilityNodeInfo as product API, Paragraph.layout, TextPainter, mobile freeze, JSX, scribble, rewriting location destinations.

Next: keep ticket open until [[slice-80-ios-counter]] is met. Then /afk-plan may freeze [[slice-83-talk-and-measure]] when the sprint allows freeze.

No packer script exists. Assembled by hand. Open product questions on the overview are empty.

## Round 1

### Questions

1. **Semantics node**: What framework type is one node in the semantics tree.
2. **Dump**: What dumps that tree for the first oracle.
3. **Props**: Whether native invents a second a11y prop set.
4. **Metrics**: What names the per-host text metrics seam.
5. **Fonts**: What names font load on the IO thread.
6. **Wait**: What stays unnamed.

### Answers

1. **Semantics node**: `SemanticsNode`. Framework node in the semantics tree beside the render tree. Signals do not replace it.
2. **Dump**: `toStringDeep`. Slice 83 O1 is a semantics tree dump.
3. **Props**: Reuse `testID` and `accessibilityLabel`. Do not invent a second native prop set. Embedder plumbing stays unnamed.
4. **Metrics**: `measureText`. Sizes may disagree across DOM, UIKit, and the engine. CSS is not iOS layout.
5. **Fonts**: `loadFont` on the IO thread. Not on the UI thread.
6. **Wait**: `SemanticsOwner`, Flutter `SemanticsBinding`, RN `AccessibilityInfo`, `accessibilityHint`, `liveRegion`, `UIAccessibility`, `AccessibilityNodeInfo`, UIKit or Android view class lists, `Paragraph.layout`, `TextPainter`.

Counterpart said use remaining recommended names.

## Confirm

Confirmed.

## Objectives

Name the first native a11y and text APIs. Leave freeze of [[slice-83-talk-and-measure]] to a later /afk-plan when the sprint allows it. Do not implement. Do not write `docs/specs/`.

## Decisions so far

- Framework node is `SemanticsNode`.
- Dump is `toStringDeep`.
- Reuse `testID` and `accessibilityLabel`.
- Per-host metrics seam is `measureText`.
- Font load is `loadFont` on the IO thread.

## Not yet specified

- Embedder a11y class lists
- `accessibilityHint`, `liveRegion`
- `SemanticsOwner`, `AccessibilityInfo`
- Glyph atlas and font file formats

## Out of scope

- Freezing [[slice-83-talk-and-measure]] in this sitting
- Writing `docs/specs/`
- ARIA-only DOM as the native a11y model
- CSS as iOS layout
- Skia for text
- Inventing UIKit class lists
