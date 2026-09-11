---
id: "rounds-263-freeze-ios-counter"
title: "Freeze iOS counter"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-11T08:06:40Z"
updated_at: "2026-09-11T08:06:40Z"
---

# Freeze iOS counter

Counterpart is the product peer. Notebook is this round.

Pick: [[slice-80-ios-counter]]. Lowest shaping slice whose `blocked_by` is `met`. [[slice-76-desktop-vsync-window]] and [[slice-70-counter-on-dom]] are met. Native UI is funded in [[rounds-160-fund-native]]. Sprint `mobile-after-desktop` may freeze. Do not freeze [[slice-81-android-counter]], [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], or [[slice-84-platform-view-hatch]]. Do not rewrite a location destination.

## Vault pack

Query: freeze iOS counter; thin Xcode shell; simulator plus arm64 device in scope; no WKWebView; no JSC; UIView hatch not default
Area: ios-embedder

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-47-after-desktop.md`
- `.heio/planning/locations/location-48-ios-embedder.md`
- `.heio/planning/locations/location-50-xcode-gradle-shells.md`
- `.heio/planning/locations/location-51-ios-triples.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-80-ios-counter.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `.heio/planning/rounds/rounds-01-chart-framework.md`

Related:

- `docs/specs/ui-framework/desktop-embedder/purpose.md`
- `docs/specs/ui-framework/counter/purpose.md`
- `docs/specs/ui-framework/crate-workspace/purpose.md`
- `.heio/planning/locations/location-39-desktop-embedder.md`
- `.heio/planning/locations/location-43-native-canvas-host.md`
- `.heio/planning/locations/location-44-oem-escape-hatch.md`
- `.heio/planning/tickets/ticket-61-native-ui-unfunded.md`
- `crates/embedder/src/window.rs`

Excluded: Android, store packaging, a11y and text APIs, UIView attach, faking LLVM, scribble, rewriting location destinations, writing `docs/specs/` here.

Next: freeze [[slice-80-ios-counter]] with oracles and tasks. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview are none. iOS embedder spec folder does not exist.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-48-ios-embedder]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether an ios-embedder spec folder exists.
4. **Repeat**: Whether no-WebView or no-JS-engine oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze [[slice-80-ios-counter]]. Same counter demo on an iOS host after desktop honesty. Thin Xcode shell. Simulator run. arm64 device in scope. No WKWebView. No JSC as the app runtime. UIView is hatch, not default. Android, store binaries, talk-and-measure, and UIView attach stay later slices.
2. **Named set**: Embedder owns window, vsync, and input. Engine owns GPU. No Skia. No Flutter embedder. From [[rounds-01-chart-framework]] answers 3, 6, 8, and 11. Native default is the custom Rust engine canvas path. OEM is hatch. Thin Xcode shell. iOS arm64 device plus simulator. Tracing GC stays. Smallest reversible defaults: the iOS window lives in the existing embedder crate as an ios module, not a new empty crate. Shell path is `hosts/ios/`. Vsync on iOS is CADisplayLink from the embedder. Counter tracer is a native host binary that shows counter text through engine draw lists, not a JS bundle and not UILabel as the default leaf. Do not fake a general LLVM lowerer. Simulator is the run oracle. arm64 device in scope is `aarch64-apple-ios` plus Xcode arm64 ARCHS, not a physical-device green. All tasks `mode: afk`.
3. **Ladder**: None. First task writes purpose, contract, and test only.
4. **Repeat**: Do not repeat desktop no-WebView or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not repeat web counter DOM oracles. Those live on [[purpose-counter]]. Do not repeat workspace or empty-crate oracles. Those live on [[purpose-crate-workspace]] and [[purpose-git-package]]. Do not repeat canvas-default or platform-view slot oracles. Those live on [[purpose-oem-hatch]]. UIView attach stays on [[slice-84-platform-view-hatch]].
5. **Wait**: Android embedder. Gradle shell. Store names and formats. `SemanticsNode` dump. `measureText`. UIView and Android view attach. Public `UiKitView`. WKWebView class lists as product API. A general LLVM lowerer. Physical device tap as an oracle.

### Candidate A

Dedicated iOS embedder in the existing crate. Thin Xcode shell. Engine canvas is the counter host.

#### Problem

[[location-48-ios-embedder]] wants an iOS host with no WebView and no JS engine. [[location-50-xcode-gradle-shells]] wants a thin Xcode shell. [[location-51-ios-triples]] wants simulator plus arm64 device in scope, and forbids treating simulator-only as done. [[location-43-native-canvas-host]] wants draw lists into the Rust engine as the native default. The desktop embedder already owns macOS plus winit and compile-errors on any other OS. The web counter is DOM. This repo must not fake LLVM.

#### Usage (caller's view)

```js
import { h, Signal } from "dragonflame-ui";

function Counter() {
  const n = new Signal(0);
  return h("text", { text: n });
}
```

The iOS tracer does not import that JS into JSC. A thin Xcode shell at `hosts/ios/` links the embedder crate. The embedder owns UIWindow and one CADisplayLink vsync. The engine owns the GPU surface. Tests run:

```
node --test tests/ios-embedder/no-webview-no-js-engine.test.mjs
node --test tests/ios-embedder/arm64-device-in-scope.test.mjs
node --test tests/ios-embedder/counter-on-simulator.test.mjs
```

Callers do not import WKWebView. They do not import JavaScriptCore. They do not import UILabel as the counter leaf. UIView attach is not this slice.

#### Shape

Public surface is the existing embedder crate plus a thin Xcode app target. iOS window, vsync, and input stay behind that embedder. Engine crate still owns wgpu. Counter text is a packed scene draw list, same submit path as desktop. Complexity hidden: how CADisplayLink becomes one vsync, how the Xcode target links the static lib, how simulator and arm64 share one shell. Invariants: no WKWebView, no JSC as app runtime, tracing GC stays in the runtime crate, UIView is not the default host, no empty new crate.

#### Red flags

- **Shallow**: avoided. Callers get a host binary. Window and vsync policy stay in the embedder.
- **Leakage**: avoided if UIKit types and Xcode settings stay inside the ios module and shell. Exporting `UILabel` as the counter API would leak.
- **Temporal**: one iOS embedder owns window plus vsync plus input, not public open-window then bind-metal then tick stages.
- **Pass-through**: a public `openIosWindow()` that only forwards winit would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green host honesty, then arm64 in scope, then counter on simulator.

### Candidate B

Extend winit to iOS. One window module for macOS and iPhone. Xcode shell optional or generated.

#### Problem

Same destinations. Candidate A splits iOS window policy into a dedicated module. Candidate B would lift the desktop `compile_error` and treat iOS as another winit target.

#### Usage (caller's view)

```
cargo run -p embedder --bin vsync-window --target aarch64-apple-ios-sim
```

The counter would be the desktop vsync bin on a phone. Callers keep winit event-loop types. A thin Xcode shell is leftover packaging, not the host.

#### Shape

One public window API across desktop and iOS. Interface reuses winit. Location-50's Xcode shell is not the embedder. iOS input and vsync leak as winit events. Simulator-only cargo targets can look done without arm64 device ARCHS.

#### Red flags

- **Shallow**: callers must know winit iOS event-loop rules to finish one frame.
- **Leakage**: winit types become the iOS product surface. Contradicts a per-OS embedder.
- **Temporal**: cargo build, then optional Xcode wrap, as public stages.
- **Pass-through**: iOS module that only forwards winit `EventLoop` adds a layer without policy.

#### Next implementation step

Remove the macOS-only compile_error and teach winit iOS. Contradicts [[location-50-xcode-gradle-shells]] thin Xcode shell as the iOS host wrapper.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it makes winit the iOS embedder and leaves the Xcode shell optional.

Tradeoffs accepted:

- We accept a native host binary for the counter, not compiling the JS demo through JSC, in exchange for not faking LLVM.
- We accept CADisplayLink and `hosts/ios/` as sitting defaults in exchange for freezing without a HITL name-the-shell task.
- We accept arm64 in scope as target membership, not a physical-device tap, in exchange for every task staying AFK.
- We accept leaving UIView attach to [[slice-84-platform-view-hatch]] in exchange for proving canvas default on iOS.

Alternatives considered:

- winit iOS as the embedder: leaks window types and weakens the Xcode shell, lost.
- UILabel or UIView as the counter leaf: rewrites [[location-43-native-canvas-host]] and [[rounds-01-chart-framework]] answer 6, lost.
- WKWebView plus no-JSC slogan: rewrites [[location-48-ios-embedder]] no WKWebView, lost.
- Simulator-only as done: rewrites [[location-51-ios-triples]], lost.

Open questions and risks:

- None the product peer cannot answer from [[location-48-ios-embedder]], [[location-50-xcode-gradle-shells]], [[location-51-ios-triples]], [[location-43-native-canvas-host]], and [[rounds-01-chart-framework]].

Next implementation step: write purpose, contract, and test for the iOS embedder, then red-green no WebView and no JS engine, then arm64 device in scope, then counter on simulator.

### Tracer bullets

1. Spec ladder for the iOS embedder. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green no WebView and no JS engine. blocked_by: spec. AFK. Thin Xcode shell at `hosts/ios/`. Embedder ios module. No WKWebView. No Hermes, JSC, or V8 as the app runtime. Tracing GC stays.
3. Red-green arm64 device in scope. blocked_by: host honesty. AFK. `aarch64-apple-ios` plus Xcode arm64 ARCHS. Simulator-only is not done.
4. Red-green counter on iOS simulator. blocked_by: host honesty and arm64 in scope. AFK. Counter text through engine draw lists. UIView is not the default leaf.

## Confirm

Confirmed.
