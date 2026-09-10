---
id: "task-151-red-green-style-as-data"
title: "Red-green: style as data honesty"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-150-spec-style-as-data"
sprint: "web-tracers"
slice: "slice-149-style-as-data-honesty"
tags: []
created_at: "2026-09-10T13:30:00Z"
updated_at: "2026-09-10T01:20:00Z"
---

# Red-green: style as data honesty

## Blocked by

[[task-150-spec-style-as-data]]: spec first.

## Done

Tests pass only while this checkout does not treat style as a CSS language in the framework, and does not map style objects through a CSS engine product.

## Context

TDD: write tests that fail if this checkout treats style as a CSS language in the framework, or maps style objects through a CSS engine product. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-149 oracles.

Do not add a public css tagged template. Do not add a public parseCss. Do not lock native Taffy feed. Do not lock CSS as the native layout runtime. Do not repeat StyleSheet-shaped oracles. Do not repeat style-patch oracles. Do not repeat no-Taffy-on-web oracles. Do not implement a compiler.

## Verify

`node --test tests/no-css-language.test.mjs` pass. `node --test tests/no-css-engine.test.mjs` pass.

scope: tests/no-css-language.test.mjs, tests/no-css-engine.test.mjs

## Links

- [[slice-149-style-as-data-honesty]]
- [[task-150-spec-style-as-data]]

## Gauntlet

Round 1. `node --test tests/no-css-language.test.mjs` and `node --test tests/no-css-engine.test.mjs`. Win. 1 pass 0 fail each.
