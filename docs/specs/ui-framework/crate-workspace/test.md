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
updated_at: "2026-09-11"
---

# Crate workspace tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `crate-workspace.layout:workspace-later` and `crate-workspace.identity:not-toolchain`. Oracle commands:

- node --test tests/crate-workspace/funded-cargo-workspace.test.mjs
- node --test tests/crate-workspace/no-toolchain-workspace.test.mjs

## Tests

- **tests/crate-workspace/funded-cargo-workspace.test.mjs**: `a Cargo workspace may exist because native is funded`
  - **How:** fails if this checkout still forbids a Cargo.toml `[workspace]` while native is funded
  - **Why:** promise `crate-workspace.layout:workspace-later`
- **tests/crate-workspace/no-toolchain-workspace.test.mjs**: `this checkout does not treat a Cargo toolchain workspace as this UI product`
  - **How:** fails if this checkout treats a Cargo toolchain workspace as this UI product
  - **Why:** promise `crate-workspace.identity:not-toolchain`

## Gaps

- Library-first and no-empty-crate oracles stay on [[test-git-package]].
- Engine home stays this repo. See [[location-36-engine-home]].
