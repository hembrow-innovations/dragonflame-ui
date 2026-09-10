---
id: "ticket-61-native-ui-unfunded"
title: "Native UI is unfunded"
kind: ticket
status: promoted
ticket_type: observation
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-11T12:00:00Z"
---

# Native UI is unfunded

## Signal

[[location-18-native-engine-desktop]] is working only if native UI is funded. Counterpart funded it in [[rounds-160-fund-native]].

## Fit

Promoted into [[slice-76-desktop-vsync-window]] and [[slice-77-draw-a-rect]]. Sprint `native-if-funded` is active. `mobile-after-desktop` stays shaping until desktop honesty.

## Notes

Do not start wgpu, Taffy, or embedder code from this ticket. Drain claims tasks.
