---
id: "rounds-286-freeze-aot-host-descriptors"
title: "Freeze AOT host descriptors"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-12T08:30:00Z"
updated_at: "2026-09-12T08:30:00Z"
---

# Freeze AOT host descriptors

Counterpart is the product peer. Notebook is this round.

Pick: [[location-35-host-config]] nested bullet **New Architecture steal**. Lowest leftover nested destination under live sprint parent [[location-17-web-component-library]] whose sentence is not a slice Done or oracle. [[slice-153-host-config-honesty]] locked only the pivot: do not steal JSI or Hermes. [[test-host-config]] Gaps say immutable shadow tree, AOT FFI, and UI-thread measure stay unfrozen while native is unfunded. Native is funded. [[slice-76-desktop-vsync-window]] and [[slice-77-draw-a-rect]] are met. Sprint `framework-in-draconic` names [[location-17-web-component-library]] and may freeze. Do not rewrite a location destination.

## Vault pack

Query: freeze New Architecture steal; typed AOT host descriptors; sync layout and measure on the UI thread; no JS shadow thread
Area: aot-host-descriptors

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/locations/location-35-host-config.md`
- `.heio/planning/locations/location-27-render-object.md`
- `.heio/planning/locations/location-45-threads.md`
- `.heio/planning/sprints/framework-in-draconic/shape.md`
- `.heio/archive/planning/sprints/web-tracers/slice-153-host-config-honesty.md`
- `.heio/archive/planning/sprints/native-if-funded/slice-77-draw-a-rect.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/host-config/purpose.md`
- `docs/specs/ui-framework/host-config/contract.md`
- `docs/specs/ui-framework/host-config/test.md`
- `docs/specs/ui-framework/ffi-scene-commands/purpose.md`
- `.heio/planning/rounds/rounds-01-chart-framework.md`

Related:

- `docs/specs/ui-framework/leaf-kit/purpose.md`
- `.heio/archive/planning/rounds/rounds-152-host-config-honesty.md`
- `.heio/archive/planning/sprints/web-tracers/slice-137-render-object-honesty.md`
- `.heio/archive/planning/sprints/native-if-funded/slice-76-desktop-vsync-window.md`

Excluded: public HostConfig, public ShadowTree, public measure API, repeating no-JSI oracles, repeating Taffy-rect oracles, StyleSheet feeding Taffy as this slice, scribble, rewriting location destinations, writing `docs/specs/` here.

Next: freeze one slice for typed AOT host descriptors. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview are none. [[purpose-host-config]] fences immutable shadow tree, AOT FFI, and UI-thread measure out of scope.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-35-host-config]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether a spec folder exists for this behaviour.
4. **Repeat**: Whether JSI, Hermes, Taffy-rect, or packed-submit oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze the New Architecture steal nested bullet, now that native is funded. Tracer: native leaf host descriptors are compile-time typed FFI structs. Layout and measure run synchronously on the Runtime job queue. There is no JS shadow thread and no async Bridge for layout or measure. In-process typed synchronous scene submit already lives on [[slice-77-draw-a-rect]]; do not repeat that oracle.
2. **Named set**: Steal list is locked on [[overview-ui-framework]] and [[location-35-host-config]]: immutable shadow tree, synchronous layout and measure on the UI thread, mounting separate from reconcile, typed host descriptors as AOT FFI, in-process typed synchronous framework-to-host calls. Do not steal JSI. Do not steal Hermes. Smallest reversible default: retained render objects plus immutable component config from [[location-27-render-object]] are the shadow tree; do not add a public ShadowTree or a JS shadow thread. UI thread is the Runtime job queue from [[location-45-threads]] and [[architecture-layer-cake]]. Mounting separate from reconcile is already run-once from [[slice-70-counter-on-dom]]; do not add a public reconcile. Typed AOT descriptors are the remaining positive tracer.
3. **Ladder**: None for this behaviour. [[purpose-host-config]] out of scope includes immutable shadow tree, synchronous layout and measure APIs, and AOT FFI host descriptors. First task writes purpose, contract, and test only under area `aot-host-descriptors`.
4. **Repeat**: Do not repeat no-JSI or no-Hermes oracles. Those live on [[purpose-host-config]]. Do not repeat Taffy-rect or GPU-not-UI oracles. Those live on [[purpose-ffi-scene-commands]]. Do not repeat run-once oracles. Those live on [[purpose-counter]]. Do not repeat no-Widget retained-node oracles. Those live on [[purpose-render-object]]. Do not repeat no-shared-signal oracles. Those live on [[purpose-signal-dirtying]].
5. **Wait**: Public `HostConfig`. Public `ShadowTree`. Public `measure()`. StyleSheet objects feeding Taffy. Packed-scene field names. OEM widget class lists. A JS shadow thread as a product feature.

### Candidate A

Leaf adapter owns typed AOT descriptors. Callers keep `h`, the closed kit, and one packed submit.

#### Problem

[[slice-153-host-config-honesty]] only locked the pivot: do not steal JSI or Hermes. Native is funded. The remaining steal is an immutable shadow tree, synchronous layout and measure on the UI thread, mounting separate from reconcile, and typed host descriptors as AOT FFI. [[purpose-host-config]] still fences those out of scope. A public `HostConfig`, `ShadowTree`, or `measure()` would leak Fabric stages. Retained render objects plus immutable config already exist. One packed `extern "C"` submit already exists. The missing tracer is compile-time typed leaf FFI, with layout and measure on the Runtime job queue, not a JS shadow thread or async Bridge.

#### Usage (caller's view)

App code this tracer still writes the closed kit:

```js
import { h, view, text } from "dragonflame-ui";

function App() {
  return h(view, {}, [h(text, { text: "hi" })]);
}
```

Native still submits one packed scene. Callers do not import `HostConfig`. They do not import `ShadowTree`. They do not call `measure()`. They do not start a reconcile. Tests prove two facts. Native leaves become compile-time typed `repr(C)` FFI structs behind the leaf adapter, not string tags or JS host objects. Layout and measure run on the Runtime job queue in the same in-process job that records the draw list. There is no JS shadow thread. There is no async Bridge for layout or measure.

```
node --test tests/aot-host-descriptors/typed-leaf-ffi.test.mjs
node --test tests/aot-host-descriptors/sync-ui-layout.test.mjs
```

Web callers keep `h` and DOM leaves. They never construct a host config.

#### Shape

Public surface stays `h`, the closed leaf kit, and the existing `extern "C" fn submit(Scene)`. No second FFI entry. Descriptor field names stay unnamed. Packed-scene field names stay unnamed.

Private types, derived from that usage:

```rust
#[repr(C)]
struct LeafDesc; // compile-time typed FFI; fields unnamed this slice

fn layout_and_measure(desc: LeafDesc); // Runtime job queue; not extern C
pub extern "C" fn submit(scene: Scene); // existing; still the only host entry
```

Module map:

- **app**: `h` plus closed leaves.
- **leaf adapter** (private): maps leaves to `LeafDesc`. Only it knows engine draw lists versus DOM.
- **retained tree** (private): render objects plus immutable component config are the shadow tree. No public `ShadowTree`.
- **Runtime job queue**: UI thread. Layout, measure, and paint-list recording run here, synchronously, in-process.
- **engine**: Taffy plus one packed submit. GPU submit stays off this thread.

Complexity hidden: how a leaf becomes a typed FFI struct, when measure runs, how immutability plus retained nodes replace a Fabric shadow tree, how mount stays run-once without a public reconcile. Invariants encoded: descriptors are compile-time typed structs; layout and measure are not Bridge work; no JS shadow thread; no public `HostConfig`, `ShadowTree`, or `measure()`.

#### Red flags

- **Shallow**: avoided. Callers call `h` and one submit. A public `HostConfig` with create, clone, measure, and commit would make callers assemble Fabric stages.
- **Leakage**: avoided if `LeafDesc` and packed fields stay private. Exporting `ShadowTree` or `measure()` would leak the steal into app code.
- **Temporal**: one adapter owns descriptors, layout, and measure. Not public mount, then measure, then layout, then submit.
- **Pass-through**: a public `measure()` that only forwards to Taffy, or a public `ShadowTree` that only wraps retained render objects, would be a pass-through. Do not add them. Do not add a second `extern "C"` for measure.

#### Next implementation step

Spec ladder under area `aot-host-descriptors`, then red-green typed leaf FFI, then red-green sync layout and measure on the Runtime job queue.

### Candidate B

Public Fabric surface. Callers own a ShadowTree, a HostConfig, a measure() call, and a JSI-like descriptor table or async Bridge so layout can leave the UI thread.

#### Problem

Same steal list as the destination. A deep hidden-adapter shape would keep descriptors inside the leaf adapter and keep layout on the Runtime job queue. This candidate exports the New Architecture names as the product API so apps can inspect shadow nodes, pick a host, and await measure.

#### Usage (caller's view)

```js
import {
  h, render, view, text,
  ShadowTree, HostConfig, measure,
  HostDescriptorRegistry, Bridge
} from "dragonflame-ui";

const descriptors = HostDescriptorRegistry.fromJsi({
  view: { create: "HostView", measure: "HostView.measure" },
  text: { create: "HostText", measure: "HostText.measure" },
});

const host = HostConfig.create({ descriptors, bridge: Bridge.async() });
const tree = ShadowTree.create();
tree.reconcile(h(view, {}, [h(text, { text: "hi" })]));
const box = await measure(tree.root, { width: 320, height: 480 });
tree.mount(host);
render(tree, parent, host);
```

Callers clone the shadow tree on a JS shadow thread, post layout across the Bridge, then mount on the UI thread. A later call could bind Hermes so both hosts share one JSI runtime.

#### Shape

Public types and signatures:

- **ShadowNode**: `{ tag, type, props, children, layout }`
- **ShadowTree.create(): ShadowTree**
- **ShadowTree.clone(): ShadowTree**
- **ShadowTree.reconcile(element): void**
- **ShadowTree.mount(host: HostConfig): void**
- **HostConfig.create({ descriptors, bridge }): HostConfig**
- **HostDescriptor**: JSI function table `{ create, measure, setChildren }`, not an AOT FFI struct
- **Bridge.async(): Bridge**
- **Bridge.postLayout(tree): Promise<LayoutBox>**
- **Bridge.postMount(tree): Promise<void>**
- **measure(node, constraints): Promise<LayoutBox>**

Module map:

- **src/shadow-tree/**: public clone and reconcile
- **src/host-config/**: public HostConfig factory
- **src/jsi-descriptors/**: runtime host function table
- **src/bridge/**: async layout and mount
- **src/measure/**: public measure that posts to the Bridge

Callers coordinate five modules to finish one frame. Complexity is not hidden. Invariants that should stay internal (immutable shadow tree, UI-thread measure, mount separate from reconcile, typed AOT FFI) become public stages and runtime handles.

#### Red flags

- **Shallow**: callers call ShadowTree.create, reconcile, measure, HostConfig.create, and mount to complete one layout the leaf adapter already owned. Learning the interface does not save them from learning Fabric threading.
- **Leakage**: JSI-like descriptor tables, ShadowNode layout fields, and Bridge message shapes leak into app code. Host config is no longer only at the leaf adapter. Wire types are the public surface.
- **Temporal**: reconcile, then measure, then mount as public stages. A JS shadow thread plus UI thread plus Bridge is the RN thread split the steal forbade.
- **Pass-through**: HostConfig.measure and ShadowTree.mount only forward Bridge.postLayout and Bridge.postMount. measure() is a Promise wrapper around the same post.

#### Next implementation step

Export public ShadowTree, HostConfig, measure(), a JSI descriptor registry, and an async Bridge. Invents API. Contradicts the Wait list, [[purpose-host-config]] no public HostConfig, [[overview-ui-framework]] do not steal JSI and forbid async Bridge as the default, and [[location-45-threads]] not RN threads.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents public Fabric stages, JSI descriptors, and an async Bridge, and makes the steal a caller-assembled pipeline.

Tradeoffs accepted:

- We accept retained render objects plus immutable config as the shadow tree in exchange for not adding a public ShadowTree type.
- We accept no public measure() in exchange for proving layout and measure stay on the Runtime job queue without a new API.
- We accept a private LeafDesc whose fields stay unnamed in exchange for proving typed AOT FFI without leaking packed-scene layout.
- We accept not feeding StyleSheet objects into Taffy this slice in exchange for keeping that grain on [[location-33-style-as-data]] native feed.

Alternatives considered:

- Public ShadowTree plus HostConfig plus measure(): leakage and temporal decomposition, lost.
- Repeating no-JSI as the only proof: that oracle already lives on [[purpose-host-config]], lost.
- Waiting until StyleSheet feeds Taffy: that destination is [[location-42-native-layout]], lost.
- Extending [[purpose-host-config]] instead of an `aot-host-descriptors` ladder: that purpose already fences AOT FFI and UI-thread measure out of scope, lost.

Open questions and risks:

- None the product peer cannot answer from [[location-35-host-config]], [[overview-ui-framework]], [[architecture-layer-cake]], and [[purpose-host-config]].

Next implementation step: write purpose, contract, and test for aot-host-descriptors, then red-green typed leaf FFI, then red-green sync layout and measure on the Runtime job queue.

### Tracer bullets

1. Spec ladder for aot-host-descriptors. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green typed leaf FFI. blocked_by: spec. AFK. Native leaves become compile-time typed FFI structs behind the leaf adapter, not JS host objects or string tags.
3. Red-green sync UI layout. blocked_by: typed leaf FFI. AFK. Layout and measure run synchronously on the Runtime job queue. No JS shadow thread. No async Bridge for layout or measure.

## Confirm

Confirmed.
