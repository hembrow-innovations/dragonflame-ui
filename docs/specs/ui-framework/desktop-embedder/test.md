---
id: "test-desktop-embedder"
title: "Desktop embedder tests"
kind: test
description: "Which tests cover this spec folder, how, and why."
status: active
domain: ui-framework
area: desktop-embedder
tags: [test]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Desktop embedder tests

Purpose: [[purpose]]. Contract: [[contract]].

## Coverage

Tests for this folder. They will lock `desktop-embedder.window:embedder-owns`, `desktop-embedder.vsync:embedder-supplies`, `desktop-embedder.gpu:engine-owns`, `desktop-embedder.engine:this-repo`, `desktop-embedder.host:forbid-webview`, and `desktop-embedder.host:forbid-js-engine`. Oracle commands:

- node --test tests/desktop-embedder/vsync-window.test.mjs
- node --test tests/desktop-embedder/no-webview-no-js-engine.test.mjs

## Tests

- **tests/desktop-embedder/vsync-window.test.mjs**: `a desktop window opens with a GPU surface and one vsync from the embedder`
  - **How:** fails unless a macOS desktop window opens via winit with a GPU surface and one vsync from the embedder, the engine owns that GPU surface with wgpu, and the engine lives in this repo
  - **Why:** promises `desktop-embedder.window:embedder-owns`, `desktop-embedder.vsync:embedder-supplies`, `desktop-embedder.gpu:engine-owns`, and `desktop-embedder.engine:this-repo`
- **tests/desktop-embedder/no-webview-no-js-engine.test.mjs**: `desktop native is not a WebView shell`
  - **How:** fails if this checkout uses WKWebView, Chromium Embedded, Tauri-webview, or a WebView shell as native
  - **Why:** promise `desktop-embedder.host:forbid-webview`
- **tests/desktop-embedder/no-webview-no-js-engine.test.mjs**: `desktop native has no Hermes, JSC, or V8`
  - **How:** fails if this checkout uses Hermes, JSC, JavaScriptCore, or V8 as the native app runtime. Tracing GC stays
  - **Why:** promise `desktop-embedder.host:forbid-js-engine`

## Gaps

- No test yet for `desktop-embedder.engine:forbid-skia` or `desktop-embedder.layers:uncollapsed`.
- Input, IME, clipboard, and accessibility plumbing stay unimplemented.
- Taffy rect FFI is unnamed here.
- Workspace oracles stay on [[test-crate-workspace]].
- Library-first and no-empty-crate oracles stay on [[test-git-package]].
- Web rAF clock oracles stay on [[test-animation-clocks]].
