---
id: "web-hygiene"
title: "Web hygiene"
kind: sprint
status: active
tags: []
created_at: "2026-09-10T20:14:00Z"
updated_at: "2026-09-10T20:14:00Z"
---

# Web hygiene

## Grouping

Location: [[location-29-tests]]. Tracker honesty after `web-tracers` closed. Freeze oracle CHECK alignment for the counter spec. Do not reopen `web-tracers`.

## Slices in

- [[slice-175-counter-check-paths]]: slice-70 CHECK paths match the counter spec. blocked_by: [[slice-70-counter-on-dom]]

## Slices out

- native window, mobile hosts, JSX: different gates
- new counter behaviour: already owned by [[slice-70-counter-on-dom]]
