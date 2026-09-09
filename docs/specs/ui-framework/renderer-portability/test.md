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
updated_at: "2026-09-10"
---

# Renderer portability tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `renderer-portability.surface:thin` and `renderer-portability.wrong-target:hard-error`. Oracle commands:

- node --test tests/portable-import.test.mjs
- node --test tests/portable-wrong-target.test.mjs

## Tests

- **tests/portable-import.test.mjs**: `portable Program compiles against the portability API`
  - **How:** a portable Program imports the thin Draconic surface and compiles against the portability API
  - **Why:** promise `renderer-portability.surface:thin`
- **tests/portable-wrong-target.test.mjs**: `importing document from portable code hard-errors`
  - **How:** importing `document` from portable code hard-errors. Wrong-target use is not a runtime no-op
  - **Why:** promise `renderer-portability.wrong-target:hard-error`

## Gaps

- No test yet for `renderer-portability.web:js-only-dom`, `renderer-portability.host-io:forbid-browser`, or `renderer-portability.program:forbid-os`.
- The two oracle tests are not in the repo yet. This folder is ladder only.
- No test yet for a Metal import. Web path proves `document`.
