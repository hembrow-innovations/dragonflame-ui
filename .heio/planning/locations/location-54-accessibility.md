---
id: "location-54-accessibility"
title: "Accessibility"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Accessibility

## This is working when

Accessibility exists, with a semantics tree beside the render tree, not ARIA-only DOM as the native model.

## Nested locations

- **Phase 3 word**: this is working when accessibility exists. The source does not say which APIs.
  - bet: try shipping accessibility with mobile; pivot if a sitting names a different proof
- **Semantics tree**: this is working when a semantics tree sits beside the render tree.
  - bet: try a semantics tree; pivot if native a11y is ARIA-only DOM
- **Signals do not replace it**: this is working when signals do not replace semantics.
  - bet: try semantics as its own tree; pivot if signal writes are treated as a11y
- **Embedder plumbing**: this is working when the embedder owns accessibility plumbing.
  - bet: try embedder a11y; pivot if a11y is only first-class web props. See [[location-34-a11y-test-ids]]
- **Pipeline copy**: this is working when a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers.
  - bet: try that copy; pivot if a11y is skipped until after store packaging

## See also

- **Parent**: [[location-19-mobile-embedders]]
- **First-class props**: [[location-34-a11y-test-ids]]
- **Glossary**: [[glossary]]
- **Architecture**: [[architecture-layer-cake]]
- **Idea**: [[overview-ui-framework]]
