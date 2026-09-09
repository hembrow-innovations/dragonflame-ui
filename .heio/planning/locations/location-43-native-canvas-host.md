---
id: "location-43-native-canvas-host"
title: "Native canvas host"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Native canvas host

## This is working when

The native default is draw lists into the Rust engine.

## Nested locations

- **Draw lists**: this is working when native paint records draw lists into the Rust engine.
  - bet: try draw lists; pivot if native paint is DOM-like patching
- **Native default if funded**: this is working when canvas engine is the native default, only if native UI is funded.
  - bet: try canvas as native default; pivot if OEM widgets become the default. See [[location-44-oem-escape-hatch]]
- **No web canvas**: this is working when there is no web canvas host.
  - bet: try DOM on web and canvas on native; pivot if web is given a canvas host
- **Raster**: this is working when native raster is GPU submit on native.
  - bet: try GPU submit; pivot if native raster is browser paint in a WebView

## See also

- **Parent**: [[location-18-native-engine-desktop]]
- **Rust engine**: [[location-37-rust-engine]]
- **OEM escape hatch**: [[location-44-oem-escape-hatch]]
- **Architecture**: [[architecture-layer-cake]]
- **Glossary**: [[glossary]]
