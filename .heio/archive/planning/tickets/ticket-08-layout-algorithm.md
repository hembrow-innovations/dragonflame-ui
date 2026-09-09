---
id: "ticket-08-layout-algorithm"
title: "Layout algorithm"
kind: ticket
status: closed
ticket_type: planning
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T09:43:04Z"
references: ["rounds-01-chart-framework"]
blocked_by: ["ticket-07-native-default"]
---

# Layout algorithm

## Signal

Layout algorithm: Yoga versus Taffy versus Draconic.

## Fit

Wayfinder map decision for [[rounds-01-chart-framework]]. Not a slice yet.

## Notes

Native layout is Taffy in the Rust engine, frozen with tests. Web layout is CSS. Not CSS on native. Not Yoga. Not layout on the Draconic GC heap.
