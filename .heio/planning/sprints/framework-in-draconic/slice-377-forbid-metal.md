---
id: "slice-377-forbid-metal"
title: "Forbid Metal"
kind: slice
status: frozen
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T08:10:57Z"
updated_at: "2026-09-12T08:10:57Z"
---

# Forbid Metal

## Why

Prove this checkout does not let a portable Program import Metal after the product specifier dropped `compile`. Callers still import only the thin surface. No public Metal.

## Done

This checkout does not let a portable Program import Metal. The named test loads without importing `compile` from `dragonflame-ui/portable`. Callers still use `h` and `text` from `dragonflame-ui/portable`. No public `compile` helper. No public Metal.

## Blocked by

None.

## Non-goals

A public Metal or GPU handle. A public `compile` helper. Locking `renderer-portability.program:forbid-os`. Proving `fs` or `process` as this slice's CHECK. Host I/O as a browser. A public Host type, canvas switch, or paint API. Freezing [[location-28-dom-renderer]] nested grains. Restaging `renderer-portability.surface:thin` or [[slice-332-thin-surface]]. Restaging `renderer-portability.native:extern-c-unboxed` or [[slice-336-native-path]]. Restaging `renderer-portability.web:js-only-dom` or [[slice-340-web-path]]. Restaging `renderer-portability.wrong-target:hard-error` or [[slice-344-wrong-target-hard-error]]. Restaging [[slice-348-portable-program]]. Pointing this slice CHECK at `tests/renderer-portability/portable-program.test.mjs`, `tests/renderer-portability/portable-import.test.mjs`, `tests/renderer-portability/native-path.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, `tests/renderer-portability/portable-wrong-target.test.mjs`, or `tests/renderer-portability/compile.mjs`. Implementing the compiler. A second IR. Rewriting [[location-41-renderer-portability]].

## Oracle checklist

- [ ] O1: this checkout does not let a portable Program import Metal
  CHECK: node --test tests/portability-metal/portable-metal.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-378-red-forbid-metal]]
- [[task-379-green-forbid-metal]]

## See also

- [[ticket-371-portable-metal-compile-import]]
- [[location-41-renderer-portability]]
- [[location-17-web-component-library]]
- [[intent]]
- [[glossary]]
- [[architecture-layer-cake]]
- [[purpose-portability-metal]]
- [[contract-portability-metal]]
- [[test-portability-metal]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[slice-332-thin-surface]]
- [[slice-348-portable-program]]
- [[rounds-376-freeze-forbid-metal]]
