---
id: "purpose-layout-tests"
title: "Layout tests purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the tests-location placement fence. Native layout, if funded, is a frozen algorithm with tests, not user CSS on native. This tests location does not invent a Taffy test list."
status: active
domain: ui-framework
area: layout-tests
tags: [purpose]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Layout tests purpose

## Job

Native layout, if funded, is a frozen algorithm with tests, not user CSS on native. This tests location does not invent a Taffy test list.

Planning sitting [[rounds-306-freeze-layout-tests-later]], [[location-29-tests]], [[intent]], and [[architecture-layer-cake]]:

- **Layout tests later**: native layout, if funded, is a frozen algorithm with tests, not user CSS on native.
- **Placement**: this tests location does not invent a Taffy test list. Native is funded. Frozen-algorithm CHECKs stay on [[location-42-native-layout]] and [[contract-ffi-scene-commands]].
- **Intent**: not CSS as the native layout runtime.
- **Architecture**: layout is an engine primitive with a frozen algorithm and tests, not user CSS on native. Native layout is Taffy. Web layout is CSS.
- **Public surface**: none. No LayoutEngine. No Yoga. No public layout-test helper.

## In scope

Child destination sentences from [[location-29-tests]] Layout tests later:

- **Layout tests later**: native layout, if funded, is a frozen algorithm with tests, not user CSS on native. This tests location does not invent a Taffy test list.

This area's oracles lock `layout-tests.placement:no-taffy-list` at `node --test tests/layout-tests/no-taffy-list.test.mjs`. They prove this tests location does not invent a Taffy test list. They do not prove Taffy lays out a rect. Those live on [[purpose-ffi-scene-commands]]. They do not prove not-pixel-identical or copy-DOM-idea-not-Impeller. Those live on [[purpose-web-layout]].

## Out of scope

- Inventing a Taffy case list.
- Rewriting [[location-42-native-layout]].
- Pointing CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`.
- Restaging `ffi-scene-commands.layout:taffy`. Those live on [[purpose-ffi-scene-commands]].
- Restaging not-pixel-identical or copy-DOM-idea-not-Impeller. Those live on [[purpose-web-layout]].
- First-version tests.
- Test IDs. Those live on [[location-34-a11y-test-ids]].
- A public LayoutEngine.
- Yoga.
- A public layout-test helper.
- CSS as the native layout runtime.
- Implementing the compiler in this repo.

## Surfaces

None. Callers do not import LayoutEngine, Yoga, or a layout-test helper. Package tests at this location do not list Taffy cases. Frozen-algorithm CHECKs stay on [[purpose-ffi-scene-commands]].

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-306-freeze-layout-tests-later]], [[location-29-tests]], [[location-42-native-layout]], [[intent]], [[architecture-layer-cake]], [[purpose-ffi-scene-commands]], and [[purpose-web-layout]].

## Open product questions

- (none)
