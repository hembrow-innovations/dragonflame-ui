---
id: "slice-72-leaf-kit-on-dom"
title: "Leaf kit on DOM"
kind: slice
status: active
sprint: "web-tracers"
blocked_by:
  - "slice-70-counter-on-dom"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-10T12:00:00Z"
---

# Leaf kit on DOM

## Why

Closed host kit on CSS and style-as-data. Host config lives only at the leaf adapter.

## Done

View, text, image, scroll, text input, and pressable render on DOM. Web layout is CSS. Style is StyleSheet-shaped objects. Portable code does not import `document`. Pixel-identical native is not required.

## Blocked by

[[slice-70-counter-on-dom]]: hyperscript and DOM patch exist first.

## Non-goals

Taffy on web, HTML as the leaf set, native glyphs.

## Oracle checklist

- [x] O1: view and text with style data on CSS
  CHECK: node --test tests/leaf-view-text-style.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail
- [ ] O2: image and scroll
  CHECK: node --test tests/leaf-image-scroll.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O3: text input and pressable
  CHECK: node --test tests/leaf-input-pressable.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

- [[task-94-spec-leaf-kit]]
- [[task-95-red-green-view-text-style]]
- [[task-96-red-green-image-scroll]]
- [[task-97-red-green-input-pressable]]

## See also

- [[location-31-web-layout]]
- [[location-32-host-leaves]]
- [[location-33-style-as-data]]
- [[location-35-host-config]]
- [[location-55-text]]
