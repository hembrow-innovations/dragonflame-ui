---
id: "ticket-04-no-js-runtime"
title: "No JS runtime on native"
kind: ticket
status: open
ticket_type: planning
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T12:00:00Z"
references: ["rounds-01-chart-framework"]
blocked_by: []
---

# No JS runtime on native

## Signal

What "no JS runtime on native" means given tracing GC for JS values (toolchain ADR-0003). Slogan versus honesty.

## Fit

Wayfinder map decision for [[rounds-01-chart-framework]]. Not a slice yet.

## Notes

Native Draconic still has a tracing GC for language values: objects, strings, closures, promises. Dual worlds, ADR-0003. That is not a JavaScript interpreter. The scribble says not to throw the GC away to satisfy the slogan. Leave the product wording off this ticket.
