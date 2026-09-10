---
id: "contract-web-layout"
title: "Web layout contract"
kind: contract
description: "Durable, plain-language promises for web layout honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: web-layout
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Web layout contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `web-layout.layout:not-pixel-identical`: Web versus native is allowed to disagree because web is CSS on the DOM and native is Taffy in the engine. This checkout does not force Taffy on web.
  test: this checkout does not force Taffy on web
- `web-layout.dom:copy-idea-not-impeller`: Copy the DOM backend as an idea, not as an attempt to make DOM look like Impeller. This checkout does not treat the DOM backend as a pixel-identical Impeller or Skia clone.
  test: this checkout does not treat the DOM backend as a pixel-identical Impeller or Skia clone
