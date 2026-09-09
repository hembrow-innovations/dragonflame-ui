---
id: "purpose-absence"
title: "Absence purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for first-version absence of JSX, a faked lowerer, and hot reload as a v1 gate."
status: active
domain: ui-framework
area: absence
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Absence purpose

## Job

First version is hyperscript without JSX in this checkout, without a faked LLVM lowerer, and without hot reload as a gate on import.

Wayfinder [[rounds-01-chart-framework]] and [[intent]]:

- **Answer 4**: hyperscript first. No JSX until a later human decision.
- **Rounds out of scope**: adding JSX to the draconic parser from this repo; a second IR.
- **Intent we will not**: not a second IR or a UI bytecode; not Expo-style OTA of a JS bundle; not filing this work into the draconic toolchain ROADMAP.

## In scope

Child destination sentences from [[location-57-jsx-later]], [[location-58-hot-reload]], and [[location-59-llvm-lowerer]]:

- **Later human decision**: JSX remains a later human decision.
- **Same calls**: JSX, if ever added, is sugar for the same `h(type, props)` calls. See [[location-26-hyperscript]].
- **Erased before IR**: JSX, if ever added, is erased before IR.
- **Not from this repo**: JSX is not added to the draconic parser from this repo.
- **Not first version**: hot reload does not block a first version.
- **Optional Phase 4**: hot reload stays optional Phase 4. A general LLVM lowerer stays optional Phase 4.
- **Toolchain problem**: this repo does not fake a general LLVM lowerer.
- **Native emit assumed**: native emit stays LLVM plus linked C, IR is not bytecode, and Runtime is not a VM.

This area's oracles prove no JSX from this repo, no faked lowerer, and that hot reload is not required to import dragonflame-ui.

## Out of scope

- Implementing JSX.
- Adding JSX to the draconic parser from this repo.
- Implementing a lowerer.
- Implementing hot reload.
- Inventing Embed or JS-debug. [[location-58-hot-reload]] says those names are not defined further. Stop rather than invent them.
- Expo-style OTA of a JS bundle.
- A second IR or a UI bytecode.
- Filing this work into the draconic toolchain ROADMAP.
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui checkout. Import of the library does not wait on a reloader.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-01-chart-framework]], [[intent]], [[location-57-jsx-later]], [[location-58-hot-reload]], [[location-59-llvm-lowerer]], and [[location-26-hyperscript]].

## Open product questions

- (none)
