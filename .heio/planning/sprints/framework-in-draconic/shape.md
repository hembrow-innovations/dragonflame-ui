---
id: "framework-in-draconic"
title: "Framework in Draconic"
kind: sprint
status: active
tags: []
created_at: "2026-09-11T21:34:15Z"
updated_at: "2026-09-11T21:34:15Z"
---

# Framework in Draconic

## Grouping

Location: [[location-17-web-component-library]]. Intent says the Framework library is Draconic. This sitting pivots the nested JS-first bet on [[location-30-js-backend]]. Web still runs on the JS backend. Source is Draconic. Emit stays in the sibling toolchain.

## Slices in

- [[slice-283-draconic-framework-source]]: one public export authored in Draconic and compiled by the sibling JS backend. blocked_by: none

## Slices out

- migrating every remaining JS module this sitting
- implementing the compiler here
- copying JS emit from the sibling toolchain
- JSX
- mobile-after-desktop host work
