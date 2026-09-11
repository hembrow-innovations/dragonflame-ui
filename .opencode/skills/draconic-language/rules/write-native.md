---
title: Native types are unboxed on purpose
impact: CRITICAL
impactDescription: Reaching for i32 by habit makes a Program native-shaped without need
tags: [write, native, dual]
---

## Native types are unboxed on purpose

Stay on JS values for portable Programs. Reach for a native type when you want unboxed systems data off the GC heap: `i8`–`i64`, `u8`–`u64`, `f32`/`f64`, native `bool`, fixed structs, fixed arrays. Pointers (`*T`, `&x`, `*p`, `*p = v`) are native-only: valid on LLVM, hard-error on js.

**Incorrect:**

```
let n: number = 1;
let x: i32 = n;
```

or using `*i32` on the js target.

**Correct:**

```
let anI32: i32 = 3;
type Point = { x: i32; y: i32 };
let aStruct: Point = { x: 10, y: 20 };
type Vec3 = [i32, i32, i32];
let aFixedArray: Vec3 = [1, 2, 3];
let n: number = 1;
let x: i32 = n as i32;
```

**Notes.** Numeric literals may contextually type as native scalars. Distinct native widths are not interchangeable; hop through `number` (`(a as number) as i64`). On js, portable native scalars/structs/arrays emit as ordinary JS values. See `dual-as-boundary`, `dual-no-silent-widen`, `dual-native-unboxed`. Sibling samples: `~/workbench/draconic/examples/types/types.drac`, `~/workbench/draconic/examples/types/types-native.drac`.
