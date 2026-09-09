---
id: "location-38-wgpu"
title: "wgpu"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# wgpu

## This is working when

GPU work uses wgpu, when native is funded.

## Nested locations

- **When funded**: this is working when wgpu is used when native is funded.
  - bet: try wgpu; pivot if a sitting names raw Metal and Vulkan instead after funding
- **Engine owns GPU**: this is working when the engine owns the GPU surface and the embedder owns the window.
  - bet: try that ownership; pivot if Host I/O becomes a browser
- **Not web GPU**: this is working when wgpu is native-only, not CanvasKit, Skwasm, or engine-in-WASM as the browser backend.
  - bet: try native wgpu; pivot if web is made WASM so both targets share a GPU VM

## See also

- **Parent**: [[location-18-native-engine-desktop]]
- **Rust engine**: [[location-37-rust-engine]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Architecture**: [[architecture-layer-cake]]
