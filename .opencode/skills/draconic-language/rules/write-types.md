---
title: Checker annotations, not tsc
impact: CRITICAL
impactDescription: tsc habits and erased mismatches ship wrong Programs
tags: [write, types, checker]
---

## Checker annotations, not tsc

The Checker is TypeScript-inspired. It accepts annotations on bindings, parameters, and function/arrow returns. `type` aliases, structural object shapes, unions, intersections, `typeof` narrowing, and generics are in. Untyped JavaScript stays permissive. A mismatch is a diagnostic, not erase-and-succeed. The Checker is not tsc and does not compile existing TypeScript projects.

**Incorrect:**

```
let n: number = "x";
```

or expecting `strictNullChecks` as a CLI flag.

**Correct:**

```
let aNumber: number = 1;
let anObject: { x: number } = { x: 1 };
type Todo = { id: number; text: string; done: boolean };
function remainingCount(): number {
  return 0;
}
```

**Notes.** JS types include `number`, `string`, `boolean`, `bigint`, `any`, object shapes, and `function`. Native `bool` is not JS `boolean`. Fresh object literals may not carry excess properties onto an annotated shape. Unknown properties on an annotated shape error; untyped objects stay dynamic. Call-site checking applies only to annotated required parameters. See `prod-not-tsc`, `write-native`, `dual-as-boundary`. Sibling sample: `examples/types/types.drac`.
