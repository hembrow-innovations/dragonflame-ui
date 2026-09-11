---
title: This product writes Draconic, not the Compiler
impact: CRITICAL
impactDescription: Compiler work or JSX in this checkout breaks the product split
tags: [write, product, jsx]
---

## This product writes Draconic, not the Compiler

This checkout is dragonflame-ui. Author framework code in `.drac`. Compile with PATH `draconic`. Do not implement the Compiler here. Do not add Roadmap rows to `~/workbench/draconic`.

**Incorrect:** adding JSX to the draconic parser from this repo, copying compiler crates here, or inventing a second IR / UI bytecode.

**Correct:**

```
export function view(h, type, props) {
  return h(type, props);
}
```

**Notes.** JSX is not a present Draconic language feature. If it appears later, it is sugar for the same `h(type, props)` calls, after a human decision. Language bugs: GitHub issue on the draconic repo, then stop. Learn/Reference and language contracts live under the sibling: `~/workbench/draconic/website/learn.md`, `~/workbench/draconic/website/from-javascript.md`, `~/workbench/draconic/docs/specs/draconic/language/`. See `write-program`, `write-prove`, `prod-not-tsc`.
