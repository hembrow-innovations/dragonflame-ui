---
id: "task-326-red-green-web-may-use-css"
title: "Red-green Web may use CSS"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-325-spec-web-may-use-css"
sprint: "framework-in-draconic"
slice: "slice-324-web-may-use-css"
tags: []
created_at: "2026-09-12T05:03:08Z"
updated_at: "2026-09-12T05:03:08Z"
---

# Red-green Web may use CSS

## Blocked by

[[task-325-spec-web-may-use-css]]: ladder must lock `web-may-use-css.style:css-because-browser-has-it` before tests.

## Done

`node --test tests/web-may-use-css/css-because-browser-has-it.test.mjs` passes.

## Context

Callers keep `StyleSheet.create`. The prove is the web input: web may use CSS because the browser already has it. Framework owns the objects. The web leaf adapter privately applies them. No public `css`. No public `parseCss`. No public mapper. No public LayoutEngine.

Do not point CHECK at `tests/leaf-kit/leaf-view-text-style.test.mjs`. Do not restage style-as-data CSS forbids or leaf-kit CSS-on-web oracles. Do not freeze StyleSheet shape or Native feed. Do not invent one CSS engine for both hosts.

TDD: red test, then the smallest green that locks the oracle.

## Verify

The oracle command passes. No public CSS mapper. Honesty tests still pass.

scope: tests/web-may-use-css/css-because-browser-has-it.test.mjs

## Links

- [[slice-324-web-may-use-css]]
- [[task-325-spec-web-may-use-css]]
- [[location-33-style-as-data]]
- [[rounds-323-freeze-web-may-use-css]]

## Agent Brief

**Category:** enhancement
**Summary:** Red-green that web may use CSS because the browser already has it.

**Intent (required when product behaviour changes):**
- Promise ids: `web-may-use-css.style:css-because-browser-has-it`
- Purpose: [[purpose-web-may-use-css]]
- Contract-first: the test named in test.md must pass

**Current behavior:**
Style-as-data honesty tests exist. Leaf-kit view and text with style data on CSS exists. No test yet that this grain owns: web may use CSS because the browser already has it, without a public CSS mapper.

**Desired behavior:**
The oracle command passes. Named test: web may use CSS because the browser already has it. Fail if this checkout grows a public `css` tagged template, a public `parseCss`, CSS source strings as style, a public mapper, a public LayoutEngine, or one CSS engine for both hosts.

**Key interfaces:**
- New test file `tests/web-may-use-css/css-because-browser-has-it.test.mjs`
- No public `css`, `parseCss`, CSS mapper, or LayoutEngine

**Acceptance criteria:**
- [ ] `node --test tests/web-may-use-css/css-because-browser-has-it.test.mjs` passes
- [ ] The named test owns the web-css prove, not leaf-view-text-style or CSS-forbid oracles
- [ ] No public CSS mapper
- [ ] Style-as-data honesty tests still pass

**Out of scope:**
- Pointing this CHECK at `tests/leaf-kit/leaf-view-text-style.test.mjs`
- Restaging honesty oracles
- One CSS engine for both hosts
- CSS as the native layout runtime
- Freezing StyleSheet shape or Native feed
