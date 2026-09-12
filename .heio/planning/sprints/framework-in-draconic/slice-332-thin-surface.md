---
id: "slice-332-thin-surface"
title: "Thin surface"
kind: slice
status: met
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T05:19:12Z"
updated_at: "2026-09-12T07:55:50Z"
---

# Thin surface

## Why

Prove the API is a thin Draconic surface between portable UI code and a host. Portable Programs compile against that specifier. This package does not expose Host I/O as a browser.

## Done

The API is a thin Draconic surface between portable UI code and a host. A portable Program compiles against `h` and `text` from `dragonflame-ui/portable`. No public `compile` helper. No Host I/O as a browser.

## Blocked by

None.

## Non-goals

A public `compile` helper. Host I/O as a browser. A public `render` on the portable specifier. Freezing Native path, Web path, Wrong-target hard-error, or Portable Program. Restaging `renderer-portability.wrong-target:hard-error`. Pointing this slice CHECK at `tests/renderer-portability/portable-wrong-target.test.mjs`. Restaging `renderer-portability.web:js-only-dom`. Implementing the compiler. Platform channels or JSI. Rewriting [[location-41-renderer-portability]].

## Oracle checklist

- [x] O1: the API is a thin Draconic surface between portable UI code and a host
  CHECK: node --test tests/renderer-portability/portable-import.test.mjs
  EXPECT: pass
  EVIDENCE: 2026-09-12T07:55:50Z node --test tests/renderer-portability/portable-import.test.mjs pass 1 fail 0

## Pool

Durable links to task ids. Never drop them.

- [[task-333-red-thin-surface]]
- [[task-334-green-thin-surface]]

## See also

- [[location-41-renderer-portability]]
- [[location-18-native-engine-desktop]]
- [[location-17-web-component-library]]
- [[intent]]
- [[glossary]]
- [[architecture-layer-cake]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[test-renderer-portability]]
- [[rounds-331-freeze-thin-surface]]
