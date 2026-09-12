---
id: "slice-344-wrong-target-hard-error"
title: "Wrong-target hard-error"
kind: slice
status: frozen
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T06:01:23Z"
updated_at: "2026-09-12T06:01:23Z"
---

# Wrong-target hard-error

## Why

Prove wrong-target use hard-errors. Portable Programs still import the thin surface. `document` is not a bindable op. Wrong-target use is not a runtime no-op.

## Done

Wrong-target use hard-errors. Callers still use `h` and `text` from `dragonflame-ui/portable`. No public `document` or Metal on that specifier. No public `compile` helper. Wrong-target use is not a runtime no-op.

## Blocked by

None.

## Non-goals

A public `document` or Metal export on `dragonflame-ui/portable`. A public `compile` helper. Wrong-target use as a runtime no-op. Host I/O as a browser. A public Host type, canvas switch, or paint API. Freezing Portable Program or [[location-28-dom-renderer]] nested grains. Restaging `renderer-portability.surface:thin` or [[slice-332-thin-surface]]. Restaging `renderer-portability.native:extern-c-unboxed` or [[slice-336-native-path]]. Restaging `renderer-portability.web:js-only-dom` or [[slice-340-web-path]]. Pointing this slice CHECK at `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/portability-metal/portable-metal.test.mjs`. Implementing the compiler. A second IR. Rewriting [[location-41-renderer-portability]].

## Oracle checklist

- [ ] O1: wrong-target use hard-errors
  CHECK: node --test tests/renderer-portability/portable-wrong-target.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-345-red-wrong-target]]
- [[task-346-green-wrong-target]]

## See also

- [[location-41-renderer-portability]]
- [[location-17-web-component-library]]
- [[intent]]
- [[glossary]]
- [[architecture-layer-cake]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[test-renderer-portability]]
- [[slice-332-thin-surface]]
- [[slice-336-native-path]]
- [[slice-340-web-path]]
- [[rounds-343-freeze-wrong-target-hard-error]]
