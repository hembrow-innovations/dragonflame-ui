---
id: "purpose-leaf-kit"
title: "Leaf kit purpose"
kind: purpose
description: "Product brief: job, scope, non-goals for the closed host leaf kit on DOM."
status: active
domain: ui-framework
area: leaf-kit
tags: [purpose]
created_at: "2026-09-10"
updated_at: "2026-09-10"
---

# Leaf kit purpose

## Job

A closed host leaf set renders on the web DOM with CSS layout and StyleSheet-shaped style. Only the leaf adapter knows the host. Text is a host leaf.

## In scope

Child destination sentences from [[location-31-web-layout]], [[location-32-host-leaves]], [[location-33-style-as-data]], [[location-35-host-config]], and the web grain of [[location-55-text]]:

- **Closed set**: host leaves are view, text, image, scroll, text input, and pressable.
- **Shared composites**: shared code is composite components and host leaves are a closed set.
- **CSS on web**: web layout is CSS because the browser already has it.
- **Not pixel-identical**: web versus native is allowed to disagree, because web is CSS on the DOM and native is Taffy in the engine.
- **Copy DOM backend idea**: copy the DOM backend as an idea, not as an attempt to make DOM look like Impeller.
- **StyleSheet shape**: style is StyleSheet-shaped objects.
- **Web may use CSS**: web may use CSS because the browser already has it.
- **Leaf adapter**: only the leaf adapter knows DOM versus UIView versus engine draw lists.
- **Portable import**: a portable Program imports the renderer portability API, not Metal or `document`.
- **Text leaf**: text is a host leaf.
- **Per-host metrics**: text measurement disagrees across DOM, UIKit, and a native canvas engine, and a per-host metrics seam exists.

This kit's oracles prove view and text with style data on CSS, image and scroll, and text input and pressable. They do not prove native layout, native glyphs, or a metrics API.

## Out of scope

- HTML as the leaf set. Do not add HTML leaves.
- Every UIKit class as the leaf set.
- Taffy on web.
- CSS as the native layout runtime.
- Mapping style objects to CSS as a CSS engine product, or style as a CSS language in the framework.
- One CSS engine required for both hosts.
- Pixel-identical web and native.
- Native glyphs. Engine glyphs live in the Rust engine if funded.
- Font load on the IO thread.
- Phase 3 unnamed text APIs.
- Native style objects feeding Taffy and paint.
- Compile-time platform split as this kit's proof.
- New Architecture steal lessons as this kit's proof. Do not steal JSI or Hermes.
- First-class a11y and test IDs. That is [[location-34-a11y-test-ids]].
- Gesture arena. Pressable joining the arena is [[location-46-gesture-arena]].

## Surfaces

The closed host leaf set on the web DOM host.

## Authority

- Behaviour: [[contract]]
- Tests: [[test]]
- Decisions: none. Settled answers live on [[location-31-web-layout]], [[location-32-host-leaves]], [[location-33-style-as-data]], [[location-35-host-config]], and [[location-55-text]].

## Open product questions

- (none)
