---
id: "test-portability-metal"
title: "Portability metal tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: portability-metal
tags: [test]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Portability metal tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They lock `portability-metal.program:forbid-metal`. Oracle commands:

- node --test tests/portable-metal.test.mjs

## Tests

- **tests/portable-metal.test.mjs**: `this checkout does not let a portable Program import Metal`
  - **How:** fails if this checkout lets a portable Program import Metal
  - **Why:** promise `portability-metal.program:forbid-metal`

## Gaps

- Thin-surface and portable `document` import oracles stay on [[test-renderer-portability]].
- Host I/O oracles stay on [[test-dom-only-host]].
- JSI oracles stay on [[test-host-config]].
- Native `extern "C"`, unboxed FFI, Vulkan, fs, and process stay unfrozen while native is unfunded.
