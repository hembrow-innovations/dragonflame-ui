---
id: "location-34-a11y-test-ids"
title: "First-class a11y and test IDs"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# First-class a11y and test IDs

## This is working when

Accessibility and test IDs are first-class props.

## Nested locations

- **First-class props**: this is working when accessibility and test IDs are first-class props.
  - bet: try first-class props; pivot if they are bolted on after the host leaves
- **Web props**: this is working when those props exist on the web package leaves.
  - bet: try props on leaves; pivot if web a11y is an afterthought
- **Native semantics later**: this is working when native accessibility, if funded, is a semantics tree beside the render tree, not ARIA-only DOM. See [[location-54-accessibility]]
  - bet: try a semantics tree on native; pivot if native a11y is ARIA-only DOM

## See also

- **Parent**: [[location-17-web-component-library]]
- **Tests**: [[location-29-tests]]
- **Native accessibility**: [[location-54-accessibility]]
- **Idea**: [[overview-ui-framework]]
- **Glossary**: [[glossary]]
