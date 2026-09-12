---
id: "task-391-red-green-input-plumbing"
title: "Red-green Input plumbing"
kind: task
status: ready
mode: afk
blocked_by:
  - "task-390-assert-embedder-owns-input-promise"
sprint: "mobile-after-desktop"
slice: "slice-389-input"
tags: []
created_at: "2026-09-12T09:00:39Z"
updated_at: "2026-09-12T09:00:39Z"
---

# Red-green Input plumbing

## Blocked by

[[task-390-assert-embedder-owns-input-promise]]: embedder-owns input promise first.

## Done

`node --test tests/desktop-embedder/input-plumbing.test.mjs` passes.

## Context

Current: [[purpose-desktop-embedder]] names Input in scope and parks the four jobs as Out of scope for vsync-window oracles. Vsync-window and no-WebView no-JS-engine oracles exist. No ownership oracle that the embedder owns input, IME, clipboard, and accessibility plumbing.

Desired: the test proves the embedder Host in `crates/embedder` owns those four jobs as private adapters, that `open_vsync_window` remains the only public host surface, that winit and OS types are not exported, and that arena winner and SemanticsNode stay on the Framework side. No `docs/specs/ui-framework/input/` area.

Do not restage vsync-window or no-WebView no-JS-engine. Those live on [[purpose-desktop-embedder]] and [[slice-76-desktop-vsync-window]]. Do not restage gesture-arena pointer packets. Do not restage SemanticsNode dump. That lives on [[slice-83-talk-and-measure]]. Do not invent a public Input. Do not let a WebView shell own input.

## Verify

CHECK: node --test tests/desktop-embedder/input-plumbing.test.mjs
EXPECT: pass

scope: tests/desktop-embedder/ crates/embedder/ docs/specs/ui-framework/desktop-embedder/

## Links

- [[slice-389-input]]
- [[task-390-assert-embedder-owns-input-promise]]
- [[rounds-388-freeze-input]]
