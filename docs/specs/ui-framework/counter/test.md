---
id: "test-counter"
title: "Counter tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: counter
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Counter tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `counter.component:run-once`, `counter.signals:ui-signal`, and `counter.hyperscript:static-h`. Oracle commands:

- node --test tests/counter-static-h.test.mjs
- node --test tests/counter-signal-patch.test.mjs
- node --test tests/counter-run-once.test.mjs

## Tests

- **tests/counter-static-h.test.mjs**: `static hyperscript text on DOM`
  - **How:** a function component returns `h(type, props)` and static text lands on the DOM
  - **Why:** promise `counter.hyperscript:static-h`
- **tests/counter-signal-patch.test.mjs**: `signal write patches the same DOM text`
  - **How:** a ui.Signal write patches the same DOM text. The render object is retained
  - **Why:** promise `counter.signals:ui-signal`
- **tests/counter-run-once.test.mjs**: `component function did not re-run on the write`
  - **How:** after a signal write, the component function has not run again
  - **Why:** promise `counter.component:run-once`

## Gaps

- No test yet for `counter.component:forbid-vdom`, `counter.authoring:forbid-jsx`, `counter.dom:only-web-host`, `counter.host:forbid-wasm`, `counter.embedder:browser-raf`, or `counter.js-backend:unnamed-apis`.
- The three oracle tests are not in the repo yet. This folder is ladder only.
- No test yet for patching attributes or children. The location destination names text, attributes, and children. This demo's oracles name text only.
