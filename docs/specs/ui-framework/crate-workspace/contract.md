---
id: "contract-crate-workspace"
title: "Crate workspace contract"
kind: contract
description: "Durable, plain-language promises for crate workspace honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: crate-workspace
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Crate workspace contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `crate-workspace.layout:workspace-later`: A Cargo workspace exists only when native is funded. This checkout has no Cargo.toml `[workspace]` while native is unfunded.
  test: this checkout does not add a Cargo workspace while native is unfunded
- `crate-workspace.identity:not-toolchain`: This checkout is not a Cargo toolchain workspace. A Cargo toolchain workspace is not treated as this UI product.
  test: this checkout does not treat a Cargo toolchain workspace as this UI product
