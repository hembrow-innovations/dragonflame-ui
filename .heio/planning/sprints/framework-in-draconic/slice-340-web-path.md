---
id: "slice-340-web-path"
title: "Web path"
kind: slice
status: met
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T05:47:51Z"
updated_at: "2026-09-12T08:21:00Z"
---

# Web path

## Why

Prove the Renderer portability API web path uses JS-only DOM bindings. Portable Programs still import the thin surface. DOM types stay behind that specifier.

## Done

The web path uses JS-only DOM bindings. Callers still use `h` and `text` from `dragonflame-ui/portable`. No public `document`, `createElement`, or DOM types on that specifier. A DOM is not put into Host I/O.

## Blocked by

None.

## Non-goals

A public `document` or `createElement` export on `dragonflame-ui/portable`. Host I/O as a browser. A public Host type, canvas switch, or paint API. A public `compile` helper. Freezing Wrong-target hard-error, Portable Program, or [[location-28-dom-renderer]] nested grains. Restaging `renderer-portability.surface:thin` or [[slice-332-thin-surface]]. Restaging `renderer-portability.native:extern-c-unboxed` or [[slice-336-native-path]]. Restaging `dom-only-host.bindings:js-only`. Pointing this slice CHECK at `tests/dom-only-host/no-host-io-dom.test.mjs`, `tests/renderer-portability/portable-import.test.mjs`, or `tests/renderer-portability/native-path.test.mjs`. Implementing the compiler. A second IR. Rewriting [[location-41-renderer-portability]].

## Oracle checklist

- [x] O1: the web path uses JS-only DOM bindings
  CHECK: node --test tests/renderer-portability/web-path.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/renderer-portability/web-path.test.mjs pass 1 fail 0

## Pool

Durable links to task ids. Never drop them.

- [[task-341-spec-web-path]]
- [[task-342-red-green-web-path]]

## See also

- [[location-41-renderer-portability]]
- [[location-28-dom-renderer]]
- [[location-17-web-component-library]]
- [[intent]]
- [[glossary]]
- [[architecture-layer-cake]]
- [[purpose-renderer-portability]]
- [[contract-renderer-portability]]
- [[purpose-dom-only-host]]
- [[slice-332-thin-surface]]
- [[slice-336-native-path]]
- [[rounds-339-freeze-web-path]]
