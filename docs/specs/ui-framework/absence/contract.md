---
id: "contract-absence"
title: "Absence contract"
kind: contract
description: "Durable, plain-language promises for first-version absence. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: absence
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Absence contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `absence.jsx:no-jsx-here`: This checkout does not add JSX to the draconic parser. JSX is not a present Draconic language feature.
  test: this checkout does not add JSX to the draconic parser
- `absence.jsx:later-sugar`: If JSX is ever added, it is sugar for the same h(type, props) calls, erased before IR, after a human decision.
- `absence.lowerer:no-lowerer-here`: This repo does not fake a general LLVM lowerer, emit TypeScript, fork IR, or ship Draconic bytecode on a VM.
  test: this repo does not fake a general LLVM lowerer
- `absence.hot-reload:not-v1-gate`: Hot reload does not block a first version and is not required to import dragonflame-ui.
  test: dragonflame-ui imports as a library product in this repo
- `absence.hot-reload:forbid-ota`: Hot reload, if it exists later, is not Expo-style OTA of a JS bundle.
