---
id: "contract-desktop-embedder"
title: "Desktop embedder contract"
kind: contract
description: "Durable, plain-language promises for the desktop vsync window. Locked promises carry a test pointer."
status: active
domain: ui-framework
area: desktop-embedder
tags: [contract]
created_at: "2026-09-11"
updated_at: "2026-09-11"
---

# Desktop embedder contract

Purpose: [[purpose]]. Tests: [[test]]. A promise with a `test:` pointer is locked. One without is asserted.

## Behaviour

- `desktop-embedder.window:embedder-owns`: The embedder owns the window. First desktop OS is macOS. Window crate is winit.
  test: a desktop window opens with a GPU surface and one vsync from the embedder
- `desktop-embedder.vsync:embedder-supplies`: The embedder supplies one vsync. The engine is a vsync client and one vsync comes from the embedder.
  test: a desktop window opens with a GPU surface and one vsync from the embedder
- `desktop-embedder.gpu:engine-owns`: The engine owns the GPU surface. wgpu is used because native is funded.
  test: a desktop window opens with a GPU surface and one vsync from the embedder
- `desktop-embedder.engine:this-repo`: The Rust engine lives in this checkout. A split happens only if it hurts. The engine is not filed as draconic toolchain ROADMAP work.
  test: a desktop window opens with a GPU surface and one vsync from the embedder
- `desktop-embedder.host:forbid-webview`: Desktop native is not WKWebView, Chromium Embedded, Tauri-webview, or a WebView shell.
  test: desktop native is not a WebView shell
- `desktop-embedder.host:forbid-js-engine`: Desktop native has no Hermes, JSC, JavaScriptCore, or V8. Tracing GC stays.
  test: desktop native has no Hermes, JSC, or V8
- `desktop-embedder.engine:forbid-skia`: There is no Skia requirement and no Flutter Engine as a product dependency.
- `desktop-embedder.layers:uncollapsed`: Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs.
