---
id: "purpose-framework-source"
title: "Framework source purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for framework source. Library authored in Draconic. Proved with PATH draconic."
status: active
domain: ui-framework
area: framework-source
tags: [purpose]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Framework source purpose

## Job

The Framework library is authored in Draconic. PATH `draconic` proves it. Web emit is the JS backend.

[[intent]], [[architecture-layer-cake]], [[location-17-web-component-library]], [[location-30-js-backend]], and [[ticket-252-framework-not-draconic]]:

- **Intent**: a Flutter-shaped multiplatform UI whose framework library is Draconic.
- **Framework in Draconic**: components, signals, layout policy, gestures, and animation, in Draconic.
- **Architecture**: framework library is Draconic. True path in the sketch: framework source is Draconic. Native build is LLVM machine code talking to views or a renderer with synchronous layout. Web build is the JS backend. Same components, two hosts.
- **Prove tool**: the installed `draconic` on PATH. Not `cargo run` of the sibling checkout.
- **Pivot**: the JS-first bet is pivoted. The destination is still run-on-JS-backend.

## In scope

Destination sentences from [[intent]], [[architecture-layer-cake]], [[location-17-web-component-library]], [[location-30-js-backend]], and [[ticket-252-framework-not-draconic]]:

- **Location 17**: the dragonflame-ui git package of components, signals, hyperscript, a DOM renderer, and tests runs on the JS backend.
- **JS backend**: web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript.
- **Phase 0 assumed**: JS emit into a browser is already true in the language toolchain, with no JSX and no WASM web target.
- **First tracer**: at least one public dragonflame-ui export is authored as Draconic. PATH `draconic check` and `draconic build --target js` prove that source. The package barrel may stay JavaScript until emit preserves `export`.
- **Remaining JS**: remaining JS modules wait on later slices. They stay out of this ladder.
- **Import**: callers still import dragonflame-ui. This does not rewrite `git-package.identity:library-product` on [[contract-git-package]].

This area's oracles prove framework `.drac` sources exist for at least one public export, and that PATH `draconic` checks and builds that source. They do not prove no-eval, no-native-stubs, or no-emit-here. Those live on [[purpose-js-backend]]. They do not prove no-jsx-here or no-lowerer-here. Those live on [[purpose-absence]].

## Out of scope

- Migrating remaining JS modules.
- Implementing the compiler in this repo.
- Copying JS emit from the language toolchain into this checkout.
- `cargo run` of the sibling draconic checkout as the prove tool.
- Replacing the package barrel with emit that does not preserve `export`.
- Inventing JSX.
- A second IR.
- Changing the public import name.
- Repeating no-eval, no-native-stubs, or no-emit-here oracles. Those live on [[purpose-js-backend]]. Keep `js-backend.emit:no-emit-here`.
- Repeating no-jsx-here or no-lowerer-here oracles. Those live on [[purpose-absence]].
- Rewriting `git-package.identity:library-product`.

## Surfaces

The dragonflame-ui git package. Callers keep the existing import. At least one public export is authored as `.drac` and proved by PATH `draconic check` and `draconic build --target js`. Remaining JS modules stay out of this ladder.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[intent]], [[architecture-layer-cake]], [[location-17-web-component-library]], [[location-30-js-backend]], [[ticket-252-framework-not-draconic]], [[purpose-js-backend]], [[purpose-absence]], and [[purpose-git-package]].

## Open product questions

- (none)
