---
id: "slice-157-portability-metal-honesty"
title: "Portability metal honesty"
kind: slice
status: met
sprint: "web-tracers"
blocked_by:
  - "slice-75-portable-web-import"
tags: []
created_at: "2026-09-10T14:30:00Z"
updated_at: "2026-09-10T02:03:07Z"
---

# Portability metal honesty

## Why

Honesty demo. Portable UI already imports a thin surface and hard-errors `document`. Nested bets still unnamed: a portable Program cannot import Metal.

## Done

Tests fail if this checkout lets a portable Program import Metal. No public Metal.

## Blocked by

[[slice-75-portable-web-import]]: a thin surface and `document` hard-error exist so Metal can stay the remaining wrong-target. [[slice-75-portable-web-import]] already covers thin surface and `document` import; do not repeat those oracles. [[slice-121-dom-only-web-host]] already covers no DOM in Host I/O; do not repeat those oracles. [[slice-153-host-config-honesty]] already covers no JSI as host config; do not repeat those oracles.

## Non-goals

A public Metal. Repeating `document` import oracles. Repeating thin-surface oracles. Repeating Host I/O oracles. Repeating JSI oracles. Native `extern "C"`. Unboxed FFI. Vulkan oracles. fs or process oracles. Native hosts. Implementing a compiler.

## Oracle checklist

- [x] O1: no Metal import
  CHECK: node --test tests/portability-metal/portable-metal.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/portability-metal/portable-metal.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-158-spec-portability-metal]]
- [[task-159-red-green-portability-metal]]

## See also

- [[location-41-renderer-portability]]
- [[location-17-web-component-library]]
- [[slice-75-portable-web-import]]
- [[slice-121-dom-only-web-host]]
- [[slice-153-host-config-honesty]]
- [[rounds-156-portability-metal-honesty]]
