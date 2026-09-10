---
id: "contract-render-object"
title: "Render object contract"
kind: contract
description: "Durable, plain-language promises for render object honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: render-object
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Render object contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `render-object.retain:no-widget`: Component configs are cheap and render objects persist. Flutter Widget is not the retained node. There is no public Widget.
  test: this checkout does not treat Flutter Widget as the retained node
- `render-object.names:no-collapse`: Component stays the function and Render object stays the retained node. Widget or Element naming does not collapse them. There is no public Element.
  test: this checkout does not name Widget or Element as the collapse of Component and Render object
