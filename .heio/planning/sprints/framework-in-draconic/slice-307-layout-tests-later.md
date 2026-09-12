---
id: "slice-307-layout-tests-later"
title: "Layout tests later"
kind: slice
status: active
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T13:00:00Z"
updated_at: "2026-09-12T17:45:00Z"
---

# Layout tests later

## Why

Name the fence so drain cannot invent a Taffy test list at the package tests location now that native is funded.

## Done

Native layout, if funded, is a frozen algorithm with tests, not user CSS on native. This tests location does not invent a Taffy test list. Frozen-algorithm CHECKs stay on [[location-42-native-layout]] and [[contract-ffi-scene-commands]]. No public LayoutEngine.

## Blocked by

None.

## Non-goals

Inventing a Taffy case list here. Rewriting [[location-42-native-layout]]. A public LayoutEngine. CSS as the native layout runtime. Pointing this slice CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`. Restaging `ffi-scene-commands.layout:taffy` or [[contract-web-layout]]. Freezing First-version tests or Test IDs. Restaging in-sprint framework-source, host-descriptor, ticker, vsync, or public-site work.

## Oracle checklist

- [x] O1: this tests location does not invent a Taffy test list
  CHECK: node --test tests/layout-tests/no-taffy-list.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/layout-tests/no-taffy-list.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-308-spec-layout-tests-later]]
- [[task-309-red-green-layout-tests-later]]

## See also

- [[location-29-tests]]
- [[location-17-web-component-library]]
- [[location-42-native-layout]]
- [[location-31-web-layout]]
- [[intent]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
- [[purpose-ffi-scene-commands]]
- [[contract-ffi-scene-commands]]
- [[purpose-web-layout]]
- [[contract-web-layout]]
- [[rounds-306-freeze-layout-tests-later]]
