---
id: "location-41-renderer-portability"
title: "Renderer portability API"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Renderer portability API

## This is working when

Portable UI imports this thin Draconic surface, not Metal or `document`, and wrong-target use hard-errors.

## Nested locations

- **Thin surface**: this is working when the API is a thin Draconic surface between portable UI code and a host.
  - bet: try a thin surface; pivot if it becomes Host I/O as a browser
- **Native path**: this is working when the native path uses `extern "C"` and unboxed numbers and structs. See [[location-40-ffi-scene-commands]]
  - bet: try the native path; pivot if platform channels or JSI are the surface
- **Web path**: this is working when the web path uses JS-only DOM bindings. See [[location-28-dom-renderer]]
  - bet: try JS-only DOM bindings; pivot if a DOM is put into Host I/O
- **Wrong-target hard-error**: this is working when wrong-target use hard-errors.
  - bet: try hard-errors; pivot if wrong-target use is a runtime no-op
- **Portable Program**: this is working when a portable Program cannot import Metal or `document` directly.
  - bet: try imports only through this API; pivot if portable code talks to the OS

## See also

- **Parent**: [[location-18-native-engine-desktop]]
- **Host config**: [[location-35-host-config]]
- **Glossary**: [[glossary]]
- **Architecture**: [[architecture-layer-cake]]
