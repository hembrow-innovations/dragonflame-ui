---
id: "test-host-config"
title: "Host config tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: host-config
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Host config tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `host-config.steal:forbid-jsi` and `host-config.steal:forbid-hermes`. Oracle commands:

- node --test tests/no-jsi.test.mjs
- node --test tests/no-hermes-host-config.test.mjs

## Tests

- **tests/no-jsi.test.mjs**: `this checkout does not steal JSI as host config`
  - **How:** fails if this checkout steals JSI as host config
  - **Why:** promise `host-config.steal:forbid-jsi`
- **tests/no-hermes-host-config.test.mjs**: `this checkout does not steal Hermes as host config`
  - **How:** fails if this checkout steals Hermes as host config
  - **Why:** promise `host-config.steal:forbid-hermes`

## Gaps

- Leaf-kit oracles stay on [[test-leaf-kit]].
- Portable `document` import oracles stay on [[test-renderer-portability]].
- no-eval and compile-time-split oracles stay on [[test-js-backend]].
- no-public-Host oracles stay on [[test-dom-only-host]].
- Immutable shadow tree, AOT FFI, and UI-thread measure stay unfrozen while native is unfunded.
