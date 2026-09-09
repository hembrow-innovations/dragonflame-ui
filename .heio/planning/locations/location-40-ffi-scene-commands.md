---
id: "location-40-ffi-scene-commands"
title: "FFI scene commands"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# FFI scene commands

## This is working when

The native path calls the engine through `extern "C"` and unboxed numbers and structs.

## Nested locations

- **extern C**: this is working when the native path uses `extern "C"`.
  - bet: try extern C; pivot if platform channels become the primary native bridge
- **Unboxed numbers and structs**: this is working when the native path uses unboxed numbers and structs.
  - bet: try unboxed values; pivot if JSI is stolen as the call path
- **Hot paths**: this is working when FFI is for hot paths rather than platform channels as the primary native bridge.
  - bet: try FFI hot paths; pivot if layout, hit-testing, and frames are message-queue work
- **Command set unnamed**: this is working when FFI scene commands exist. The source does not name the command set.
  - bet: try scene commands as named in Phase 2; pivot if a second IR or UI bytecode is invented to hold them
- **Sync in-process**: this is working when framework-to-host calls are in-process, typed, and synchronous.
  - bet: try in-process typed sync calls; pivot if an async Bridge is the default

## See also

- **Parent**: [[location-18-native-engine-desktop]]
- **Renderer portability**: [[location-41-renderer-portability]]
- **Host config**: [[location-35-host-config]]
- **Idea**: [[overview-ui-framework]]
- **Architecture**: [[architecture-layer-cake]]
