---
id: "slice-112-js-backend-honesty"
title: "JS backend honesty"
kind: slice
status: frozen
sprint: "web-tracers"
blocked_by:
  - "slice-69-importable-package"
tags: []
created_at: "2026-09-10T08:50:00Z"
updated_at: "2026-09-10T08:50:00Z"
---

# JS backend honesty

## Why

Honesty demo. The package already runs on the JS backend. Nested bets still unnamed: compile-time split, no eval, not RN-but-bytecode, emit stays in the sibling toolchain.

## Done

Tests fail if this checkout embeds eval as a screen loader, ships dead native stubs in the web package, or copies JS emit from the sibling toolchain. Not a JS thread plus shadow thread plus interpreter plus bridge. Browser APIs stay unnamed.

## Blocked by

[[slice-69-importable-package]]: library exists first. [[slice-85-first-version-without-sugar]] already covers no TypeScript emit, no IR fork, and no bytecode VM; do not repeat those oracles.

## Non-goals

Naming the browser API set. Dual package entries. Empty native stubs. Inventing sibling JS backend flags. Copying Phase 0 emit here. Implementing a compiler.

## Oracle checklist

- [ ] O1: no eval host
  CHECK: node --test tests/no-eval-here.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no dead native stubs
  CHECK: node --test tests/no-native-stubs.test.mjs
  EXPECT: pass
  EVIDENCE: pending
- [ ] O3: emit stays in the sibling toolchain
  CHECK: node --test tests/no-emit-here.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-113-spec-js-backend]]
- [[task-114-red-green-js-backend-honesty]]

## See also

- [[location-30-js-backend]]
- [[location-17-web-component-library]]
- [[location-35-host-config]]
- [[slice-85-first-version-without-sugar]]
- [[ticket-65-first-tests-unnamed]]
- [[rounds-111-js-backend-honesty]]
