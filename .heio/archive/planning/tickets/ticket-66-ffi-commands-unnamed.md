---
id: "ticket-66-ffi-commands-unnamed"
title: "FFI scene command set is unnamed"
kind: ticket
status: closed
ticket_type: observation
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T09:55:42Z"
---

# FFI scene command set is unnamed

## Signal

[[location-40-ffi-scene-commands]] says the native path is `extern "C"` and unboxed numbers and structs. Counterpart named the first-tracer set in [[rounds-160-fund-native]].

## Fit

Promoted into [[slice-77-draw-a-rect]]. First-tracer set: one packed scene struct with a colored rect, one `extern "C"` submit. Engine records the draw list and rasters. Not a begin/end command stream. Not a second IR.

## Notes

Drain does not claim this ticket. Later commands stay unnamed. Do not invent them in a spec.
