---
id: "task-316-spec-native-feed"
title: "Spec Native feed"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-315-native-feed"
tags: []
created_at: "2026-09-12T15:00:00Z"
updated_at: "2026-09-12T15:00:00Z"
---

# Spec Native feed

## Blocked by

None.

## Done

Native-feed spec folder exists from [[location-33-style-as-data]] Native feed and [[rounds-318-freeze-native-feed]]: on native those objects feed layout and paint.

## Context

Write purpose, contract, and test.md from [[location-33-style-as-data]] Native feed, [[overview-ui-framework]] style as data, and [[intent]] not CSS as the native layout runtime. Quote the destination: on native those objects feed layout and paint.

[[purpose-style-as-data]] fences this prove. Do not add a style-as-data promise. New area `native-feed`.

Do not invent a public feed mapper. Do not invent a public LayoutEngine. Do not invent Taffy types. Do not restage `style-as-data.style:forbid-css-language` or `style-as-data.style:forbid-css-engine`. Do not restage StyleSheet-shaped oracles. Those live on [[purpose-leaf-kit]]. Do not restage `ffi-scene-commands.layout:taffy`. Do not rewrite [[location-33-style-as-data]] or [[location-42-native-layout]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the oracle test.

scope: docs/specs/ui-framework/native-feed/

## Links

- [[slice-315-native-feed]]
- [[location-33-style-as-data]]
- [[location-42-native-layout]]
- [[purpose-style-as-data]]
- [[purpose-leaf-kit]]
- [[purpose-ffi-scene-commands]]
- [[rounds-318-freeze-native-feed]]

## Agent Brief

**Category:** enhancement
**Summary:** Assert the native-feed ladder so StyleSheet-shaped objects stay the native input to layout and paint.

**Intent (required when product behaviour changes):**
- Promise ids: lock `native-feed.style:objects-feed-layout-paint`
- Purpose: write [[purpose-native-feed]] in this sitting
- Contract-first: lock `native-feed.style:objects-feed-layout-paint` then name the test in test.md. No product code

**Current behavior:**
[[purpose-style-as-data]] already locks CSS language and CSS engine absence and fences native objects feeding Taffy and paint. [[purpose-leaf-kit]] already locks StyleSheet shape. No locked promise yet that on native those objects feed layout and paint.

**Desired behavior:**
A spec folder locks one oracle: on native those objects feed layout and paint. Oracle command is `node --test tests/native-feed/objects-feed-layout-paint.test.mjs`. Honesty promises stay untouched.

**Key interfaces:**
- Purpose, contract, and test notes for area `native-feed`
- Promises must not add a public feed mapper, LayoutEngine, or Taffy type

**Acceptance criteria:**
- [ ] purpose, contract, and test.md exist for native-feed
- [ ] test.md names the oracle command above
- [ ] locked style-as-data honesty promises are not rewritten
- [ ] No product code

**Out of scope:**
- Creating a style-as-data promise
- Restaging [[purpose-leaf-kit]] StyleSheet-shaped oracles
- Restaging [[purpose-ffi-scene-commands]] Taffy-rect oracles
- Implementing Taffy
- Implementing native hosts
- Freezing Taffy or Constraints
