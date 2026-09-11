---
id: "slice-76-desktop-vsync-window"
title: "Desktop vsync window"
kind: slice
status: met
sprint: "native-if-funded"
blocked_by:
  - "slice-69-importable-package"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T21:30:00Z"
---

# Desktop vsync window

## Why

Host-window demo. Embedder owns window, vsync, input. Engine owns GPU.

## Done

A desktop window opens with a GPU surface and one vsync from the embedder. wgpu. Engine lives in this repo. Workspace exists only because native is funded. No WebView. No Hermes, JSC, or V8. Tracing GC stays. No Skia. No Flutter embedder.

## Blocked by

[[slice-69-importable-package]]: library-first, no empty crates. [[ticket-61-native-ui-unfunded]] promoted in [[rounds-160-fund-native]].

## Non-goals

Taffy rect, mobile, OEM default, glyphs complete. Empty engine crates as a warmup. First desktop OS is macOS. Window crate is winit, named on [[task-164-hitl-name-desktop-window]].

## Oracle checklist

- [x] O1: vsync window
  CHECK: node --test tests/desktop-embedder/vsync-window.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/desktop-embedder/vsync-window.test.mjs; 1 pass 0 fail
- [x] O2: no WebView and no JS engine
  CHECK: node --test tests/desktop-embedder/no-webview-no-js-engine.test.mjs
  EXPECT: pass
  EVIDENCE: node --test tests/desktop-embedder/no-webview-no-js-engine.test.mjs; 2 pass 0 fail

## Pool

Durable links to task ids. Never drop them.

- [[task-161-spec-crate-workspace-funded]]
- [[task-162-red-green-crate-workspace-funded]]
- [[task-163-spec-desktop-vsync]]
- [[task-164-hitl-name-desktop-window]]
- [[task-165-red-green-no-js-engine]]
- [[task-166-red-green-vsync-window]]

## See also

- [[location-36-engine-home]]
- [[location-37-rust-engine]]
- [[location-38-wgpu]]
- [[location-39-desktop-embedder]]
- [[location-22-crate-layout]]
- [[location-60-animation-clocks]]
- [[rounds-160-fund-native]]
- [[ticket-61-native-ui-unfunded]]
