---
id: "ticket-12-windowing-gpu"
title: "Windowing and GPU"
kind: ticket
status: closed
ticket_type: planning
tags: [wayfinder]
created_at: "2026-09-09T12:00:00Z"
updated_at: "2026-09-09T09:43:04Z"
references: ["rounds-01-chart-framework"]
blocked_by: []
---

# Windowing and GPU

## Signal

Who owns windowing and GPU. Host I/O currently says not a browser. Nothing says Skia, Metal, or a Flutter embedder.

## Fit

Wayfinder map decision for [[rounds-01-chart-framework]]. Not a slice yet.

## Notes

Embedder owns window, vsync, and input. Engine owns GPU surface, glyphs, and raster. No Flutter embedder dependency. No Skia requirement. Metal and Vulkan are engine backends. GPU library choice stays fog.
