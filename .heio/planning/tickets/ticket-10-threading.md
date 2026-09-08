---
id: "ticket-10-threading"
title: "Threading"
kind: ticket
status: open
ticket_type: planning
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T12:00:00Z"
references: ["rounds-01-chart-framework"]
blocked_by: ["ticket-07-native-default"]
---

# Threading

## Signal

UI on the main isolate only, or shared memory later.

## Fit

Wayfinder map decision for [[rounds-01-chart-framework]]. Not a slice yet.

## Notes

The scribble describes a UI thread as the Runtime job queue, plus raster and IO threads in an engine, and native-only `workerOsThread`. C01: workers do not share the JS heap. Those are toolchain facts, not a product pick. Waits on [[ticket-07-native-default]]. Leave the threading answer off this ticket.
