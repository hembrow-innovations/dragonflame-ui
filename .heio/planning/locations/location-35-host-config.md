---
id: "location-35-host-config"
title: "Host config"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Host config

## This is working when

Only the leaf adapter knows DOM versus UIView versus engine draw lists.

## Nested locations

- **Leaf adapter**: this is working when only the leaf adapter knows DOM versus UIView versus engine draw lists.
  - bet: try a host config at the leaves; pivot if portable components import the host
- **Compile-time platform**: this is working when platform is a compile-time split, not a runtime JS bundle with dead native stubs.
  - bet: try compile-time split; pivot if one JS bundle carries both hosts
- **New Architecture steal**: this is working when the steal is an immutable shadow tree, synchronous layout and measure on the UI thread, mounting separate from reconcile, typed host descriptors as AOT FFI, and in-process typed synchronous framework-to-host calls.
  - bet: try those lessons; pivot if JSI or Hermes is stolen with them
- **Portable import**: this is working when a portable Program imports the renderer portability API, not Metal or `document`. See [[location-41-renderer-portability]]
  - bet: try the portability API; pivot if Host I/O is treated as a browser

## See also

- **Parent**: [[location-17-web-component-library]]
- **Host leaves**: [[location-32-host-leaves]]
- **Renderer portability**: [[location-41-renderer-portability]]
- **Idea**: [[overview-ui-framework]]
- **Architecture**: [[architecture-layer-cake]]
