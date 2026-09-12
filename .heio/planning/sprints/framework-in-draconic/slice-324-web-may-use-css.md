---
id: "slice-324-web-may-use-css"
title: "Web may use CSS"
kind: slice
status: frozen
sprint: "framework-in-draconic"
blocked_by: []
tags: []
created_at: "2026-09-12T05:03:08Z"
updated_at: "2026-09-12T05:03:08Z"
---

# Web may use CSS

## Why

Prove web may use CSS because the browser already has it. Framework owns StyleSheet-shaped objects. The web leaf adapter privately applies them. This package does not expose a CSS mapper.

## Done

Web may use CSS because the browser already has it. Callers still use `StyleSheet.create`. No public `css`. No public `parseCss`. No public mapper. No public LayoutEngine.

## Blocked by

None.

## Non-goals

A public `css` tagged template. A public `parseCss`. CSS source strings as style. A public mapper. A public LayoutEngine. One CSS engine for both hosts. CSS as the native layout runtime. Freezing StyleSheet shape, Native feed, Taffy, or Constraints. Restaging `style-as-data.style:forbid-css-language`, `style-as-data.style:forbid-css-engine`, `leaf-kit.layout:css-on-web`, or `leaf-kit.style:stylesheet-shaped`. Pointing this slice CHECK at `tests/leaf-kit/leaf-view-text-style.test.mjs`. Restaging [[slice-315-native-feed]]. Rewriting [[location-33-style-as-data]] or [[location-31-web-layout]].

## Oracle checklist

- [ ] O1: web may use CSS because the browser already has it
  CHECK: node --test tests/web-may-use-css/css-because-browser-has-it.test.mjs
  EXPECT: pass
  EVIDENCE: pending

## Pool

Durable links to task ids. Never drop them.

- [[task-325-spec-web-may-use-css]]
- [[task-326-red-green-web-may-use-css]]

## See also

- [[location-33-style-as-data]]
- [[location-31-web-layout]]
- [[location-17-web-component-library]]
- [[intent]]
- [[overview-ui-framework]]
- [[architecture-layer-cake]]
- [[purpose-style-as-data]]
- [[contract-style-as-data]]
- [[purpose-leaf-kit]]
- [[purpose-web-layout]]
- [[slice-315-native-feed]]
- [[rounds-323-freeze-web-may-use-css]]
