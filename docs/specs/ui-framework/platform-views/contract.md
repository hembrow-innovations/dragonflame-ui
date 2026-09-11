---
id: "contract-platform-views"
title: "Platform views contract"
kind: contract
description: "Durable, plain-language promises for platform views. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: platform-views
tags: [contract]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Platform views contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `platform-views.host:hatch-not-default`: Occupying the hatch on iOS does not make OEM the default host. Platform views are an escape hatch, not how all native UI is built. Canvas remains the default host.
  test: occupying the hatch does not make OEM the default host
- `platform-views.ios:slot-occupied`: The iOS embedder occupies the existing `platform-view` slot by slot id. Occupancy is not an async Bridge, platform channel, or JSI. Simulator is the run oracle.
  test: iOS embedder occupies the existing platform-view slot with no async Bridge
- `platform-views.types:forbid-os-views`: Public OS view types stay unnamed.
- `platform-views.host:forbid-android-attach`: Android view attach is not this tracer.
- `platform-views.host:forbid-web-oem`: OEM is not a web host.
