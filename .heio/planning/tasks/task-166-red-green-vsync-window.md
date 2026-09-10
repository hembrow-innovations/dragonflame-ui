---
id: "task-166-red-green-vsync-window"
title: "Red-green: vsync window"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-162-red-green-crate-workspace-funded"
  - "task-164-hitl-name-desktop-window"
  - "task-165-red-green-no-js-engine"
sprint: "native-if-funded"
slice: "slice-76-desktop-vsync-window"
tags: []
created_at: "2026-09-11T12:00:00Z"
updated_at: "2026-09-11T12:00:00Z"
---

# Red-green: vsync window

## Blocked by

[[task-162-red-green-crate-workspace-funded]]: workspace may exist. [[task-164-hitl-name-desktop-window]]: OS and window crate named. [[task-165-red-green-no-js-engine]]: honesty first.

## Done

A desktop window opens with a GPU surface and one vsync from the embedder. wgpu. Engine lives in this repo. Workspace exists because native is funded.

## Context

TDD: write the O1 tests named in the desktop vsync spec. Red, then implement using only the HITL-named OS and window crate plus wgpu. Embedder owns window and vsync. Engine owns GPU.

Do not add Taffy or a rect. Do not add Skia. Do not add a Flutter embedder. Do not add WebView or a JS engine. Do not invent later FFI commands. Empty engine crates as a warmup are a non-goal; crates that open the vsync window are not empty.

## Verify

O1 command named in the desktop vsync spec test.md passes.

scope: tests/ named by that spec, plus engine and embedder crates this task must add

## Links

- [[slice-76-desktop-vsync-window]]
- [[task-164-hitl-name-desktop-window]]
