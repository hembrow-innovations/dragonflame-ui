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

Tests for this folder. They will lock `framework-source.authoring:draconic` and `framework-source.compile:sibling-js`. Oracle commands:

- node --test tests/framework-source/draconic-authored.test.mjs
- node --test tests/framework-source/sibling-compile.test.mjs

## Tests

- **tests/framework-source/draconic-authored.test.mjs**: `at least one public export is authored as Draconic`
  - **How:** fails if this checkout has no framework `.drac` sources for at least one public dragonflame-ui export
  - **Why:** promise `framework-source.authoring:draconic`
- **tests/framework-source/sibling-compile.test.mjs**: `sibling draconic build --target js produces the JavaScript callers import`
  - **How:** fails if that export's shipped JavaScript is hand-written rather than sibling `draconic build --target js` emit. Callers still import dragonflame-ui
  - **Why:** promise `framework-source.compile:sibling-js`

## Gaps

- No test yet for `framework-source.scope:remaining-js-later`.
- The two oracle tests are not in the repo yet. This folder is ladder only.
- No-eval, no-native-stubs, and no-emit-here oracles stay on [[test-js-backend]].
- No-jsx-here and no-lowerer-here oracles stay on [[test-absence]].
- Library-product identity stays on [[test-git-package]].
