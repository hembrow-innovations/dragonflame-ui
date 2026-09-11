---
name: draconic-language
description: Draconic Programs and toolchain. Use when writing .drac source, type annotations, Dual worlds, native types, ESM modules, host I/O, or compiling with draconic. Use when implementing Frontend, IR, backends, Runtime, Checker, Conformance, CLI, or language semantics.
---

# Draconic language

Write Programs in `.drac`. Toolchain work is a second branch. Detail lives in `rules/<id>.md`.

## Write a Program

1. Save source as `.drac`. Write ECMAScript you already know. Bind browser names from `globalThis`.
   Done when the file is `.drac` and is valid JS plus optional types.
2. Stay portable: JS values unless the task needs unboxed native types or native-only pointers or listen.
   Done when every native type and host API is intentional.
3. Annotate where mismatches should fail. Cross Dual worlds only with `expr as T`. Native widths hop through `number`.
   Done when there is no silent `number` to `i32` and no `i32 as i64`.
4. Libraries use ESM `export` / `import`. Host APIs are free globals, not imports.
   Done when package imports use Go-like paths and host calls are bare names.
5. Prove with the sibling CLI (`~/workbench/draconic`): `draconic check FILE` then `draconic build --target js FILE -o OUT`. This product's default target is js.
   Done when check is clean and the intended target emits.

If a construct cannot compile, file a GitHub issue on the draconic repo and stop. Do not implement the Compiler here.

Trees in this product are `h(type, props)`. JSX is not a language feature.

## Toolchain branch

1. Frontend first. Callers compile through `compile_path` / `check_path` / `compile_source`.
2. Language terms from sibling `~/workbench/draconic/CONTEXT.md`. UI terms from `docs/overview/glossary.md`.
3. Locked language decisions in sibling `docs/adr/`. Do not add Roadmap rows there from this repo.
4. Nested crate modules. File target ≤1000 LOC; hard 1250 for new files.

## Stack

- **Language.** Full ECMAScript superset. TypeScript-inspired Checker, not tsc. Dual worlds at `as`.
- **Host.** Rust Compiler permanently. `draconic` CLI in the sibling checkout.
- **Frontend.** Parse or link, then check, then lower to one IR.
- **Backends.** JS emit and LLVM emit both consume that IR.
- **Runtime.** Tracing GC for JS values. Native types stay unboxed.

### Prefer

- **write-*** `.drac`, portable JS values, Checker annotations, sibling prove
- **dual-*** `as` boundary, unboxed native, host globals
- **tool-**, **size-**, **arch-** only when changing crates
- **pipe-*** Frontend entries, Script vs Module, linker
- **diag-*** hard-error, stable codes, real spans
- **ir-***, **js-***, **llvm-*** shared IR, N04 polyfill, adapter dispatch
- **test-*** Conformance fixtures, workspace oracle

### Apply carefully

- **write-native** pointers (`*T`, `&x`) are native-only
- **write-host** listen/server is native first; JS hard-errors until a bridge exists
- **rt-eval-budgets** Embed is a subset; grow it with fixtures
- **pipe-check-target** `check` is target-neutral; emit still rejects
- **lsp-analysis-only** hover and goto, not a new language server
- **diagnose** for hard bugs. Build a tight red loop first

### Do not introduce

- JSX, or adding JSX to the draconic parser from this repo
- Implementing the Compiler in this checkout
- Self-hosting the Compiler in Draconic
- tsc compatibility, TypeScript emit, or npm-registry packages
- A second IR or a typed-AST fork per backend
- Silent Dual-world assignability or `i32 as i64`
- Host APIs as ESM imports
- Free `console` without binding `globalThis.console`
- Deno deny-by-default permissions
- Silent subsetting or invented Roadmap work when the board has no `todo`

## When to apply

Writing or editing `.drac`; Dual worlds, native types, Checker, modules, host I/O; sibling `draconic` CLI; changing a crate on the compile path.

Load and stop: **tdd**, **gauntlet-loop**, **diagnose**, **docs** / **domain-modeling**, **codebase-design**. **draconic-loop** is toolchain-repo only.

## Rule categories by priority

- **1 CRITICAL** Write (`write-`)
- **2 CRITICAL** Dual worlds (`dual-`)
- **3 CRITICAL** Tooling + layout (`tool-`, `size-`, `arch-`) when changing crates
- **4 CRITICAL** Frontend (`pipe-`)
- **5 CRITICAL** Hard-error (`diag-`, `js-n04-polyfill`, `llvm-no-hello-stub`)
- **6 HIGH** IR + backends (`ir-`, `js-`, `llvm-`)
- **7 HIGH** Runtime (`rt-`)
- **8 HIGH** Conformance (`test-`)
- **9 MEDIUM** CLI, host, packages (`cli-`, `host-`, `pkg-`)
- **10 MEDIUM** Product + vocab (`prod-`, `vocab-`, `lsp-`)

## Quick reference

### 1. Write (CRITICAL)

- `write-program` - `.drac`, ECMAScript you know, bind `globalThis`
- `write-types` - Checker annotations; untyped stays permissive
- `write-native` - unboxed integers/floats/bool/structs; pointers native-only
- `write-modules` - ESM `import`/`export`; git module paths
- `write-host` - free globals; `console` from `globalThis`
- `write-prove` - sibling `check` then `build --target js|native`
- `write-here` - this product: no JSX, no Compiler, file bugs upstream

### 2. Dual worlds (CRITICAL)

- `dual-as-boundary` `dual-no-silent-widen` `dual-native-unboxed` `dual-host-globals`

### 3. Tooling + layout (CRITICAL)

- `tool-cargo-rust` `size-file-budget` `size-target-dir` `arch-crate-seams` `arch-deep-modules`

### 4. Frontend (CRITICAL)

- `pipe-compile-path` `pipe-script-module` `pipe-linker-not-parser` `pipe-embed-source` `pipe-check-target`

### 5. Hard-error (CRITICAL)

- `diag-hard-error` `diag-codes` `diag-spans` `js-n04-polyfill` `llvm-no-hello-stub`

### 6-8. IR, Runtime, Conformance (HIGH)

- `ir-shared` `ir-after-link` `ir-as-erased` `llvm-adapter-dispatch` `js-emit-javascript` `js-polyfill-runtime`
- `rt-catchable-vs-abort` `rt-eval-budgets` `rt-gc-js-values`
- `test-conformance-fixtures` `test-native-observations` `test-meta-sidecar` `test-workspace-oracle` `test-test262-staged`

### 9-10. CLI, host, product (MEDIUM)

- `cli-run-default-js` `cli-build-requires-target` `cli-scratch-out-name`
- `host-permissive-default` `host-sockets-first` `pkg-git-modules`
- `prod-not-tsc` `prod-full-ecma` `prod-rust-host` `vocab-context` `lsp-analysis-only`

## How to use

```text
rules/write-program.md
rules/write-types.md
rules/dual-as-boundary.md
rules/write-prove.md
```

Writing a Program: read `write-*` plus the `dual-*` rules you need. Changing the Compiler: pick toolchain rule ids. `Read` only those `rules/<id>.md` files. Do not bulk-read `rules/` or load all of `AGENTS.md` unless asked or stuck.

Each rule: why → incorrect → correct → notes.

Language truth: sibling `~/workbench/draconic` (`CONTEXT.md`, `website/learn.md`, `docs/specs/draconic/language/`). Copy-ready Programs: `~/workbench/draconic/examples/**/*.drac`.
