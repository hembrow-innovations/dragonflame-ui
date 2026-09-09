---
id: "rounds-01-chart-framework"
title: "Chart the UI framework"
kind: round
sitting_kind: wayfinder
status: awaiting-confirm
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T12:30:00Z"
---

# Chart the UI framework

Counterpart is the user in chat. Notebook is this round.

## Round 1

### Questions

1. **Working name for the framework** ([[ticket-02-working-name]]): What is the working name for this UI framework.
   - recommended: leave undecided until this sitting
2. **Language feature versus library product** ([[ticket-03-language-vs-library]]): Is this a language feature in the toolchain, or a library product. Vault purpose docs have no UI job in the toolchain.
   - recommended: leave undecided until this sitting
3. **No JS runtime on native** ([[ticket-04-no-js-runtime]]): What "no JS runtime on native" means given tracing GC for JS values (toolchain ADR-0003). Slogan versus honesty.
   - recommended: leave undecided until this sitting
4. **JSX versus hyperscript** ([[ticket-05-jsx-vs-hyperscript]]): JSX, hyperscript, or function components with no markup syntax.
   - recommended: leave undecided until this sitting
5. **Web renderer** ([[ticket-06-web-renderer]]): DOM-first like todo, or custom canvas that still emits JavaScript.
   - recommended: leave undecided until this sitting
6. **Native default** ([[ticket-07-native-default]]): OEM widgets, custom engine, or Draconic calling C through bindgen.
   - recommended: leave undecided until this sitting
7. **Layout algorithm** ([[ticket-08-layout-algorithm]]): Yoga versus Taffy versus Draconic.
   - recommended: leave undecided until this sitting
8. **Mobile packaging** ([[ticket-09-mobile-packaging]]): iOS and Android packaging, app shells, and triples. Not toolchain D04.
   - recommended: leave undecided until this sitting
9. **Threading** ([[ticket-10-threading]]): UI on the main isolate only, or shared memory later.
   - recommended: leave undecided until this sitting
10. **Public site** ([[ticket-11-public-site]]): Does the public site stay TanStack Start, or would it ever be rewritten in this framework.
    - recommended: leave undecided until this sitting
11. **Windowing and GPU** ([[ticket-12-windowing-gpu]]): Who owns windowing and GPU. Host I/O currently says not a browser. Nothing says Skia, Metal, or a Flutter embedder.
    - recommended: leave undecided until this sitting

### Answers

1. **Working name for the framework** ([[ticket-02-working-name]]): Draconflame UI. Folder stays dragons-egg.
2. **Language feature versus library product** ([[ticket-03-language-vs-library]]): library product in this repo, not a language feature.
3. **No JS runtime on native** ([[ticket-04-no-js-runtime]]): no JS engine on native; tracing GC stays.
4. **JSX versus hyperscript** ([[ticket-05-jsx-vs-hyperscript]]): hyperscript first. No JSX until a later human decision.
5. **Web renderer** ([[ticket-06-web-renderer]]): DOM only. Never a web canvas host.
6. **Native default** ([[ticket-07-native-default]]): custom Rust engine. OEM widgets are an escape hatch.
7. **Layout algorithm** ([[ticket-08-layout-algorithm]]): Taffy in the Rust engine. Web keeps CSS.
8. **Mobile packaging** ([[ticket-09-mobile-packaging]]): after desktop, thin Xcode and Gradle shells. iOS arm64 device plus simulator. Android arm64-v8a plus x86_64 emulator.
9. **Threading** ([[ticket-10-threading]]): framework on the Runtime job queue. Engine raster and IO threads allowed. No shared signals.
10. **Public site** ([[ticket-11-public-site]]): stays TanStack Start. Not a rewrite destination.
11. **Windowing and GPU** ([[ticket-12-windowing-gpu]]): embedder owns window. Engine owns GPU. No Skia. No Flutter embedder.

Later rounds append in this file as `## Round N` with the same questions/answers skeleton.

## Round 2

### Questions

1. **Git package name** ([[ticket-13-package-name]]): What is the exact git package name for the Draconflame UI library.
2. **Engine home** ([[ticket-14-engine-home]]): Does the Rust engine live in this repo or in another sibling.
3. **Crate layout** ([[ticket-15-crate-layout]]): What is the repo crate and package layout. Blocked by engine home.
4. **GPU library** ([[ticket-16-gpu-library]]): wgpu, raw Metal and Vulkan, or something else. Blocked by engine home.

### Answers

1. **Git package name** ([[ticket-13-package-name]]): draconflame-ui. Folder stays dragons-egg.
2. **Engine home** ([[ticket-14-engine-home]]): this repo. Split later only if it hurts.
3. **Crate layout** ([[ticket-15-crate-layout]]): draconflame-ui library first. No empty Rust crates. Workspace when native is funded.
4. **GPU library** ([[ticket-16-gpu-library]]): wgpu when native is funded.

## Confirm

Counterpart confirmed 2026-09-09. Stop until a planning sitting publishes slices and tasks. Do not implement from this round.

## Objectives

Flesh the idea into a shared map so a later planning sitting can publish slices and tasks. Do not implement.

## Decisions so far

- [[ticket-02-working-name|Working name for the framework]]. Working product name is Draconflame UI. Folder stays dragons-egg.
- [[ticket-03-language-vs-library|Language feature versus library product]]. Library product in this repo, not a language feature and not toolchain Roadmap work.
- [[ticket-04-no-js-runtime|No JS runtime on native]]. No Hermes, JSC, V8, or WebView. Tracing GC stays.
- [[ticket-05-jsx-vs-hyperscript|JSX versus hyperscript]]. Hyperscript first. No JSX until a later human decision.
- [[ticket-06-web-renderer|Web renderer]]. DOM only. Never a web canvas host.
- [[ticket-07-native-default|Native default]]. Custom Rust engine. OEM widgets are an escape hatch.
- [[ticket-08-layout-algorithm|Layout algorithm]]. Taffy in the Rust engine. Web keeps CSS.
- [[ticket-09-mobile-packaging|Mobile packaging]]. After desktop: thin Xcode and Gradle shells. iOS arm64 device plus simulator. Android arm64-v8a plus x86_64 emulator.
- [[ticket-10-threading|Threading]]. Framework on the Runtime job queue. Engine raster and IO threads allowed. No shared signals.
- [[ticket-11-public-site|Public site]]. Stays TanStack Start. Not a rewrite destination.
- [[ticket-12-windowing-gpu|Windowing and GPU]]. Embedder owns window. Engine owns GPU. No Skia. No Flutter embedder.
- [[ticket-13-package-name|Git package name]]. draconflame-ui. Folder stays dragons-egg.
- [[ticket-14-engine-home|Engine home]]. This repo. Split later only if it hurts.
- [[ticket-15-crate-layout|Crate layout]]. draconflame-ui library first. No empty Rust crates. Workspace when native is funded.
- [[ticket-16-gpu-library|GPU library]]. wgpu when native is funded.

## Not yet specified

None.

## Out of scope

- implementing inside `/Users/jaredhembrow/workbench/draconic` toolchain ROADMAP
- adding JSX to the draconic parser from this repo
- WASM web UI
- WebView native
- a second IR
- web canvas host, CanvasKit, Skwasm
- rewriting the public site in this framework
