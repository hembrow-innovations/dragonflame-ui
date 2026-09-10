---
id: "contract-host-config"
title: "Host config contract"
kind: contract
description: "Durable, plain-language promises for host config honesty. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: host-config
tags: [contract]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Host config contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `host-config.steal:forbid-jsi`: New Architecture lessons must not steal JSI. This checkout does not steal JSI as host config.
  test: this checkout does not steal JSI as host config
- `host-config.steal:forbid-hermes`: New Architecture lessons must not steal Hermes. This checkout does not steal Hermes as host config.
  test: this checkout does not steal Hermes as host config
