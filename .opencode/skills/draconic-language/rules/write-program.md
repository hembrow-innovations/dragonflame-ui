---
title: A Program is .drac ECMAScript
impact: CRITICAL
impactDescription: Wrong file kind or invented syntax never reaches the Checker
tags: [write, program, syntax]
---

## A Program is .drac ECMAScript

A Program is Draconic source the toolchain accepts (file or string). Save it as `.drac`. The language is a full ECMAScript superset: expressions, statements, functions, objects, classes, arrays, strings, modules, async, generators, `eval`, `with`, shipped Annex B. Types and native types are extras, not a new grammar.

**Incorrect:** `hello.ts`, `hello.js` as the source of truth, JSX, or a Rust-like language with `fn` / `match`.

**Correct:**

```
let console = globalThis.console;
console.log("hello from Draconic");
```

**Notes.** Free `console` is unresolved; bind `globalThis.console` (same for `document`, `localStorage`). `try`/`catch`/`throw` are catchable JS-value exceptions, not process abort. Shebang `#!/usr/bin/env draconic` is `run`. Script vs Module is parse-driven: `import`/`export` makes a Module. Sibling examples: `~/workbench/draconic/examples/fizzbuzz/main.drac`, `~/workbench/draconic/examples/todo/src/todo.drac`. See `write-types`, `write-modules`, `write-here`.
