---
id: "contract-style-as-data"
title: "Style as data contract"
kind: contract
description: "Durable, plain-language promises for style as data honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: style-as-data
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Style as data contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `style-as-data.style:forbid-css-language`: Style must not become a CSS language in the framework. This checkout does not treat style as a CSS language in the framework.
  test: this checkout does not treat style as a CSS language in the framework
- `style-as-data.style:forbid-css-engine`: Style objects must not become a CSS engine product. This checkout does not map style objects through a CSS engine product.
  test: this checkout does not map style objects through a CSS engine product
