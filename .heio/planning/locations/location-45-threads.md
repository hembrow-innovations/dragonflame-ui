---
id: "location-45-threads"
title: "Threads"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Threads

## This is working when

The framework runs on the Runtime job queue, engine raster and IO threads are allowed, and workers never share a signal object.

## Nested locations

- **UI thread**: this is working when the UI thread is the Runtime job queue, and framework, signals, layout, and paint-list recording run there.
  - bet: try one UI thread for framework; pivot if heavy work stays on that thread
- **Raster thread**: this is working when GPU submit runs on the engine raster thread.
  - bet: try a raster thread; pivot if GPU submit is on the UI thread
- **IO thread**: this is working when image decode and font load run on an IO thread.
  - bet: try an IO thread; pivot if decode blocks frames
- **Compute workers**: this is working when native-only worker threads exist and never share a signal object.
  - bet: try no shared signals; pivot if workers share signal objects
- **Not RN threads**: this is working when there is not a JS thread, a shadow thread, a UI thread, and a bridge.
  - bet: try Runtime job queue plus engine threads; pivot if Hermes-style threading returns
- **Frame callback is a job**: this is working when on native a frame callback is a job on the Runtime queue.
  - bet: try frame-as-job; pivot if frames are message-queue work on an async Bridge

## See also

- **Parent**: [[location-18-native-engine-desktop]]
- **Signals**: [[location-24-signals]]
- **Rust engine**: [[location-37-rust-engine]]
- **Wayfinder**: [[rounds-01-chart-framework]]
- **Architecture**: [[architecture-layer-cake]]
