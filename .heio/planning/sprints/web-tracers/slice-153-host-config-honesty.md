---
id: "slice-153-host-config-honesty"
title: "Host config honesty"
kind: slice
status: met
sprint: "web-tracers"
blocked_by:
  - "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-10T14:20:00Z"
updated_at: "2026-09-10T21:50:00Z"
---

# Host config honesty

## Why

Honesty demo. Host config already lives at the leaf adapter. Nested bets still unnamed: New Architecture lessons must not steal JSI or Hermes.

## Done

Tests fail if this checkout steals JSI or Hermes as host config. No public jsi. No public hermesRuntime. No public HostConfig.

## Blocked by

[[slice-72-leaf-kit-on-dom]]: a leaf adapter exists so host config can stay there and not become JSI or Hermes. [[slice-72-leaf-kit-on-dom]] already covers the closed leaf kit on CSS; do not repeat those oracles. [[slice-75-portable-web-import]] already covers portable `document` import hard-errors; do not repeat those oracles. [[slice-112-js-backend-honesty]] already covers compile-time split and no eval; do not repeat those oracles. [[slice-121-dom-only-web-host]] already covers no public Host type; do not repeat those oracles.

## Non-goals

A public jsi. A public hermesRuntime. A public HostConfig. Repeating leaf-kit oracles. Repeating portable `document` import oracles. Repeating no-eval oracles. Repeating no-public-Host oracles. Immutable shadow tree. Synchronous layout and measure APIs. AOT FFI host descriptors. Native UIView versus engine draw lists. Native hosts. Implementing a compiler.

## Oracle checklist

- [x] O1: no JSI
  CHECK: node --test tests/no-jsi.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail
- [x] O2: no Hermes host config
  CHECK: node --test tests/no-hermes-host-config.test.mjs
  EXPECT: pass
  EVIDENCE: 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-154-spec-host-config]]
- [[task-155-red-green-host-config]]

## See also

- [[location-35-host-config]]
- [[location-17-web-component-library]]
- [[slice-72-leaf-kit-on-dom]]
- [[slice-75-portable-web-import]]
- [[slice-112-js-backend-honesty]]
- [[slice-121-dom-only-web-host]]
- [[rounds-152-host-config-honesty]]
