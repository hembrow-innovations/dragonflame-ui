---
id: "test-framework-source"
title: "Framework source tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: framework-source
tags: [test]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Framework source tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `framework-source.authoring:draconic` and `framework-source.compile:path-draconic`. Oracle commands:

- node --test tests/framework-source/draconic-authored.test.mjs
- node --test tests/framework-source/path-compile.test.mjs

## Tests

- **tests/framework-source/draconic-authored.test.mjs**: `at least one public export is authored as Draconic`
  - **How:** fails if this checkout has no framework `.drac` sources for at least one public dragonflame-ui export. Callers still import dragonflame-ui
  - **Why:** promise `framework-source.authoring:draconic`
- **tests/framework-source/path-compile.test.mjs**: `PATH draconic check and build prove the authored export`
  - **How:** fails unless PATH `draconic check` and `draconic build --target js` succeed on that `.drac` source. Fails if prove is `cargo run` of the sibling checkout. Does not replace the package barrel with emit
  - **Why:** promise `framework-source.compile:path-draconic`

## Gaps

- No test yet for `framework-source.scope:remaining-js-later`.
- No-eval, no-native-stubs, and no-emit-here oracles stay on [[test-js-backend]].
- No-jsx-here and no-lowerer-here oracles stay on [[test-absence]].
- Library-product identity stays on [[test-git-package]].
