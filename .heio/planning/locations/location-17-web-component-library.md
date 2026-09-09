---
id: "location-17-web-component-library"
title: "Web component library"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:00:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Web component library

## This is working when

The dragonflame-ui git package of components, signals, hyperscript, a DOM renderer, and tests runs on the JS backend.

## Nested locations

- **[[location-21-git-package|Git package]]**: this is working when the library product is the dragonflame-ui git package in this repo, matching folder and repo, not a language feature.
  - bet: try library-first in this checkout; pivot if a sitting decides this is not a library product
- **[[location-22-crate-layout|Crate layout]]**: this is working when the dragonflame-ui library exists first, with no empty Rust crates, and a workspace only when native is funded.
  - bet: try the library package first; pivot if empty engine crates appear before native is funded
- **[[location-23-components|Components]]**: this is working when a component is a function that runs once, creates signals, and returns a tree.
  - bet: try React-like to read; pivot if class components, Fiber, hooks, or a virtual DOM show up
- **[[location-24-signals|Signals]]**: this is working when UI reactivity is get/set objects that subscribe on get and notify on set, written as ui.Signal in prose.
  - bet: try signals as the build dirtying replacement only; pivot if they replace layout, hit-test, compositing, gesture arena, or semantics
- **[[location-25-owner|Owner]]**: this is working when unmount disposes effects and nested owners.
  - bet: try Owner disposal; pivot if Fiber or an Element dirty flag becomes ownership
- **[[location-26-hyperscript|Hyperscript]]**: this is working when first authoring is `h(type, props)`.
  - bet: try hyperscript first; pivot if a later sitting leaves markup out entirely; do not add JSX on this destination
- **[[location-27-render-object|Render object]]**: this is working when a retained layout, paint, and hit-test node persists across frames.
  - bet: try retained render objects; pivot if the retained node is a virtual DOM node
- **[[location-28-dom-renderer|DOM renderer]]**: this is working when emitted JavaScript creates elements and patches text, attributes, and children, and that is the only web host.
  - bet: try DOM only; pivot if a web canvas, CanvasKit, Skwasm, WASM, or extra VM appears
- **[[location-29-tests|Tests]]**: this is working when tests exist for that first-version package.
  - bet: try shipping tests with the package; pivot if a sitting names a different proof
- **[[location-30-js-backend|JS backend and browser APIs]]**: this is working when the package runs on the JS backend plus browser APIs.
  - bet: try proving the library on JS first; pivot if the JS-backend experiment cannot host the component model, or if the work becomes React Native but our bytecode
- **[[location-31-web-layout|Web layout]]**: this is working when web layout is CSS because the browser already has it.
  - bet: try CSS on web; pivot if CSS-as-native-layout becomes a requirement
- **[[location-32-host-leaves|Host leaves]]**: this is working when the small host primitive set is view, text, image, scroll, text input, and pressable.
  - bet: try that closed set; pivot if HTML or every UIKit class becomes the leaf set
- **[[location-33-style-as-data|Style as data]]**: this is working when style is StyleSheet-shaped objects.
  - bet: try style as data; pivot if it becomes a CSS engine on native
- **[[location-34-a11y-test-ids|First-class a11y and test IDs]]**: this is working when accessibility and test IDs are first-class props.
  - bet: try first-class props; pivot if they are bolted on after the host leaves
- **[[location-35-host-config|Host config]]**: this is working when only the leaf adapter knows DOM versus UIView versus engine draw lists.
  - bet: try a host config at the leaves; pivot if JSI or Hermes is stolen with New Architecture lessons
- **[[location-60-animation-clocks|Animation clocks]]**: this is working when animation clocks live in the Framework library and vsync tickers follow embedder vsync.
  - bet: try clocks in the framework; pivot if setState dirtying returns as the ticker
- **[[location-41-renderer-portability|Renderer portability API]]**: this is working when portable UI imports the thin Draconic surface, not `document`.
  - bet: try the portability API; pivot if a DOM is put into Host I/O

## See also

- **Intent**: [[intent]]
- **Roadmap**: [[roadmap]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Idea**: [[overview-ui-framework]]
- **Architecture**: [[architecture-layer-cake]]
- **Glossary**: [[glossary]]
