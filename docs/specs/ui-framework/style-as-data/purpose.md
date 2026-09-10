---
id: "purpose-style-as-data"
title: "Style as data purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for style as data honesty. Not a CSS language in the framework, and not a CSS engine product."
status: active
domain: ui-framework
area: style-as-data
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Style as data purpose

## Job

Style is already StyleSheet-shaped objects. Nested honesty is not a CSS language in the framework, and not a CSS engine product.

Planning sitting [[rounds-148-style-as-data-honesty]] and [[intent]]:

- **Honesty nested bets**: not a CSS language in the framework, and not a CSS engine product. StyleSheet-shaped objects are already named.
- **Intent**: one component model, two hosts. Not CSS as the native layout runtime. This folder does not freeze that native destination.
- **Architecture**: web layout is CSS. Native layout is Taffy. Style as data is StyleSheet-shaped objects. They must not become a CSS engine.

## In scope

Child destination sentences from [[location-33-style-as-data]]:

- **StyleSheet shape**: style is StyleSheet-shaped objects.
- **Not a CSS language**: style must not become a CSS language in the framework.
- **Not a CSS engine**: they must not become a CSS engine.

This area's oracles prove this checkout does not treat style as a CSS language in the framework, and does not map style objects through a CSS engine product. They do not prove StyleSheet-shaped objects. [[purpose-leaf-kit]] already locks those. [[purpose-leaf-kit]] asserts `leaf-kit.style:forbid-css-engine` without tests; this folder owns the lock.

## Out of scope

- A public css tagged template.
- A public parseCss.
- Repeating StyleSheet-shaped oracles. Those live on [[purpose-leaf-kit]].
- Repeating style-patch oracles. Those live on [[purpose-dom-patch]].
- Repeating no-Taffy-on-web oracles. Those live on [[purpose-web-layout]].
- Native objects feeding Taffy and paint. That destination is [[location-42-native-layout]].
- CSS as the native layout runtime. That destination is [[location-42-native-layout]].
- One CSS engine for both hosts.
- Native hosts.
- Implementing the compiler in this repo.

## Surfaces

The first-version dragonflame-ui package on the web DOM host. Callers keep `h`, `render`, the closed leaf kit, and `StyleSheet.create`. They do not import `css`. They do not call `parseCss`. They do not pass CSS source strings as style.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-148-style-as-data-honesty]], [[intent]], [[location-33-style-as-data]], [[architecture-layer-cake]], and [[overview-ui-framework]].

## Open product questions

- (none)
