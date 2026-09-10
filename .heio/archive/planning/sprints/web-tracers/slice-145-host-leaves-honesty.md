---
id: "slice-145-host-leaves-honesty"
title: "Host leaves honesty"
kind: slice
status: met
sprint: "web-tracers"
blocked_by:
  - "slice-72-leaf-kit-on-dom"
tags: []
created_at: "2026-09-10T12:15:00Z"
updated_at: "2026-09-10T21:45:00Z"
---

# Host leaves honesty

## Why

Honesty demo. The six host leaves already mount. Nested bets still unnamed: not HTML, and not every UIKit class as the leaf set.

## Done

Tests fail if this checkout adds HTML leaves, or treats every UIKit class as the leaf set. No public registerLeaf.

## Blocked by

[[slice-72-leaf-kit-on-dom]]: the six leaves exist so the set can stay closed and not become HTML or every UIKit class. [[slice-72-leaf-kit-on-dom]] already covers view, text, image, scroll, text input, and pressable; do not repeat those oracles. [[slice-107-composite-on-dom]] already covers composites over the closed set; do not repeat those oracles.

## Non-goals

A public registerLeaf. String host tags. Repeating six-leaf oracles. Repeating composite oracles. Host-config compile-time split. New Architecture steal. Native OEM widgets. Native text metrics. Native hosts. Implementing a compiler.

## Oracle checklist

- [x] O1: no HTML leaves
  CHECK: node --test tests/host-leaves/no-html-leaves.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/host-leaves/no-html-leaves.test.mjs; 1 pass 0 fail
- [x] O2: no UIKit as leaf set
  CHECK: node --test tests/host-leaves/no-uikit-leaves.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/host-leaves/no-uikit-leaves.test.mjs; 1 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-146-spec-host-leaves]]
- [[task-147-red-green-host-leaves]]

## See also

- [[location-32-host-leaves]]
- [[location-17-web-component-library]]
- [[slice-72-leaf-kit-on-dom]]
- [[slice-107-composite-on-dom]]
- [[rounds-144-host-leaves-honesty]]
