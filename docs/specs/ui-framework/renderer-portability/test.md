---
id: "test-renderer-portability"
title: "Renderer portability tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: renderer-portability
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-12"
---

# Renderer portability tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `renderer-portability.surface:thin`, `renderer-portability.wrong-target:hard-error`, `renderer-portability.native:extern-c-unboxed`, and `renderer-portability.web:js-only-dom`. Oracle commands:

- node --test tests/renderer-portability/portable-import.test.mjs
- node --test tests/renderer-portability/portable-wrong-target.test.mjs
- node --test tests/renderer-portability/native-path.test.mjs
- node --test tests/renderer-portability/web-path.test.mjs

## Tests

- **tests/renderer-portability/portable-import.test.mjs**: `portable Program compiles against the portability API`
  - **How:** a portable Program imports the thin Draconic surface and compiles against the portability API
  - **Why:** promise `renderer-portability.surface:thin`
- **tests/renderer-portability/portable-wrong-target.test.mjs**: `importing document from portable code hard-errors`
  - **How:** importing `document` from portable code hard-errors. Wrong-target use is not a runtime no-op
  - **Why:** promise `renderer-portability.wrong-target:hard-error`
- **tests/renderer-portability/native-path.test.mjs**: `native path uses extern C and unboxed numbers and structs`
  - **How:** a native-target Program still compiles against `h` and `text` from `dragonflame-ui/portable` while the private native mapping uses `extern "C"` and unboxed numbers and structs. Fails if this checkout exports `extern "C"` symbols, packed-scene types, JSI, or platform channels from `dragonflame-ui/portable`. Does not point CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs` or `tests/renderer-portability/portable-import.test.mjs`
  - **Why:** promise `renderer-portability.native:extern-c-unboxed`
- **tests/renderer-portability/web-path.test.mjs**: `web path uses JS-only DOM bindings`
  - **How:** a web-target Program still compiles against `h` and `text` from `dragonflame-ui/portable` while the private renderer mapping talks to the DOM through JS-only bindings. Fails if this checkout exports `document`, `createElement`, DOM types, or puts a DOM into Host I/O from `dragonflame-ui/portable`. Does not point CHECK at `tests/dom-only-host/no-host-io-dom.test.mjs`, `tests/renderer-portability/portable-import.test.mjs`, or `tests/renderer-portability/native-path.test.mjs`
  - **Why:** promise `renderer-portability.web:js-only-dom`

## Gaps

- No test yet for `renderer-portability.host-io:forbid-browser` or `renderer-portability.program:forbid-os`.
- No test yet for a Metal import. Wrong-target proves `document`.
- Packed-scene submit oracles stay on [[test-ffi-scene-commands]].
