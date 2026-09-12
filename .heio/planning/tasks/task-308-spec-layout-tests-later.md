---
id: "task-308-spec-layout-tests-later"
title: "Spec layout tests later"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-307-layout-tests-later"
tags: []
created_at: "2026-09-12T13:00:00Z"
updated_at: "2026-09-12T13:00:00Z"
---

# Spec layout tests later

## Blocked by

None.

## Done

Layout-tests purpose, contract, and test lock `layout-tests.placement:no-taffy-list` from [[location-29-tests]] Layout tests later and [[rounds-306-freeze-layout-tests-later]].

## Context

Empty ladder. Create `docs/specs/ui-framework/layout-tests/` purpose, contract, and test from the location destination plus `docs/`. Quote Layout tests later: native layout, if funded, is a frozen algorithm with tests, not user CSS on native. This tests location does not invent a Taffy test list.

Native is funded. Frozen-algorithm CHECKs stay on [[location-42-native-layout]] and [[contract-ffi-scene-commands]]. Do not rewrite those destinations. Do not lock a second Taffy-rect oracle.

Public surface stays none. Do not invent LayoutEngine, Yoga, or a public layout-test helper.

Do not repeat `ffi-scene-commands.layout:taffy`. Do not repeat [[contract-web-layout]] not-pixel-identical or copy-DOM-idea-not-Impeller. Do not freeze First-version tests or Test IDs.

TDD: ladder only. No product code.

## Verify

Purpose, contract, and test.md name the placement oracle and point `layout-tests.placement:no-taffy-list` at `node --test tests/layout-tests/no-taffy-list.test.mjs`. Named test: this tests location does not invent a Taffy test list.

scope: docs/specs/ui-framework/layout-tests/

## Links

- [[slice-307-layout-tests-later]]
- [[location-29-tests]]
- [[location-42-native-layout]]
- [[contract-ffi-scene-commands]]
- [[contract-web-layout]]
- [[rounds-306-freeze-layout-tests-later]]

## Agent Brief

**Category:** enhancement
**Summary:** Assert the layout-tests placement ladder so this tests location does not invent a Taffy list now that native is funded.

**Intent (required when product behaviour changes):**
- Promise ids: lock `layout-tests.placement:no-taffy-list`
- Purpose: write [[purpose-layout-tests]] in this sitting
- Contract-first: lock `layout-tests.placement:no-taffy-list` then name the test in test.md. No product code

**Current behavior:**
No `docs/specs/ui-framework/layout-tests/` folder. [[location-29-tests]] Layout tests later is unnamed as a promise. [[contract-ffi-scene-commands]] already locks Taffy lays out a rect. [[contract-web-layout]] already locks not-pixel-identical.

**Desired behavior:**
The layout-tests ladder locks one oracle: this tests location does not invent a Taffy test list. Oracle command is `node --test tests/layout-tests/no-taffy-list.test.mjs`. Frozen-algorithm CHECKs stay on ffi-scene-commands.

**Key interfaces:**
- Purpose, contract, and test notes for area `layout-tests`
- Promises must not add a public LayoutEngine, Yoga, or layout-test helper

**Acceptance criteria:**
- [ ] purpose, contract, and test.md lock `layout-tests.placement:no-taffy-list`
- [ ] test.md names the oracle command above
- [ ] `ffi-scene-commands.layout:taffy` and [[contract-web-layout]] are not repeated as new oracles
- [ ] No product code

**Out of scope:**
- Inventing a Taffy case list
- Rewriting [[location-42-native-layout]]
- Pointing CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`
- Restaging web-layout honesty
- First-version tests and Test IDs
- Implementing the compiler
