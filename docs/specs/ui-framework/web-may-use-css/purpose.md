---
id: "purpose-web-may-use-css"
title: "Web may use CSS purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for web may use CSS. Web may use CSS because the browser already has it."
status: active
domain: ui-framework
area: web-may-use-css
tags: [purpose]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Web may use CSS purpose

## Job

Web may use CSS because the browser already has it. Callers still use `StyleSheet.create`. This package does not expose how.

Planning sitting [[rounds-323-freeze-web-may-use-css]], [[location-33-style-as-data]] Web may use CSS, [[overview-ui-framework]], and [[intent]]:

- **Web may use CSS**: web may use CSS because the browser already has it.
- **Bet**: try CSS on web and data on native; pivot if one CSS engine is required for both hosts.
- **Intent**: not CSS as the native layout runtime.
- **Overview**: Web may use CSS because the browser already has it. CSS is not the native layout runtime.
- **Ownership**: Framework owns StyleSheet-shaped objects. The web leaf adapter privately applies them. No public CSS mapper.

## In scope

Child destination sentences from [[location-33-style-as-data]] Web may use CSS:

- **Web may use CSS**: web may use CSS because the browser already has it.

This area's oracles lock `web-may-use-css.style:css-because-browser-has-it` at `node --test tests/web-may-use-css/css-because-browser-has-it.test.mjs`. They prove web may use CSS because the browser already has it. They do not prove StyleSheet shape. Those live on [[purpose-leaf-kit]]. They do not prove not a CSS language or not a CSS engine. Those live on [[purpose-style-as-data]]. They do not prove CSS-on-web leaf rendering. Those live on [[purpose-leaf-kit]]. They do not prove not-pixel-identical. Those live on [[purpose-web-layout]].

## Out of scope

- A public `css` tagged template.
- A public `parseCss`.
- CSS source strings as style.
- A public mapper.
- A public LayoutEngine.
- Creating a style-as-data promise.
- Restaging `style-as-data.style:forbid-css-language` or `style-as-data.style:forbid-css-engine`. Those live on [[purpose-style-as-data]].
- Restaging StyleSheet-shaped or CSS-on-web oracles. Those live on [[purpose-leaf-kit]].
- Restaging [[purpose-web-layout]].
- One CSS engine for both hosts.
- CSS as the native layout runtime.
- Freezing StyleSheet shape or Native feed.
- Rewriting [[location-33-style-as-data]] or [[location-31-web-layout]].

## Surfaces

Callers keep `StyleSheet.create` and pass StyleSheet-shaped objects as `style`. On web those objects apply as CSS because the browser already has it. App code does not import `css`, `parseCss`, a mapper, or LayoutEngine. This package does not expose how.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[rounds-323-freeze-web-may-use-css]], [[location-33-style-as-data]], [[location-31-web-layout]], [[intent]], [[overview-ui-framework]], [[purpose-style-as-data]], [[purpose-leaf-kit]], and [[purpose-web-layout]].

## Open product questions

- (none)
