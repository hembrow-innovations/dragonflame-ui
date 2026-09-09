---
id: "location-30-js-backend"
title: "JS backend and browser APIs"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# JS backend and browser APIs

## This is working when

The first-version package runs on the JS backend plus browser APIs.

## Nested locations

- **JS backend**: this is working when web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript.
  - bet: try the existing JS backend; pivot if this repo emits TypeScript or forks IR
- **Browser APIs**: this is working when that package uses browser APIs. The source does not name the API set.
  - bet: try proving the library on JS first; pivot if the JS-backend experiment cannot host the component model
- **Compile-time split**: this is working when platform is a compile-time split, not a runtime JS bundle with dead native stubs.
  - bet: try compile-time split; pivot if a JS bundle carries native stubs
- **Not RN-but-bytecode**: this is working when the path is not a JS thread, a shadow thread, a UI thread, a Draconic interpreter, and a bridge.
  - bet: try same components, two hosts; pivot if IR is treated as bytecode or the Runtime as a VM
- **No eval**: this is working when `eval` is not embedded as a mini-Hermes and screens are not eval'd from strings.
  - bet: try no eval host; pivot if eval screens ship
- **Phase 0 assumed**: this is working when JS emit into a browser is already true in the sibling toolchain, with no JSX and no WASM web target.
  - bet: try not rebuilding emit here; pivot if Phase 0 work is copied into this repo

## See also

- **Parent**: [[location-17-web-component-library]]
- **DOM renderer**: [[location-28-dom-renderer]]
- **Architecture**: [[architecture-layer-cake]]
- **Idea**: [[overview-ui-framework]]
