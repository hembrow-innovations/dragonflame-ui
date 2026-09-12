---
id: "mobile-after-desktop"
title: "Mobile after desktop"
kind: sprint
status: active
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-12T10:24:00Z"
---

# Mobile after desktop

## Grouping

Location: [[location-19-mobile-embedders]]. Phase 3 demos after desktop honesty. Same counter, new hosts. Freeze when desktop honesty holds. [[slice-76-desktop-vsync-window]] is met.

## Slices in

- [[slice-80-ios-counter]]: counter on iOS sim. blocked_by: [[slice-76-desktop-vsync-window]] and [[slice-70-counter-on-dom]]. met
- [[slice-81-android-counter]]: counter on Android emulator. blocked_by: [[slice-76-desktop-vsync-window]] and [[slice-70-counter-on-dom]]. active
- [[slice-82-store-binaries]]: packaged binary, not OTA JS. blocked_by: [[slice-80-ios-counter]] and [[slice-81-android-counter]]. frozen
- [[slice-83-talk-and-measure]]: semantics tree plus text metrics. blocked_by: [[slice-80-ios-counter]]. frozen
- [[slice-84-platform-view-hatch]]: mobile view in the hatch slot. blocked_by: [[slice-79-oem-hatch-slot]] and [[slice-80-ios-counter]]. frozen
- [[slice-300-desktop-first]]: mobile follows desktop honesty. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-320-funding]]: mobile is pursued only if native UI is funded. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-328-phase-3-gate-unstated]]: Phase 3 work stays behind desktop honesty. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-356-not-toolchain-d04]]: these triples are this product's mobile packaging, not toolchain D04. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-360-android-not-toolchain-d04]]: these triples are this product's mobile packaging, not toolchain D04. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-364-pipeline-copy]]: a semantics tree is copied as architecture beside the render tree, with a gesture arena and vsync tickers. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-373-engine-glyphs]]: native glyphs live in the Rust engine. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-381-io-font-load]]: font load runs on the IO thread. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-385-single-ui-thread]]: heavy work is off the UI thread and platform views stay an escape hatch, not the default. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-389-input]]: the embedder owns input, IME, clipboard, and accessibility plumbing. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-393-engine-images]]: the engine owns images, with image decode on the IO thread. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-397-engine-compositing]]: the engine composites a layer tree of offset, clip, transform, picture, and platform-view. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-401-engine-vsync-client]]: the engine is a vsync client and one vsync comes from the embedder. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-405-engine-gpu-surface]]: the engine owns the GPU surface. blocked_by: [[slice-76-desktop-vsync-window]]. frozen
- [[slice-409-not-runtime]]: Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs. blocked_by: [[slice-76-desktop-vsync-window]]. frozen

## Slices out

- starting mobile before desktop, WebView shells, Expo OTA
