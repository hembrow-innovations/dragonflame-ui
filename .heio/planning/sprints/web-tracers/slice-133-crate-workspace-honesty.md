---
id: "slice-133-crate-workspace-honesty"
title: "Crate workspace honesty"
kind: slice
status: met
sprint: "web-tracers"
blocked_by:
  - "slice-69-importable-package"
tags: []
created_at: "2026-09-10T10:15:00Z"
updated_at: "2026-09-10T03:10:34Z"
---

# Crate workspace honesty

## Why

Honesty demo. The git package already imports. Nested bets still unnamed: a Cargo workspace only when native is funded, and this checkout is not a Cargo toolchain workspace.

## Done

Tests fail if this checkout adds a Cargo `[workspace]` while native is unfunded, or treats a Cargo toolchain workspace as this UI product. No public workspace API.

## Blocked by

[[slice-69-importable-package]]: library exists first so it can stay the product without a Cargo workspace. [[slice-69-importable-package]] already covers no empty Rust crates and library first; do not repeat those oracles.

## Non-goals

A public workspace helper. A Cargo.toml `[workspace]`. Empty engine crates. Repeating no-empty-crate oracles. Repeating library-first oracles. Engine home split. Native hosts. Implementing a compiler.

## Oracle checklist

- [x] O1: no Cargo workspace
  CHECK: node --test tests/no-cargo-workspace.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail
- [x] O2: not a toolchain workspace
  CHECK: node --test tests/no-toolchain-workspace.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-134-spec-crate-workspace]]
- [[task-135-red-green-crate-workspace]]

## See also

- [[location-22-crate-layout]]
- [[location-17-web-component-library]]
- [[slice-69-importable-package]]
- [[ticket-61-native-ui-unfunded]]
- [[rounds-132-crate-workspace-honesty]]
