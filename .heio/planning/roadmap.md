---
id: "roadmap"
title: "Roadmap"
kind: roadmap
status: draft
tags: []
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T12:00:00Z"
---

# Roadmap

Locations. Destinations, not a schedule. Bets from the scribble phasing. Nothing is done.

## Locations

- **Web component library**: this is working when a git package of components, signals, hyperscript, a DOM renderer, and tests runs on the JS backend.
  - bet: try proving the library on JS first; pivot if a later sitting decides this is not a library product, or if the JS-backend experiment cannot host the component model
- **Web canvas host**: this is working when an optional canvas-in-JS renderer exists if paint fidelity is required, still with no WASM.
  - bet: try canvas-in-JS only if paint fidelity is required; pivot if DOM-first is enough, or if fidelity would demand CanvasKit or Skwasm
- **Native engine and desktop embedder**: this is working when a Rust engine, a desktop window with GPU and vsync, and FFI scene commands exist; only if native UI is funded.
  - bet: try the Rust engine and desktop embedder only if native UI is funded; pivot if LLVM honesty never arrives for native widgets
- **Mobile embedders**: this is working when iOS and Android hosts exist with no WebView and with store packaging, after desktop honesty.
  - bet: try mobile after desktop honesty; pivot if native UI is never funded
- **Authoring sugar**: this is working when JSX is considered only after a human decision; a general LLVM lowerer is a toolchain problem, not this repo's to fake.
  - bet: try authoring without adding JSX until a human decides; pivot if the sitting leaves markup syntax out entirely, and do not fake a general LLVM lowerer here
