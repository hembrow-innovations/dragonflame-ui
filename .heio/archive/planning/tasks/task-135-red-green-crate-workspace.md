---
id: "task-135-red-green-crate-workspace"
title: "Red-green: crate workspace honesty"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-134-spec-crate-workspace"
sprint: "web-tracers"
slice: "slice-133-crate-workspace-honesty"
tags: []
created_at: "2026-09-10T10:15:00Z"
updated_at: "2026-09-10T03:09:43Z"
---

# Red-green: crate workspace honesty

## Blocked by

[[task-134-spec-crate-workspace]]: spec first.

## Done

Tests pass only while this checkout has no Cargo `[workspace]` and is not treated as a Cargo toolchain workspace.

## Context

TDD: write tests that fail if this checkout adds a Cargo `[workspace]` while native is unfunded, or treats a Cargo toolchain workspace as this UI product. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-133 oracles.

Do not add a public workspace helper. Do not add a Cargo.toml `[workspace]`. Do not add empty engine crates. Do not repeat no-empty-crate oracles. Do not repeat library-first oracles. Do not implement engine home. Do not implement a compiler.

## Verify

`node --test tests/no-cargo-workspace.test.mjs` pass. `node --test tests/no-toolchain-workspace.test.mjs` pass.

scope: tests/no-cargo-workspace.test.mjs, tests/no-toolchain-workspace.test.mjs

## Links

- [[slice-133-crate-workspace-honesty]]
- [[task-134-spec-crate-workspace]]
