---
id: "slice-348-portable-program"
title: "Portable Program"
kind: slice
status: met
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T06:16:32Z"
updated_at: "2026-09-12T09:18:32Z"
---

# Portable Program

## Why

Prove a portable Program cannot import Metal or `document` directly. Callers still import only the thin surface. Portable code does not talk to the OS.

## Done

A portable Program cannot import Metal or `document` directly. Callers still use `h` and `text` from `dragonflame-ui/portable`. No public `compile` helper. Metal and `document` are not host modules. A missing host is not a runtime no-op.

## Blocked by

None.

## Non-goals

A public Metal or `document` host module. A public `compile` helper. Locking `renderer-portability.program:forbid-os`. Proving `fs` or `process` as this slice's CHECK. Host I/O as a browser. A public Host type, canvas switch, or paint API. Freezing [[location-28-dom-renderer]] nested grains. Restaging `renderer-portability.surface:thin` or [[slice-332-thin-surface]]. Restaging `renderer-portability.native:extern-c-unboxed` or [[slice-336-native-path]]. Restaging `renderer-portability.web:js-only-dom` or [[slice-340-web-path]]. Restaging `renderer-portability.wrong-target:hard-error` or [[slice-344-wrong-target-hard-error]]. Restaging `portability-metal.program:forbid-metal`. Pointing this slice CHECK at `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, `tests/renderer-portability/portable-wrong-target.test.mjs`, or `tests/portability-metal/portable-metal.test.mjs`. Implementing the compiler. A second IR. Rewriting [[location-41-renderer-portability]].

## Oracle checklist

- [x] O1: a portable Program cannot import Metal or `document` directly
  CHECK: node --test tests/renderer-portability/portable-program.test.mjs
  EXPECT: pass
  EVIDENCE: 2026-09-12T09:18:32Z node --test tests/renderer-portability/portable-program.test.mjs pass 1 fail 0

## Pool

Durable links to task ids. Never drop them.

- [[task-349-red-portable-program]]
- [[task-350-green-portable-program]]

## See also

- [[location-41-renderer-portability]]
- [[location-17-web-component-library]]
- [[intent]]
- [[glossary]]
- [[architecture-layer-cake]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[test-renderer-portability]]
- [[purpose-portability-metal]]
- [[contract-portability-metal]]
- [[slice-332-thin-surface]]
- [[slice-336-native-path]]
- [[slice-340-web-path]]
- [[slice-344-wrong-target-hard-error]]
- [[rounds-347-freeze-portable-program]]
