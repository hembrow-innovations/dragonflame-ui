---
id: "test-layout-tests"
title: "Layout tests tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: layout-tests
tags: [test]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Layout tests tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `layout-tests.placement:no-taffy-list`. Oracle commands:

- node --test tests/layout-tests/no-taffy-list.test.mjs

## Tests

- **tests/layout-tests/no-taffy-list.test.mjs**: `this tests location does not invent a Taffy test list`
  - **How:** fails if this tests location invents a Taffy test list now that native is funded. Frozen-algorithm CHECKs stay on [[test-ffi-scene-commands]]. This folder does not point CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`
  - **Why:** promise `layout-tests.placement:no-taffy-list`

## Gaps

- Taffy-rect oracles stay on [[test-ffi-scene-commands]].
- Not-pixel-identical and copy-DOM-idea-not-Impeller oracles stay on [[test-web-layout]].
- First-version tests stay unnamed.
- Test IDs stay on [[location-34-a11y-test-ids]].
- Do not invent a Taffy case list here.
