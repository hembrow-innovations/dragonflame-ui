---
title: Modules are ESM
impact: CRITICAL
impactDescription: Invented module syntax never links
tags: [write, modules, packages]
---

## Modules are ESM

Draconic does not replace ESM. Write `import` and `export` as in JavaScript modules. A file with no module syntax is still a Program (Script). When the entry is a Module, the toolchain links the ESM graph and flattens it to one Program.

**Incorrect:**

```
mod foo;
use foo::greet;
```

or `require("./x")` as the module story.

**Correct:**

```
export function greet(name) {
  return "hello, " + name;
}
```

```
import { greet, VERSION } from "github.com/draconic-lang/pkg-lib";
import { h } from "./hyperscript.drac";
```

**Notes.** Named, default, and namespace imports, including cyclic live bindings, are the shipped module meaning. Packages are git-backed; imports use a Go-like module path. Manifest `draconic.toml`, lockfile `draconic.lock`. Resolve lands on ESM files inside the package. See `pkg-git-modules`, `pipe-script-module`. Sibling samples: `examples/pkg-lib/index.drac`, `examples/pkg-consumer/main.drac`.
