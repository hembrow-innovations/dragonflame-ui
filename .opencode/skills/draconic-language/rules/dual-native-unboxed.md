---
title: Native types stay unboxed
impact: CRITICAL
impactDescription: Putting native scalars on the GC heap breaks Dual worlds
tags: [dual, native, gc]
---

## Native types stay unboxed

Native types (`i8`–`i64`, `u8`–`u64`, `f32`/`f64`, `bool`, structs, `*T`) live outside the GC heap. JS values (objects, arrays, strings, closures) are heap-managed.

**Incorrect:** treating native `bool` as a JS Boolean object, or using an `i32` as if it were a heap object.

**Correct:** native scalars stay unboxed. On js they still type as native and emit as ordinary JS numbers, objects, or arrays. Pointers stay native-only.

**Notes.** See `write-native` and `dual-as-boundary`.
