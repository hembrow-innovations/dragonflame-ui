---
id: "purpose-native-feed"
title: "Native feed purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for native feed. On native StyleSheet-shaped objects feed layout and paint."
status: active
domain: ui-framework
area: native-feed
tags: [purpose]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Native feed purpose

## Job

On native those objects feed layout and paint. Callers still use `StyleSheet.create`. This package does not expose how.

Planning sitting [[rounds-318-freeze-native-feed]], [[location-33-style-as-data]] Native feed, [[overview-ui-framework]], and [[intent]]:

- **Native feed**: on native those objects feed layout and paint.
- **Bet**: try data into Taffy and paint; pivot if they become a CSS engine on native.
- **Intent**: not CSS as the native layout runtime.
- **Overview**: StyleSheet-shaped objects. On native they feed layout and paint. They must not become a CSS engine.
- **Ownership**: Framework owns StyleSheet-shaped objects. Engine privately owns Taffy and paint. No public feed mapper.

## In scope

Child destination sentences from [[location-33-style-as-data]] Native feed:

- **Native feed**: on native those objects feed layout and paint.

This area's oracles lock `native-feed.style:objects-feed-layout-paint` at `node --test tests/native-feed/objects-feed-layout-paint.test.mjs`. They prove on native those objects feed layout and paint. They do not prove StyleSheet shape. Those live on [[purpose-leaf-kit]]. They do not prove not a CSS language or not a CSS engine. Those live on [[purpose-style-as-data]]. They do not prove Taffy lays out a rect. Those live on [[purpose-ffi-scene-commands]].

## Out of scope

- A public feed mapper.
- A public LayoutEngine.
- Taffy types.
- Creating a style-as-data promise.
- Restaging `style-as-data.style:forbid-css-language` or `style-as-data.style:forbid-css-engine`. Those live on [[purpose-style-as-data]].
- Restaging StyleSheet-shaped oracles. Those live on [[purpose-leaf-kit]].
- Restaging `ffi-scene-commands.layout:taffy`. Those live on [[purpose-ffi-scene-commands]].
- Implementing Taffy.
- Implementing native hosts.
- Freezing Taffy or Constraints.
- CSS as the native layout runtime.
- One CSS engine for both hosts.
- Rewriting [[location-33-style-as-data]] or [[location-42-native-layout]].

## Surfaces

Callers keep `StyleSheet.create` and pass StyleSheet-shaped objects as `style`. On native those objects feed layout and paint. App code does not import Taffy, LayoutEngine, or a feed helper. This package does not expose how.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-318-freeze-native-feed]], [[location-33-style-as-data]], [[location-42-native-layout]], [[intent]], [[overview-ui-framework]], [[purpose-style-as-data]], [[purpose-leaf-kit]], and [[purpose-ffi-scene-commands]].

## Open product questions

- (none)
