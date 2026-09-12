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
updated_at: "2026-09-12"
---

# JS backend tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, `js-backend.emit:no-emit-here`, `js-backend.path:frontend-ir-js`, and `js-backend.browser:uses-apis`. Oracle commands:

- node --test tests/js-backend/no-eval-here.test.mjs
- node --test tests/js-backend/no-native-stubs.test.mjs
- node --test tests/js-backend/no-emit-here.test.mjs
- node --test tests/js-backend/frontend-ir-js.test.mjs
- node --test tests/js-backend/browser-apis.test.mjs

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
- **tests/js-backend/frontend-ir-js.test.mjs**: `web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript`
  - **How:** fails unless web compile is Frontend to shared IR to the JS backend and the browser runs that JavaScript. Callers keep the existing dragonflame-ui import. Fails if this checkout grows a compile API or Frontend or IR types. Does not point CHECK at `tests/framework-source/sibling-compile.test.mjs`
  - **Why:** promise `js-backend.path:frontend-ir-js`
- **tests/js-backend/browser-apis.test.mjs**: `that package uses browser APIs. The source does not name the API set`
  - **How:** fails unless that package uses browser APIs and the source does not name the API set. Callers keep the existing dragonflame-ui import. Fails if this checkout publishes an API catalog, greps a named global list as the prove, or grows a BrowserAPI type or public compile helper. Does not point CHECK at `tests/js-backend/frontend-ir-js.test.mjs`, `tests/renderer-portability/web-path.test.mjs`, or `tests/renderer-portability/portable-program.test.mjs`
  - **Why:** promise `js-backend.browser:uses-apis`

## Gaps

- No test yet for `js-backend.false-path:not-rn-but-bytecode`. Bytecode-VM filename oracles stay on [[purpose-absence]].
- TypeScript emit and IR-fork filename oracles stay on [[purpose-absence]].
