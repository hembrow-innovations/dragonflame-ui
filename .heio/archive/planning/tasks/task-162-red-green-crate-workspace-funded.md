---
id: "task-162-red-green-crate-workspace-funded"
title: "Red-green: crate workspace funded"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-161-spec-crate-workspace-funded"
sprint: "native-if-funded"
slice: "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-11T12:00:00Z"
updated_at: "2026-09-11T22:00:00Z"
---

# Red-green: crate workspace funded

## Blocked by

[[task-161-spec-crate-workspace-funded]]: spec first.

## Done

Tests pass if a Cargo workspace appears because native is funded, and still fail if this checkout is treated as a Cargo toolchain workspace.

## Context

TDD: retarget crate-workspace tests so they no longer fail on a funded workspace. Keep the not-toolchain oracle. Run, red if the tree still encodes unfunded absence as the rule, then green.

Do not add a public workspace helper. Do not add a Cargo.toml `[workspace]` yet. Do not add empty engine crates. Do not repeat no-empty-crate oracles. Do not implement a window. Do not implement a compiler.

## Verify

Commands named in the crate-workspace spec test.md pass.

scope: tests/ named by that spec

## Links

- [[slice-76-desktop-vsync-window]]
- [[task-161-spec-crate-workspace-funded]]
