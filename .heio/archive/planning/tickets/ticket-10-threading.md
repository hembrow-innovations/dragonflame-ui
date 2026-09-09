---
id: "ticket-10-threading"
title: "Threading"
kind: ticket
status: closed
ticket_type: planning
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T09:43:04Z"
references: ["rounds-01-chart-framework"]
blocked_by: ["ticket-07-native-default"]
---

# Threading

## Signal

UI on the main isolate only, or shared memory later.

## Fit

Wayfinder map decision for [[rounds-01-chart-framework]]. Not a slice yet.

## Notes

Framework, signals, layout, and paint-list recording run on the Runtime job queue, one isolate. Engine raster and IO threads are allowed. Workers never share a signal object. Shared memory is not a product requirement.
