---
id: "ticket-04-no-js-runtime"
title: "No JS runtime on native"
kind: ticket
status: closed
ticket_type: planning
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T09:43:04Z"
references: ["rounds-01-chart-framework"]
blocked_by: []
---

# No JS runtime on native

## Signal

What "no JS runtime on native" means given tracing GC for JS values (toolchain ADR-0003). Slogan versus honesty.

## Fit

Wayfinder map decision for [[rounds-01-chart-framework]]. Not a slice yet.

## Notes

No JS engine on native: no Hermes, JavaScriptCore, V8, or WebView. Tracing GC for language values stays. Honest claim is no JavaScript engine, not no managed runtime.
