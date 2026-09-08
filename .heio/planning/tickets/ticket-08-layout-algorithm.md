---
id: "ticket-08-layout-algorithm"
title: "Layout algorithm"
kind: ticket
status: open
ticket_type: planning
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T12:00:00Z"
references: ["rounds-01-chart-framework"]
blocked_by: ["ticket-07-native-default"]
---

# Layout algorithm

## Signal

Layout algorithm: Yoga versus Taffy versus Draconic.

## Fit

Wayfinder map decision for [[rounds-01-chart-framework]]. Not a slice yet.

## Notes

The scribble treats layout as an engine primitive with a frozen algorithm and tests, not as user CSS on native. It names porting Yoga, Taffy in a Rust engine, or layout in Draconic. Do not pick a winner on this ticket. Waits on [[ticket-07-native-default]].
