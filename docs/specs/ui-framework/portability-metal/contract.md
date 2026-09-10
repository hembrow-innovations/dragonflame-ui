---
id: "contract-portability-metal"
title: "Portability metal contract"
kind: contract
description: "Durable, plain-language promises for portability metal honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: portability-metal
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Portability metal contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `portability-metal.program:forbid-metal`: A portable Program cannot import Metal. This checkout does not let a portable Program import Metal.
  test: this checkout does not let a portable Program import Metal
