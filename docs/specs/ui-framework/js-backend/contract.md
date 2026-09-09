---
id: "contract-js-backend"
title: "JS backend contract"
kind: contract
description: "Durable, plain-language promises for JS backend honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: js-backend
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# JS backend contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `js-backend.eval:no-eval-host`: This checkout does not embed eval as a mini-Hermes and does not eval screens from strings.
  test: this checkout does not embed eval as a screen loader
- `js-backend.split:no-native-stubs`: Platform is a compile-time split, not a runtime JS bundle with dead native stubs.
  test: this checkout does not ship dead native stubs in the web package
- `js-backend.emit:no-emit-here`: JS emit into a browser is already true in the sibling toolchain. This repo does not rebuild JS emit.
  test: this repo does not copy JS emit from the sibling toolchain
- `js-backend.false-path:not-rn-but-bytecode`: The path is not a JS thread, a shadow thread, a UI thread, a Draconic interpreter, and a bridge.
