---
name: draconic-language
description: Draconic Programs. Use when writing or editing .drac source, type annotations, Dual worlds, native types, ESM modules, host I/O, or proving with the draconic CLI.
---

# Draconic language

Write Programs in `.drac`. Detail lives in `rules/<id>.md`. Prove with PATH `draconic` (the installed stable CLI). Sibling `~/workbench/draconic` is language docs and in-development compiler source, not the prove tool.

## Write a Program

1. Save source as `.drac`. Write ECMAScript you already know. Bind browser names from `globalThis`.
   Done when the file is `.drac` and is valid JS plus optional types.
2. Stay portable: JS values unless the task needs unboxed native types or native-only pointers or listen.
   Done when every native type and host API is intentional.
3. Annotate where mismatches should fail. Cross Dual worlds only with `expr as T`. Native widths hop through `number`.
   Done when there is no silent `number` to `i32` and no `i32 as i64`.
4. Libraries use ESM `export` / `import`. Host APIs are free globals, not imports.
   Done when package imports use Go-like paths and host calls are bare names.
5. Prove with PATH `draconic`: `which draconic`, then `draconic check FILE`, then `draconic build --target js FILE -o OUT`. This product's default target is js.
   Done when check is clean and the intended target emits.

If `draconic` is missing from PATH, stop. Do not `cargo run` the sibling checkout. If a construct cannot compile, file a GitHub issue on the draconic repo and stop. Do not implement the Compiler here.

Trees in this product are `h(type, props)`. JSX is not a language feature.

## Stack

- **Language.** Full ECMAScript superset. TypeScript-inspired Checker, not tsc. Dual worlds at `as`.
- **Prove.** Installed `draconic` on PATH. Default emit is js.
- **Docs.** Sibling `~/workbench/draconic` (`CONTEXT.md`, `website/learn.md`, `docs/specs/draconic/language/`, `examples/**/*.drac`). Read-only from this product.

### Prefer

- **write-*** `.drac`, portable JS values, Checker annotations, PATH prove
- **dual-*** `as` boundary, unboxed native, host globals

### Apply carefully

- **write-native** pointers (`*T`, `&x`) are native-only
- **write-host** listen/server is native first; JS hard-errors until a bridge exists
- **cli-*** `check` is target-neutral; `build --target js` can still hard-error

### Do not introduce

- JSX, or adding JSX to the draconic parser from this repo
- Implementing the Compiler in this checkout
- `cargo run` or `cargo build -p draconic-cli` from `~/workbench/draconic`
- Host APIs as ESM imports
- Free `console` without binding `globalThis.console`
- Silent Dual-world assignability or `i32 as i64`

## When to apply

Writing or editing `.drac`; Dual worlds, native types, Checker, modules, host I/O; proving with PATH `draconic`.

Load **tdd**, **gauntlet-loop**, or **diagnose** for workflow. **docs** / **domain-modeling** for the UI glossary. Language docs stay in the sibling checkout.

## Rule categories by priority

- **1 CRITICAL** Write (`write-`)
- **2 CRITICAL** Dual worlds (`dual-`)
- **3 MEDIUM** CLI prove (`cli-`)
- **4 MEDIUM** Host, packages, product (`host-`, `pkg-`, `prod-`, `vocab-`)

## Quick reference

### 1. Write (CRITICAL)

- `write-program` - `.drac`, ECMAScript you know, bind `globalThis`
- `write-types` - Checker annotations; untyped stays permissive
- `write-native` - unboxed integers/floats/bool/structs; pointers native-only
- `write-modules` - ESM `import`/`export`; git module paths
- `write-host` - free globals; `console` from `globalThis`
- `write-prove` - PATH `check` then `build --target js|native`
- `write-here` - this product: no JSX, no Compiler, file bugs upstream

### 2. Dual worlds (CRITICAL)

- `dual-as-boundary` `dual-no-silent-widen` `dual-native-unboxed` `dual-host-globals`

### 3. CLI prove (MEDIUM)

- `cli-run-default-js` `cli-build-requires-target` `cli-scratch-out-name`

### 4. Host, packages, product (MEDIUM)

- `host-permissive-default` `host-sockets-first` `pkg-git-modules`
- `prod-not-tsc` `vocab-context`

## How to use

```text
rules/write-program.md
rules/write-types.md
rules/dual-as-boundary.md
rules/write-prove.md
```

Read `write-*` plus the `dual-*` rules you need. `Read` only those `rules/<id>.md` files. Do not bulk-read `rules/` or load all of `AGENTS.md` unless asked or stuck.

Each rule: why → incorrect → correct → notes.

Language docs: sibling `~/workbench/draconic`. Copy-ready Programs: `~/workbench/draconic/examples/**/*.drac`.
