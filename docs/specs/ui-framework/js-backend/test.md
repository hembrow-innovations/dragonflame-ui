---
id: "test-js-backend"
title: "JS backend tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: js-backend
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-11"
---

# JS backend tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, and `js-backend.emit:no-emit-here`. Oracle commands:

- node --test tests/js-backend/no-eval-here.test.mjs
- node --test tests/js-backend/no-native-stubs.test.mjs
- node --test tests/js-backend/no-emit-here.test.mjs

## Tests

- **tests/js-backend/no-eval-here.test.mjs**: `this checkout does not embed eval as a screen loader`
  - **How:** fails if this checkout embeds eval as a screen loader
  - **Why:** promise `js-backend.eval:no-eval-host`
- **tests/js-backend/no-native-stubs.test.mjs**: `this checkout does not ship dead native stubs in the web package`
  - **How:** fails if this checkout ships dead native stubs in the web package
  - **Why:** promise `js-backend.split:no-native-stubs`
- **tests/js-backend/no-emit-here.test.mjs**: `this repo does not copy JS emit from the sibling toolchain`
  - **How:** fails if this checkout copies JS emit from the sibling toolchain
  - **Why:** promise `js-backend.emit:no-emit-here`

## Gaps

- No test yet for `js-backend.false-path:not-rn-but-bytecode`. Bytecode-VM filename oracles stay on [[purpose-absence]].
