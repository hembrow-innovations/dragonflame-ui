---
id: "purpose-js-backend"
title: "JS backend purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for JS backend honesty. Compile-time split, no eval, not RN-but-bytecode, Phase 0 assumed."
status: active
domain: ui-framework
area: js-backend
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-12"
---

# JS backend purpose

## Job

The first-version package runs on the JS backend. Nested honesty is compile-time split, no eval, not RN-but-bytecode, and Phase 0 assumed.

Planning sitting [[rounds-111-js-backend-honesty]] and [[intent]]:

- **Honesty nested bets**: compile-time split, no eval, not RN-but-bytecode, Phase 0 assumed. The parent destination sentence is already true as a running package.
- **Intent we will not**: not a second IR or a UI bytecode; not Expo-style OTA of a JS bundle; not WebAssembly as the web UI plan; not Hermes, V8, or JSC as the app runtime; not filing this work into the draconic toolchain ROADMAP.

## In scope

Child destination sentences from [[location-30-js-backend]]:

- **JS backend**: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript.
- **Browser APIs**: unnamed usage. That package uses browser APIs.
- **Compile-time split**: platform is a compile-time split, not a runtime JS bundle with dead native stubs.
- **Not RN-but-bytecode**: the path is not a JS thread, a shadow thread, a UI thread, a Draconic interpreter, and a bridge.
- **No eval**: `eval` is not embedded as a mini-Hermes and screens are not eval'd from strings.
- **Phase 0 assumed**: JS emit into a browser is already true in the sibling toolchain, with no JSX and no WASM web target.

[[location-35-host-config]] compile-time platform nested grain matches compile-time split: absence of a runtime JS bundle with dead native stubs. No public platform module. No second package entry.

This area's oracles prove no eval host, no dead native stubs in the web package, and that this repo does not copy JS emit from the sibling toolchain.

## Out of scope

- Naming the browser API set. [[ticket-65-first-tests-unnamed]] stays parked. [[location-30-js-backend]]: the source does not name the API set.
- Dual package entries, a public platform module, or empty native stubs.
- Inventing sibling JS backend flags.
- Copying Phase 0 JS emit into this repo.
- Implementing the compiler in this repo.
- TypeScript emit, IR fork, or a bytecode VM oracles. Those live on [[purpose-absence]].
- JSX or WASM web-target oracles in this folder. Phase 0 already states those as true in the sibling toolchain. JSX absence lives on [[purpose-absence]].
- Expo-style OTA of a JS bundle.

## Surfaces

The first-version dragonflame-ui package on the JS backend. Callers keep the existing import. They do not call `eval` to load a screen. They do not import a native stub from the web package.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-111-js-backend-honesty]], [[intent]], [[location-30-js-backend]], [[location-35-host-config]], and [[architecture-layer-cake]].

## Open product questions

- (none)
