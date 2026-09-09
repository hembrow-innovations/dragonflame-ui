---
id: "location-59-llvm-lowerer"
title: "General LLVM lowerer"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# General LLVM lowerer

## This is working when

A general LLVM lowerer, if it exists, lives in the toolchain so more of the framework can run as one native program.

## Nested locations

- **Toolchain problem**: this is working when this repo does not fake a general LLVM lowerer.
  - bet: do not fake a general LLVM lowerer here; pivot if this checkout starts backend work
- **One native program**: this is working when more of the framework can run as one native program, if the toolchain lowerer exists.
  - bet: try that later in the toolchain; pivot if this repo ships Draconic bytecode on a VM
- **Native emit assumed**: this is working when native emit stays LLVM plus linked C, IR is not bytecode, and Runtime is not a VM.
  - bet: try assumed toolchain backends; pivot if this repo emits TypeScript or forks IR
- **Optional Phase 4**: this is working when the lowerer stays optional Phase 4.
  - bet: try optional later; pivot if Phase 1 waits on a general lowerer

## See also

- **Parent**: [[location-20-authoring-sugar]]
- **Idea**: [[overview-ui-framework]]
- **Architecture**: [[architecture-layer-cake]]
- **Intent**: [[intent]]
