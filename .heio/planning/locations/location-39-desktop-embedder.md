---
id: "location-39-desktop-embedder"
title: "Desktop embedder"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Desktop embedder

## This is working when

A desktop host owns the window, vsync, and input, and the engine owns the GPU surface.

## Nested locations

- **Window**: this is working when the embedder owns the window.
  - bet: try embedder-owns-window; pivot if the engine owns the OS window
- **Vsync**: this is working when the embedder supplies one vsync.
  - bet: try one vsync from the embedder; pivot if the framework ticks itself
- **Input**: this is working when the embedder owns input, IME, clipboard, and accessibility plumbing.
  - bet: try embedder input; pivot if a WebView shell owns input
- **No WebView**: this is working when desktop native is not WKWebView, Chromium Embedded, Tauri-webview, or a WebView shell.
  - bet: try a real desktop embedder; pivot if WebView is called native
- **No JS engine**: this is working when desktop native has no Hermes, JavaScriptCore, or V8. Tracing GC stays.
  - bet: try no JS engine; pivot if GC is thrown away to satisfy a slogan
- **Phase 2 gate**: this is working when this destination is pursued only if native UI is funded.
  - bet: try only if funded; pivot if desktop work starts unfunded as empty crates

## See also

- **Parent**: [[location-18-native-engine-desktop]]
- **Rust engine**: [[location-37-rust-engine]]
- **Mobile parent**: [[location-19-mobile-embedders]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Glossary**: [[glossary]]
- **Architecture**: [[architecture-layer-cake]]
