---
id: "location-46-gesture-arena"
title: "Gesture arena"
kind: location
status: active
tags: []
created_at: "2026-09-09T22:30:00Z"
updated_at: "2026-09-09T22:30:00Z"
---

# Gesture arena

## This is working when

Competing recognizers for pointer input exist, and DOM `stopPropagation` is not the native model.

## Nested locations

- **Competing recognizers**: this is working when pointer input uses a gesture arena of competing recognizers.
  - bet: try a gesture arena; pivot if native gestures are DOM bubbling
- **Signals do not replace it**: this is working when signals do not replace the gesture arena.
  - bet: try arena as its own mechanism; pivot if signal writes are treated as hit-test
- **Embedder input**: this is working when the embedder owns input and the framework arena decides the winner.
  - bet: try embedder input plus framework arena; pivot if the OS view tree is the only recognizer
- **Pressable leaf**: this is working when pressable is a host leaf that can join the arena. See [[location-32-host-leaves]]
  - bet: try pressable as a leaf; pivot if every UIKit class is a recognizer

## See also

- **Parent**: [[location-18-native-engine-desktop]]
- **Host leaves**: [[location-32-host-leaves]]
- **Glossary**: [[glossary]]
- **Architecture**: [[architecture-layer-cake]]
- **Idea**: [[overview-ui-framework]]
