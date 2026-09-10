---
id: "task-155-red-green-host-config"
title: "Red-green: host config honesty"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-154-spec-host-config"
sprint: "web-tracers"
slice: "slice-153-host-config-honesty"
tags: []
created_at: "2026-09-10T14:20:00Z"
updated_at: "2026-09-10T01:17:04Z"
---

# Red-green: host config honesty

## Blocked by

[[task-154-spec-host-config]]: spec first.

## Done

Tests pass only while this checkout does not steal JSI or Hermes as host config.

## Context

TDD: write tests that fail if this checkout steals JSI or Hermes as host config. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-153 oracles.

Do not add a public jsi. Do not add a public hermesRuntime. Do not add a public HostConfig. Do not lock native AOT FFI or UI-thread measure. Do not repeat leaf-kit oracles. Do not repeat document-import oracles. Do not repeat no-eval oracles. Do not repeat no-public-Host oracles. Do not implement a compiler.

## Verify

`node --test tests/no-jsi.test.mjs` pass. `node --test tests/no-hermes-host-config.test.mjs` pass.

scope: tests/no-jsi.test.mjs, tests/no-hermes-host-config.test.mjs

## Links

- [[slice-153-host-config-honesty]]
- [[task-154-spec-host-config]]

## Gauntlet

Round 1. `node --test tests/no-jsi.test.mjs` and `node --test tests/no-hermes-host-config.test.mjs`. Win. 1 pass 0 fail each.
