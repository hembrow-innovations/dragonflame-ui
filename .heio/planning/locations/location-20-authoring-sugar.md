---
id: "location-20-authoring-sugar"
title: "Authoring sugar"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:00:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Authoring sugar

## This is working when

JSX is considered only after a human decision; a general LLVM lowerer is a toolchain problem, not this repo's to fake.

## Nested locations

- **[[location-26-hyperscript|Hyperscript stays first]]**: this is working when first authoring remains `h(type, props)` until a later human decision.
  - bet: try authoring without adding JSX until a human decides; pivot if the sitting leaves markup syntax out entirely
- **[[location-57-jsx-later|JSX later]]**: this is working when JSX, if ever added, is sugar for the same hyperscript calls, erased before IR.
  - bet: try JSX only after a human decision; pivot if JSX is treated as a present language feature or added to the draconic parser from this repo
- **[[location-58-hot-reload|Hot reload]]**: this is working when hot reload via Embed or JS-debug exists later, and does not block a first version.
  - bet: try a first version without hot reload; pivot if hot reload becomes a first-version gate
- **[[location-59-llvm-lowerer|General LLVM lowerer]]**: this is working when a general LLVM lowerer, if it exists, lives in the toolchain so more of the framework can run as one native program.
  - bet: do not fake a general LLVM lowerer here; pivot if this repo starts emitting TypeScript, forking IR, or shipping Draconic bytecode on a VM

## See also

- **Intent**: [[intent]]
- **Roadmap**: [[roadmap]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Idea**: [[overview-ui-framework]]
- **Architecture**: [[architecture-layer-cake]]
- **Glossary**: [[glossary]]
