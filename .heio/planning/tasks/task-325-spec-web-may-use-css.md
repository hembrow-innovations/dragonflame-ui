---
id: "task-325-spec-web-may-use-css"
title: "Spec Web may use CSS"
kind: task
status: ready
mode: afk
blocked_by: []
sprint: "framework-in-draconic"
slice: "slice-324-web-may-use-css"
tags: []
created_at: "2026-09-12T05:03:08Z"
updated_at: "2026-09-12T05:03:08Z"
---

# Spec Web may use CSS

## Blocked by

None.

## Done

Web-may-use-css spec folder exists from [[location-33-style-as-data]] Web may use CSS and [[rounds-323-freeze-web-may-use-css]]: web may use CSS because the browser already has it.

## Context

Write purpose, contract, and test.md from [[location-33-style-as-data]] Web may use CSS, [[overview-ui-framework]] web may use CSS because the browser already has it, and [[intent]] not CSS as the native layout runtime. Quote the destination: web may use CSS because the browser already has it.

[[purpose-style-as-data]] fences this prove as honesty forbids. Do not add a style-as-data promise. New area `web-may-use-css`.

Do not invent a public `css` tagged template. Do not invent a public `parseCss`. Do not invent CSS source strings as style. Do not invent a public mapper. Do not invent a public LayoutEngine. Do not restage `style-as-data.style:forbid-css-language` or `style-as-data.style:forbid-css-engine`. Do not restage StyleSheet-shaped or CSS-on-web oracles. Those live on [[purpose-leaf-kit]]. Do not restage [[contract-web-layout]]. Do not rewrite [[location-33-style-as-data]] or [[location-31-web-layout]]. Stop rather than invent.

TDD: ladder only. No product code.

## Verify

Spec files exist and name the oracle test.

scope: docs/specs/ui-framework/web-may-use-css/

## Links

- [[slice-324-web-may-use-css]]
- [[location-33-style-as-data]]
- [[location-31-web-layout]]
- [[purpose-style-as-data]]
- [[purpose-leaf-kit]]
- [[purpose-web-layout]]
- [[rounds-323-freeze-web-may-use-css]]

## Agent Brief

**Category:** enhancement
**Summary:** Assert the web-may-use-css ladder so StyleSheet-shaped objects stay the web input that the browser already lays out as CSS.

**Intent (required when product behaviour changes):**
- Promise ids: lock `web-may-use-css.style:css-because-browser-has-it`
- Purpose: write [[purpose-web-may-use-css]] in this sitting
- Contract-first: lock `web-may-use-css.style:css-because-browser-has-it` then name the test in test.md. No product code

**Current behavior:**
[[purpose-style-as-data]] already locks CSS language and CSS engine absence. [[purpose-leaf-kit]] already locks CSS on web and StyleSheet shape. No locked promise yet that this grain owns: web may use CSS because the browser already has it, without a public CSS mapper.

**Desired behavior:**
A spec folder locks one oracle: web may use CSS because the browser already has it. Oracle command is `node --test tests/web-may-use-css/css-because-browser-has-it.test.mjs`. Honesty and leaf-kit promises stay untouched.

**Key interfaces:**
- Purpose, contract, and test notes for area `web-may-use-css`
- Promises must not add a public `css` tagged template, `parseCss`, CSS mapper, or LayoutEngine

**Acceptance criteria:**
- [ ] purpose, contract, and test.md exist for web-may-use-css
- [ ] test.md names the oracle command above
- [ ] locked style-as-data honesty promises are not rewritten
- [ ] locked leaf-kit CSS-on-web promises are not rewritten
- [ ] No product code

**Out of scope:**
- Creating a style-as-data promise
- Restaging [[purpose-leaf-kit]] CSS-on-web or StyleSheet-shaped oracles
- Restaging [[purpose-web-layout]]
- One CSS engine for both hosts
- CSS as the native layout runtime
- Freezing StyleSheet shape or Native feed
