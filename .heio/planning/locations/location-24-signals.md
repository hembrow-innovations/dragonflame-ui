---
id: "location-24-signals"
title: "Signals"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Signals

## This is working when

UI reactivity is get/set objects that subscribe on get and notify on set, written as ui.Signal in prose, not named signal at the host-API level.

## Nested locations

- **get and set**: this is working when get subscribes and set notifies.
  - bet: try Leptos and Solid-like signal graphs; pivot if setState or a React state hook is the dirty model
- **ui.Signal in prose**: this is working when prose prefers ui.Signal and host SIGINT and SIGTERM are not this.
  - bet: try ui.Signal in prose; pivot if the host API is named signal
- **Build dirtying only**: this is working when signals replace the build dirtying mechanism only.
  - bet: try signals for build dirtying; pivot if they replace constraint layout, hit-test, layer compositing, gesture arena, or semantics
- **Local structure**: this is working when structural change is local, Show and keyed For only in the sketch.
  - bet: try local structural change; pivot if setState dirtying an Element subtree returns
- **Owner**: this is working when effects and nested reactive scopes hang off an Owner. See [[location-25-owner]]
  - bet: try Owner disposal; pivot if Fiber or an Element dirty flag becomes ownership
- **No shared signal objects**: this is working when compute workers never share a signal object.
  - bet: try no shared signals across workers; pivot if shared-memory signal objects appear

## See also

- **Parent**: [[location-17-web-component-library]]
- **Components**: [[location-23-components]]
- **Owner**: [[location-25-owner]]
- **Threads**: [[location-45-threads]]
- **Glossary**: [[glossary]]
- **Architecture**: [[architecture-layer-cake]]
