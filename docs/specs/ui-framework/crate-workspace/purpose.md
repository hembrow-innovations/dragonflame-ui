---
id: "purpose-crate-workspace"
title: "Crate workspace purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for crate workspace honesty. Workspace only when native is funded, not a toolchain workspace."
status: active
domain: ui-framework
area: crate-workspace
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Crate workspace purpose

## Job

The git package already imports. Nested honesty is a Cargo workspace only when native is funded, and this checkout is not a Cargo toolchain workspace.

Planning sitting [[rounds-132-crate-workspace-honesty]] and [[intent]]:

- **Honesty nested bets**: a Cargo workspace exists only when native is funded; do not treat a Cargo toolchain workspace as this UI product. Library first and no empty crates are already named.
- **Intent**: a library product in this repo. Native is funded later. This product is not the Draconic toolchain.
- **Architecture**: must not treat a Cargo toolchain workspace as this UI product.

## In scope

Child destination sentences from [[location-22-crate-layout]]:

- **Workspace later**: a Cargo workspace exists only when native is funded.
- **Not a toolchain workspace**: do not treat a Cargo toolchain workspace as this UI product.

This area's oracles prove no Cargo `[workspace]` while native is unfunded, and that this checkout is not a Cargo toolchain workspace. They do not prove library first or no empty crates. [[purpose-git-package]] already locks those.

## Out of scope

- A public workspace helper.
- Repeating library-first oracles. Those live on [[purpose-git-package]].
- Repeating no-empty-crate oracles. Those live on [[purpose-git-package]].
- Engine home split. [[location-36-engine-home]] stays unfunded. Do not freeze engine split.
- Native hosts.
- Copying the sibling draconic workspace here.
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui git package. Callers keep `import { h, render } from "dragonflame-ui"`. They do not import a workspace. They do not open a Cargo.toml to use the library.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-132-crate-workspace-honesty]], [[intent]], [[location-22-crate-layout]], and [[architecture-layer-cake]].

## Open product questions

- (none)
