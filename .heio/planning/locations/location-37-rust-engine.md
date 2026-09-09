---
id: "location-37-rust-engine"
title: "Rust engine"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Rust engine

## This is working when

The native-only graphics stack does raster, glyphs, images, compositing, vsync client, and a GPU surface, and is not the language Runtime.

## Nested locations

- **Raster**: this is working when the engine rasters and GPU submit lives on the raster thread.
  - bet: try engine raster; pivot if the framework calls Metal
- **Glyphs**: this is working when the engine owns glyphs.
  - bet: try engine glyphs; pivot if Skia is pulled in for text
- **Images**: this is working when the engine owns images, with image decode on the IO thread.
  - bet: try engine images; pivot if image decode blocks the UI thread
- **Compositing**: this is working when the engine composites a layer tree of offset, clip, transform, picture, and platform-view.
  - bet: try engine composite; pivot if the framework composites
- **Vsync client**: this is working when the engine is a vsync client and one vsync comes from the embedder.
  - bet: try one vsync from the embedder; pivot if the framework owns vsync
- **GPU surface**: this is working when the engine owns the GPU surface. See [[location-38-wgpu]]
  - bet: try engine-owns-GPU; pivot if the embedder owns GPU or Skia is required
- **Not Runtime**: this is working when Engine, Runtime, and Embedder stay uncollapsed. Runtime is language GC and jobs.
  - bet: try that split; pivot if Runtime is treated as graphics
- **Not Skia**: this is working when there is no Skia requirement and no Flutter Engine as a product dependency.
  - bet: try a custom Rust engine; pivot if Skia or a Flutter embedder creeps in

## See also

- **Parent**: [[location-18-native-engine-desktop]]
- **Engine home**: [[location-36-engine-home]]
- **wgpu**: [[location-38-wgpu]]
- **Threads**: [[location-45-threads]]
- **Architecture**: [[architecture-layer-cake]]
- **Glossary**: [[glossary]]
