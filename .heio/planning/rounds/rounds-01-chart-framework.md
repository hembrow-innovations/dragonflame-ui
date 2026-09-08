---
id: "rounds-01-chart-framework"
title: "Chart the UI framework"
kind: round
sitting_kind: wayfinder
status: awaiting-answers
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T12:00:00Z"
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

Waiting on the counterpart. None recorded.

Later rounds append in this file as `## Round N` with the same questions/answers skeleton.

## Confirm

## Objectives

Flesh the idea into a shared map so a later planning sitting can publish slices and tasks. Do not implement.

## Decisions so far

None confirmed.

## Not yet specified

- **Package name**: exact git package name is still fog
- **Crate layout**: repo crate layout is still fog
- **Engine home**: whether the engine is this repo or another sibling is still fog
- **Other fog**: anything else still foggy after the eleven tickets

## Out of scope

- implementing inside `/Users/jaredhembrow/workbench/draconic` toolchain ROADMAP
- adding JSX to the draconic parser from this repo
- WASM web UI
- WebView native
- a second IR
