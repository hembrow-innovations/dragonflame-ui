---
id: "web-tracers"
title: "Web tracers"
kind: sprint
status: active
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Web tracers

## Grouping

Location: [[location-17-web-component-library]]. Thin vertical demos on the JS backend plus browser. Funded now. Not a web-library layer.

## Slices in

- [[slice-69-importable-package]]: first import and no empty crates. blocked_by: none
- [[slice-70-counter-on-dom]]: counter on DOM through components, signals, hyperscript, renderer, tests. blocked_by: [[slice-69-importable-package]]
- [[slice-71-unmount-disposes]]: Owner dispose. blocked_by: [[slice-70-counter-on-dom]]
- [[slice-72-leaf-kit-on-dom]]: closed leaf kit on CSS. blocked_by: [[slice-70-counter-on-dom]]
- [[slice-73-testid-pressable]]: test IDs and a11y props. blocked_by: [[slice-72-leaf-kit-on-dom]]
- [[slice-74-raf-clock]]: framework clocks on rAF. blocked_by: [[slice-70-counter-on-dom]]
- [[slice-75-portable-web-import]]: portability hard-error. blocked_by: [[slice-70-counter-on-dom]]
- [[slice-107-composite-on-dom]]: composite props and children on DOM. blocked_by: [[slice-72-leaf-kit-on-dom]]
- [[slice-112-js-backend-honesty]]: JS backend honesty. blocked_by: [[slice-69-importable-package]]
- [[slice-116-patch-attrs-children]]: patch attributes and children on DOM. blocked_by: [[slice-72-leaf-kit-on-dom]]

## Slices out

- native window, mobile hosts, JSX, hot reload, LLVM lowerer: different gates
