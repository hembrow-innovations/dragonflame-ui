---
id: "slice-76-desktop-vsync-window"
title: "Desktop vsync window"
kind: slice
status: shaping
sprint: "native-if-funded"
blocked_by:
  - "slice-69-importable-package"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Desktop vsync window

## Why

Host-window demo. Embedder owns window, vsync, input. Engine owns GPU.

## Done

A desktop window opens with a GPU surface and one vsync from the embedder. wgpu. Engine lives in this repo. Workspace exists only because native is funded. No WebView. No Hermes, JSC, or V8. Tracing GC stays. No Skia. No Flutter embedder.

## Blocked by

[[ticket-61-native-ui-unfunded]]: no freeze and no tasks until a sitting funds native UI. [[slice-69-importable-package]]: library-first, no empty crates.

## Non-goals

Taffy rect, mobile, OEM default, glyphs complete. Empty engine crates as a warmup.

## Oracle checklist

- [ ] O1: vsync window
  CHECK: command named in the desktop spec test.md after freeze
  EXPECT: pass
  EVIDENCE: pending
- [ ] O2: no WebView and no JS engine
  CHECK: command named in that spec
  EXPECT: pass
  EVIDENCE: pending

## Pool

None until freeze after [[ticket-61-native-ui-unfunded]] is promoted.

## See also

- [[location-36-engine-home]]
- [[location-37-rust-engine]]
- [[location-38-wgpu]]
- [[location-39-desktop-embedder]]
- [[location-22-crate-layout]]
- [[location-60-animation-clocks]]
