---
id: "test-crate-workspace"
title: "Crate workspace tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: crate-workspace
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Crate workspace tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `crate-workspace.layout:workspace-later` and `crate-workspace.identity:not-toolchain`. Oracle commands:

- node --test tests/no-cargo-workspace.test.mjs
- node --test tests/no-toolchain-workspace.test.mjs

## Tests

- **tests/no-cargo-workspace.test.mjs**: `this checkout does not add a Cargo workspace while native is unfunded`
  - **How:** fails if this checkout adds a Cargo.toml `[workspace]` while native is unfunded
  - **Why:** promise `crate-workspace.layout:workspace-later`
- **tests/no-toolchain-workspace.test.mjs**: `this checkout does not treat a Cargo toolchain workspace as this UI product`
  - **How:** fails if this checkout treats a Cargo toolchain workspace as this UI product
  - **Why:** promise `crate-workspace.identity:not-toolchain`

## Gaps

- Library-first and no-empty-crate oracles stay on [[test-git-package]].
- Engine home stays unfrozen on [[location-36-engine-home]].
