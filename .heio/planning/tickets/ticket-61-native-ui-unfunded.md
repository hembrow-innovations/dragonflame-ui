---
id: "ticket-61-native-ui-unfunded"
title: "Native UI is unfunded"
kind: ticket
status: parked
ticket_type: observation
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Native UI is unfunded

## Signal

[[location-18-native-engine-desktop]] is working only if native UI is funded. No sitting funded it. Empty engine crates before funding violate [[location-22-crate-layout]].

## Fit

Sprint `native-if-funded` and `mobile-after-desktop` stay shaping. Promote when a sitting records funding. Then freeze those slices and publish TDD tasks.

## Notes

Do not start wgpu, Taffy, or embedder code while parked. Drain does not claim tickets.
