---
id: "task-114-red-green-js-backend-honesty"
title: "Red-green: JS backend honesty"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-113-spec-js-backend"
sprint: "web-tracers"
slice: "slice-112-js-backend-honesty"
tags: []
created_at: "2026-09-10T08:50:00Z"
updated_at: "2026-09-10T00:05:44Z"
---

# Red-green: JS backend honesty

## Blocked by

[[task-113-spec-js-backend]]: spec first.

## Done

Tests pass only while eval screens, dead native stubs, and copied JS emit stay absent.

## Context

TDD: write tests that fail if this checkout embeds eval as a screen loader, ships dead native stubs in the web package, or copies JS emit from the sibling toolchain. Run, see red if the tree already violates, otherwise implement the checks and green on the current tree. Then slice-112 oracles.

Do not add a native package entry. Do not invent a platform module. Do not name the browser API set. Do not repeat no-lowerer-here bytecode-VM oracles. Do not implement a compiler.

## Verify

`node --test tests/no-eval-here.test.mjs` pass. `node --test tests/no-native-stubs.test.mjs` pass. `node --test tests/no-emit-here.test.mjs` pass.

scope: tests/no-eval-here.test.mjs, tests/no-native-stubs.test.mjs, tests/no-emit-here.test.mjs

## Gauntlet

- **round 1**: `node --test tests/no-eval-here.test.mjs` and native and emit oracles. lose. eval missed indirect eval; native stubs missed package export keys.
- **round 2**: same checks. win. `js-backend.eval:no-eval-host`, `js-backend.split:no-native-stubs`, `js-backend.emit:no-emit-here`.

## Links

- [[slice-112-js-backend-honesty]]
- [[task-113-spec-js-backend]]
