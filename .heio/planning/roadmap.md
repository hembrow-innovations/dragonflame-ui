---
id: "roadmap"
title: "Roadmap"
kind: roadmap
status: draft
tags: []
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Roadmap

Locations. Destinations, not a schedule. Bets from the wayfinder round and overview phasing. Nothing is done. The four destinations below each have a parent location. Child locations 21 through 60 hold the next grain. Nested bullets inside those files hold the grain after that.

Phase 0 is already true in the sibling toolchain: JS emit into a browser, with no JSX and no WASM web target. It is not a destination here.

## Locations

- **[[location-17-web-component-library|Web component library]]**: this is working when the dragonflame-ui git package of components, signals, hyperscript, a DOM renderer, and tests runs on the JS backend.
  - bet: try proving the library on JS first; pivot if a later sitting decides this is not a library product, or if the JS-backend experiment cannot host the component model
- **[[location-18-native-engine-desktop|Native engine and desktop embedder]]**: this is working when a Rust engine, a desktop window with GPU and vsync, and FFI scene commands exist; only if native UI is funded.
  - bet: try the Rust engine and desktop embedder only if native UI is funded; pivot if LLVM honesty never arrives for native widgets
- **[[location-19-mobile-embedders|Mobile embedders]]**: this is working when iOS and Android hosts exist with no WebView, thin Xcode and Gradle shells, iOS arm64 device plus simulator, Android arm64-v8a plus x86_64 emulator, and store packaging, after desktop honesty.
  - bet: try mobile after desktop honesty; pivot if native UI is never funded
- **[[location-20-authoring-sugar|Authoring sugar]]**: this is working when JSX is considered only after a human decision; a general LLVM lowerer is a toolchain problem, not this repo's to fake.
  - bet: try authoring without adding JSX until a human decides; pivot if the sitting leaves markup syntax out entirely, and do not fake a general LLVM lowerer here
