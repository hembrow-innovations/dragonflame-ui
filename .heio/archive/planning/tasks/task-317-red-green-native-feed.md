---
id: "task-317-red-green-native-feed"
title: "Red-green Native feed"
kind: task
status: completed
mode: afk
blocked_by:
  - "task-316-spec-native-feed"
sprint: "framework-in-draconic"
slice: "slice-315-native-feed"
tags: []
created_at: "2026-09-12T15:00:00Z"
updated_at: "2026-09-12T06:53:51Z"
---

# Red-green Native feed

## Blocked by

[[task-316-spec-native-feed]]: ladder must lock `native-feed.style:objects-feed-layout-paint` before tests.

## Done

`node --test tests/native-feed/objects-feed-layout-paint.test.mjs` passes.

## Context

Callers keep `StyleSheet.create`. The prove is the native input: on native those objects feed layout and paint. Framework owns the objects. Engine privately owns Taffy and paint. No public feed mapper. No public LayoutEngine. No Taffy types.

Do not point CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`. Do not restage style-as-data CSS forbids or StyleSheet-shaped oracles. Do not freeze Taffy or Constraints. Do not implement native hosts.

TDD: red test, then the smallest green that locks the oracle.

## Verify

The oracle command passes. No public feed mapper. Honesty tests still pass.

scope: tests/native-feed/objects-feed-layout-paint.test.mjs

## Links

- [[slice-315-native-feed]]
- [[task-316-spec-native-feed]]
- [[location-33-style-as-data]]
- [[rounds-318-freeze-native-feed]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green that on native StyleSheet-shaped objects feed layout and paint.

**Intent (required when product behaviour changes):**
- Promise ids: `native-feed.style:objects-feed-layout-paint`
- Purpose: [[purpose-native-feed]]
- Contract-first: the test named in test.md must pass

**Current behavior:**
Style-as-data honesty tests exist. Taffy-rect tests exist under ffi-scene-commands. No test yet that on native those objects feed layout and paint.

**Desired behavior:**
The oracle command passes. Named test: on native those objects feed layout and paint. Fail if this checkout grows a public feed mapper, LayoutEngine, or Taffy types.

**Key interfaces:**
- New test file `tests/native-feed/objects-feed-layout-paint.test.mjs`
- No public feed mapper, LayoutEngine, or Taffy type

**Acceptance criteria:**
- [x] `node --test tests/native-feed/objects-feed-layout-paint.test.mjs` passes
- [x] The named test owns the feed prove, not taffy-rect or CSS-forbid oracles
- [x] No public feed mapper
- [x] Style-as-data honesty tests still pass

**Out of scope:**
- Pointing this CHECK at `tests/ffi-scene-commands/taffy-rect.test.mjs`
- Restaging honesty oracles
- Implementing Taffy
- Implementing native hosts
- Freezing Taffy or Constraints

## Gauntlet

- **round 1**: `node --test tests/native-feed/objects-feed-layout-paint.test.mjs`; win; 1 pass 0 fail; honesty still pass
