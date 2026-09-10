---
id: "task-165-red-green-no-js-engine"
title: "Red-green: no WebView no JS engine"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-163-spec-desktop-vsync"
sprint: "native-if-funded"
slice: "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-11T12:00:00Z"
updated_at: "2026-09-11T12:00:00Z"
---

# Red-green: no WebView no JS engine

## Blocked by

[[task-163-spec-desktop-vsync]]: spec first.

## Done

Tests fail if this checkout uses a WebView shell or Hermes, JSC, or V8 as the native app runtime. Tracing GC stays.

## Context

TDD: write the O2 tests named in the desktop vsync spec. Red if the tree already violates, otherwise implement the checks and green on the current tree.

Do not open a window. Do not add Skia. Do not add a Flutter embedder. Do not throw away tracing GC. Do not implement Taffy. Do not implement a compiler.

## Verify

O2 command named in the desktop vsync spec test.md passes.

scope: tests/ named by that spec

## Links

- [[slice-76-desktop-vsync-window]]
- [[task-163-spec-desktop-vsync]]
