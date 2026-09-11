---
id: "ticket-171-gesture-apis-unnamed"
title: "Gesture recognizer APIs are unnamed"
kind: ticket
status: promoted
ticket_type: observation
tags: []
created_at: "2026-09-11T20:10:00Z"
updated_at: "2026-09-11T06:49:29Z"
---

# Gesture recognizer APIs are unnamed

## Signal

[[location-46-gesture-arena]] locks competing recognizers, embedder-owned input, and pressable as a leaf that can join. [[rounds-160-fund-native]] left gesture recognizer APIs unnamed. Sprint `native-if-funded` says do not freeze press until those APIs are named.

## Fit

Promoted into [[slice-78-press-wins-arena]]. Named on [[rounds-251-name-gesture-apis]] and [[glossary]]. Frozen in [[rounds-253-freeze-press-wins-arena]]. Quote the named first-tracer set. Do not invent further recognizer methods or UIKit class lists.

## Notes

First tracer: `h(pressable, { onPress })`. Types `TapGestureRecognizer` and `HorizontalDragGestureRecognizer`. Join when `onPress` is set. Arena `add`, `close`, `sweep`. Recognizer `addPointer`, `acceptGesture`, `rejectGesture`, `resolve`. Embedder pointer down, move, up. Drain claims tasks. [[slice-79-oem-hatch-slot]] stays shaping. Do not invent OEM widget class lists here.
