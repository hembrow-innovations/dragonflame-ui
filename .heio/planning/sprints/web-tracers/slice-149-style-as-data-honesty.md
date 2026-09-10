---
id: "slice-149-style-as-data-honesty"
title: "Style as data honesty"
kind: slice
status: met
sprint: "web-tracers"
blocked_by:
  - "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-10T13:30:00Z"
updated_at: "2026-09-10T18:45:00Z"
---

# Style as data honesty

## Why

Honesty demo. Style is already StyleSheet-shaped objects. Nested bets still unnamed: not a CSS language in the framework, and not a CSS engine product.

## Done

Tests fail if this checkout treats style as a CSS language in the framework, or maps style objects through a CSS engine product. No public css tagged template. No public parseCss.

## Blocked by

[[slice-72-leaf-kit-on-dom]]: StyleSheet-shaped style exists so it can stay data and not become a CSS language or a CSS engine. [[slice-72-leaf-kit-on-dom]] already covers StyleSheet-shaped objects on CSS; do not repeat those oracles. [[slice-116-patch-attrs-children]] already covers StyleSheet-shaped style signal writes; do not repeat those oracles. [[slice-141-web-layout-honesty]] already covers no Taffy on web and no Impeller DOM; do not repeat those oracles.

## Non-goals

A public css tagged template. A public parseCss. Repeating StyleSheet-shaped oracles. Repeating style-patch oracles. Repeating no-Taffy-on-web oracles. Native objects feeding Taffy and paint. CSS as the native layout runtime. One CSS engine for both hosts. Native hosts. Implementing a compiler.

## Oracle checklist

- [x] O1: no CSS language
  CHECK: node --test tests/no-css-language.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail
- [x] O2: no CSS engine
  CHECK: node --test tests/no-css-engine.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-150-spec-style-as-data]]
- [[task-151-red-green-style-as-data]]

## See also

- [[location-33-style-as-data]]
- [[location-17-web-component-library]]
- [[slice-72-leaf-kit-on-dom]]
- [[slice-116-patch-attrs-children]]
- [[slice-141-web-layout-honesty]]
- [[rounds-148-style-as-data-honesty]]
