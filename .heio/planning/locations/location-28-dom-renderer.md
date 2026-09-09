---
id: "location-28-dom-renderer"
title: "DOM renderer"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# DOM renderer

## This is working when

Emitted JavaScript creates elements and patches text, attributes, and children, and that is the only web host.

## Nested locations

- **Create and patch**: this is working when emitted JavaScript creates elements and patches text, attributes, and children.
  - bet: try a DOM backend; pivot if the work tries to make DOM look like Impeller
- **Only web host**: this is working when Web DOM is the only web host.
  - bet: try DOM only; pivot if a web canvas host appears
- **Browser is embedder**: this is working when the browser is the embedder and vsync is `requestAnimationFrame`.
  - bet: try the browser as embedder; pivot if an extra VM is introduced
- **JS-only bindings**: this is working when the web path talks to the DOM through JS-only bindings.
  - bet: try JS-only DOM bindings; pivot if a DOM is put into Host I/O
- **No WASM web**: this is working when web is ordinary JavaScript in the browser, with no WebAssembly, CanvasKit, Skwasm, or engine-in-WASM.
  - bet: try JS in the browser; pivot if web is made WASM so both targets are the same VM
- **Paint on web**: this is working when web raster is browser paint.
  - bet: try browser paint; pivot if web paint is a GPU submit in WASM

## See also

- **Parent**: [[location-17-web-component-library]]
- **JS backend**: [[location-30-js-backend]]
- **Host config**: [[location-35-host-config]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Architecture**: [[architecture-layer-cake]]
- **Idea**: [[overview-ui-framework]]
