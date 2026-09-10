---
id: "web-hygiene"
title: "Web hygiene"
kind: sprint
status: active
tags: []
created_at: "2026-09-10T20:14:00Z"
updated_at: "2026-09-10T21:55:34Z"
---

# Web hygiene

## Grouping

Location: [[location-29-tests]]. Tracker honesty after `web-tracers` closed. Freeze oracle CHECK alignment for archived web-tracers slices. Do not reopen `web-tracers`.

## Slices in

- [[slice-175-counter-check-paths]]: slice-70 CHECK paths match the counter spec. blocked_by: [[slice-70-counter-on-dom]]
- [[slice-185-unmount-check-path]]: slice-71 CHECK path matches the owner spec. blocked_by: [[slice-71-unmount-disposes]]
- [[slice-190-leaf-kit-check-paths]]: slice-72 CHECK paths match the leaf-kit spec. blocked_by: [[slice-72-leaf-kit-on-dom]]
- [[slice-194-testid-check-path]]: slice-73 CHECK path matches the a11y-test-ids spec. blocked_by: [[slice-73-testid-pressable]]
- [[slice-199-raf-check-path]]: slice-74 CHECK path matches the animation-clocks spec. blocked_by: [[slice-74-raf-clock]]
- [[slice-203-portable-check-paths]]: slice-75 CHECK paths match the renderer-portability spec. blocked_by: [[slice-75-portable-web-import]]
- [[slice-207-absence-check-paths]]: slice-85 CHECK paths match the absence spec. blocked_by: [[slice-85-first-version-without-sugar]]
- [[slice-210-composite-check-paths]]: slice-107 CHECK paths match the composite spec. blocked_by: [[slice-107-composite-on-dom]]
- [[slice-213-js-backend-check-paths]]: slice-112 CHECK paths match the js-backend spec. blocked_by: [[slice-112-js-backend-honesty]]
- [[slice-217-dom-patch-check-paths]]: slice-116 CHECK paths match the dom-patch spec. blocked_by: [[slice-116-patch-attrs-children]]

## Slices out

- native window, mobile hosts, JSX: different gates
- new counter behaviour: already owned by [[slice-70-counter-on-dom]]
