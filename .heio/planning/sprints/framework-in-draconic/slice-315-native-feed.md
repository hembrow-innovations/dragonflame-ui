---
id: "slice-315-native-feed"
title: "Native feed"
kind: slice
status: frozen
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T15:00:00Z"
updated_at: "2026-09-12T15:00:00Z"
---

# Native feed

## Why

Prove StyleSheet-shaped objects are the native input to layout and paint. Framework owns the objects. Engine privately owns Taffy and paint. This package does not expose a feed mapper.

## Done

On native those objects feed layout and paint. Callers still use `StyleSheet.create`. No public feed mapper. No public LayoutEngine. No Taffy types.

## Blocked by

None.

## Non-goals

A public feed mapper. A public LayoutEngine. Taffy types. Implementing Taffy. Implementing native hosts. CSS as the native layout runtime. One CSS engine for both hosts. Freezing StyleSheet shape, Web may use CSS, Taffy, or Constraints. Restaging `style-as-data.style:forbid-css-language`, `style-as-data.style:forbid-css-engine`, or `ffi-scene-commands.layout:taffy`. Pointing this slice CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`. Restaging [[slice-307-layout-tests-later]]. Rewriting [[location-33-style-as-data]] or [[location-42-native-layout]].

## Oracle checklist

- [ ] O1: on native those objects feed layout and paint
  CHECK: node --test tests/native-feed/objects-feed-layout-paint.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-316-spec-native-feed]]
- [[task-317-red-green-native-feed]]

## See also

- [[location-33-style-as-data]]
- [[location-42-native-layout]]
- [[location-17-web-component-library]]
- [[intent]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
- [[purpose-style-as-data]]
- [[contract-style-as-data]]
- [[purpose-leaf-kit]]
- [[purpose-ffi-scene-commands]]
- [[slice-287-aot-host-descriptors]]
- [[slice-307-layout-tests-later]]
- [[rounds-318-freeze-native-feed]]
