---
title: TypeScript-inspired, not tsc
impact: MEDIUM
impactDescription: tsc compatibility blocks Native types and Dual worlds
tags: [product, types, tsc]
---

## TypeScript-inspired, not tsc

The Checker looks like TypeScript. It does not compile existing TypeScript projects or match tsc flag-for-flag. Untyped JS stays permissive.

**Incorrect:** emitting `.ts`, implementing `strictNullChecks` as a CLI flag, or claiming drop-in TS migration.

**Correct:** write `.drac` with Checker annotations. Native types are first-class, not type-erasure leftovers.

**Notes.** See `write-types` and `dual-as-boundary`.
