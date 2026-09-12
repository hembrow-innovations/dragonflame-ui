---
id: "contract-web-may-use-css"
title: "Web may use CSS contract"
kind: contract
description: "Durable, plain-language promises for web may use CSS. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: web-may-use-css
tags: [contract]
created_at: "2026-09-12"
updated_at: "2026-09-12"
---

# Web may use CSS contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

Keep `style-as-data.style:forbid-css-language` and `style-as-data.style:forbid-css-engine` on [[contract-style-as-data]]. Keep `leaf-kit.layout:css-on-web` and `leaf-kit.style:stylesheet-shaped` on [[contract-leaf-kit]]. Keep `web-layout.layout:not-pixel-identical` and `web-layout.dom:copy-idea-not-impeller` on [[contract-web-layout]]. Do not repeat them here.

The web-may-use-css oracle is `node --test tests/web-may-use-css/css-because-browser-has-it.test.mjs`.

## Behaviour

- `web-may-use-css.style:css-because-browser-has-it`: Web may use CSS because the browser already has it. Callers still use `StyleSheet.create`. This package does not expose a public `css` tagged template, a public `parseCss`, CSS source strings as style, a public mapper, or a public LayoutEngine.
  test: web may use CSS because the browser already has it
