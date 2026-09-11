---
id: "native-if-funded"
title: "Native if funded"
kind: sprint
status: active
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T06:49:29Z"
---

# Native if funded

## Grouping

Location: [[location-18-native-engine-desktop]]. Phase 2 demos. Native UI funded in [[rounds-160-fund-native]]. Freeze desktop vsync, draw a rect, and press. Press APIs named on [[rounds-251-name-gesture-apis]]. Do not freeze OEM until those APIs are named.

## Slices in

- [[slice-76-desktop-vsync-window]]: desktop window and vsync. blocked_by: [[slice-69-importable-package]]
- [[slice-77-draw-a-rect]]: Taffy plus one scene submit plus a rect. blocked_by: [[slice-76-desktop-vsync-window]]
- [[slice-78-press-wins-arena]]: gesture arena. blocked_by: [[slice-77-draw-a-rect]]
- [[slice-79-oem-hatch-slot]]: OEM slot, canvas stays default. blocked_by: [[slice-77-draw-a-rect]]. shaping

## Slices out

- iOS, Android, store packaging, JSX: later sprints
- shared web work: already owned by web-tracers
