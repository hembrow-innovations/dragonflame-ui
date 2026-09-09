---
id: "native-if-funded"
title: "Native if funded"
kind: sprint
status: shaping
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Native if funded

## Grouping

Location: [[location-18-native-engine-desktop]]. Phase 2 demos. Blocked as a folder by [[ticket-61-native-ui-unfunded]]. Do not freeze. Do not publish tasks.

## Slices in

- [[slice-76-desktop-vsync-window]]: desktop window and vsync. blocked_by: [[slice-69-importable-package]] and [[ticket-61-native-ui-unfunded]]
- [[slice-77-draw-a-rect]]: Taffy plus FFI plus a rect. blocked_by: [[slice-76-desktop-vsync-window]]
- [[slice-78-press-wins-arena]]: gesture arena. blocked_by: [[slice-77-draw-a-rect]]
- [[slice-79-oem-hatch-slot]]: OEM slot, canvas stays default. blocked_by: [[slice-77-draw-a-rect]]

## Slices out

- iOS, Android, store packaging, JSX: later sprints
- shared web work: already owned by web-tracers
