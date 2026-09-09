---
id: "contract-renderer-portability"
title: "Renderer portability contract"
kind: contract
description: "Durable, plain-language promises for the portable web import surface. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: renderer-portability
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Renderer portability contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `renderer-portability.surface:thin`: The API is a thin Draconic surface between portable UI code and a host. A portable Program compiles against that API.
  test: portable Program compiles against the portability API
- `renderer-portability.wrong-target:hard-error`: A portable Program cannot import Metal or `document` directly. Wrong-target use hard-errors and is not a runtime no-op.
  test: importing document from portable code hard-errors
- `renderer-portability.web:js-only-dom`: The web path talks to the DOM through JS-only bindings.
- `renderer-portability.host-io:forbid-browser`: The surface is not Host I/O as a browser. A DOM is not put into Host I/O.
- `renderer-portability.program:forbid-os`: Portable code does not talk to the OS.
