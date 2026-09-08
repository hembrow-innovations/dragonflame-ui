---
id: "ticket-12-windowing-gpu"
title: "Windowing and GPU"
kind: ticket
status: open
ticket_type: planning
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T12:00:00Z"
references: ["rounds-01-chart-framework"]
blocked_by: []
---

# Windowing and GPU

## Signal

Who owns windowing and GPU. Host I/O currently says not a browser. Nothing says Skia, Metal, or a Flutter embedder.

## Fit

Wayfinder map decision for [[rounds-01-chart-framework]]. Not a slice yet.

## Notes

Host I/O purpose forbids a full browser, DOM, or page runtime as a host surface (ADR-0008). The scribble names a Rust engine and per-OS embedders, and says nothing locked about Skia, Metal, or a Flutter embedder. Leave the ownership answer off this ticket.
