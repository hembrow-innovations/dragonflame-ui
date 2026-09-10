---
id: "purpose-crate-workspace"
title: "Crate workspace purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for crate workspace honesty. Native is funded so a Cargo workspace may exist, not a toolchain workspace."
status: active
domain: ui-framework
area: crate-workspace
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-11"
---

# Crate workspace purpose

## Job

The git package already imports. Nested honesty is a Cargo workspace only when native is funded, and this checkout is not a Cargo toolchain workspace.

Planning sitting [[rounds-160-fund-native]] (promoted from [[ticket-61-native-ui-unfunded]]), prior sitting [[rounds-132-crate-workspace-honesty]], and [[intent]]:

- **Honesty nested bets**: a Cargo workspace exists only when native is funded; do not treat a Cargo toolchain workspace as this UI product. Library first and no empty crates are already named.
- **Funding**: Native is funded. A Cargo workspace may exist because native is funded. Engine home is this repo.
- **Intent**: a library product in this repo. This product is not the Draconic toolchain.
- **Architecture**: must not treat a Cargo toolchain workspace as this UI product.

## In scope

Child destination sentences from [[location-22-crate-layout]]:

- **Workspace later**: a Cargo workspace exists only when native is funded.
- **Not a toolchain workspace**: do not treat a Cargo toolchain workspace as this UI product.

Native is funded, so the no-workspace-while-unfunded rule is gone. This area's oracles prove a Cargo workspace may exist because native is funded, and that this checkout is not a Cargo toolchain workspace. They do not prove library first or no empty crates. [[purpose-git-package]] already locks those.

## Out of scope

- A public workspace helper.
- Repeating library-first oracles. Those live on [[purpose-git-package]].
- Repeating no-empty-crate oracles. Those live on [[purpose-git-package]].
- Engine home split. Engine home is this repo. Do not freeze a split. See [[location-36-engine-home]].
- Native hosts.
- Copying the sibling draconic workspace here.
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui git package. Callers keep `import { h, render } from "dragonflame-ui"`. They do not import a workspace. They do not open a Cargo.toml to use the library.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-160-fund-native]], [[rounds-132-crate-workspace-honesty]], [[intent]], [[location-22-crate-layout]], and [[architecture-layer-cake]].

## Open product questions

- (none)
