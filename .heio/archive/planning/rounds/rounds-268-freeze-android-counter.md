---
id: "rounds-268-freeze-android-counter"
title: "Freeze Android counter"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-11T08:52:52Z"
updated_at: "2026-09-11T08:52:52Z"
---

# Freeze Android counter

Counterpart is the product peer. Notebook is this round.

Pick: [[slice-81-android-counter]]. Lowest shaping slice whose `blocked_by` is `met`. [[slice-76-desktop-vsync-window]] and [[slice-70-counter-on-dom]] are met. Native UI is funded in [[rounds-160-fund-native]]. Sprint `mobile-after-desktop` may freeze. Do not freeze [[slice-82-store-binaries]], [[slice-83-talk-and-measure]], or [[slice-84-platform-view-hatch]]. Do not rewrite a location destination.

## Vault pack

Query: freeze Android counter; thin Gradle shell; x86_64 emulator plus arm64-v8a in scope; no WebView; no Hermes; Android views hatch not default
Area: android-embedder

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-19-mobile-embedders.md`
- `.heio/planning/locations/location-47-after-desktop.md`
- `.heio/planning/locations/location-49-android-embedder.md`
- `.heio/planning/locations/location-50-xcode-gradle-shells.md`
- `.heio/planning/locations/location-52-android-triples.md`
- `.heio/planning/sprints/mobile-after-desktop/shape.md`
- `.heio/planning/sprints/mobile-after-desktop/slice-81-android-counter.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `.heio/planning/rounds/rounds-01-chart-framework.md`

Related:

- `docs/specs/ui-framework/ios-embedder/purpose.md`
- `docs/specs/ui-framework/desktop-embedder/purpose.md`
- `docs/specs/ui-framework/counter/purpose.md`
- `docs/specs/ui-framework/crate-workspace/purpose.md`
- `.heio/planning/locations/location-39-desktop-embedder.md`
- `.heio/planning/locations/location-43-native-canvas-host.md`
- `.heio/planning/locations/location-44-oem-escape-hatch.md`
- `.heio/planning/tickets/ticket-61-native-ui-unfunded.md`
- `.heio/planning/rounds/rounds-263-freeze-ios-counter.md`
- `crates/embedder/src/lib.rs`

Excluded: iOS, store packaging, a11y and text APIs, Android view attach, faking LLVM, scribble, rewriting location destinations, writing `docs/specs/` here.

Next: freeze [[slice-81-android-counter]] with oracles and tasks. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview are none. Android embedder spec folder does not exist.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-49-android-embedder]] this sitting freezes.
2. **Named set**: Which names `docs/` and the location already locked, and which smallest reversible defaults this sitting asserts.
3. **Ladder**: Whether an android-embedder spec folder exists.
4. **Repeat**: Whether no-WebView or no-JS-engine oracles already live elsewhere.
5. **Wait**: What stays unnamed.

### Answers

1. **Next grain**: Freeze [[slice-81-android-counter]]. Same counter demo on an Android host after desktop honesty. Thin Gradle shell. x86_64 emulator run. arm64-v8a in scope. No WebView. No Hermes, JSC, or V8 as the app runtime. Android views are hatch, not default. iOS, store binaries, talk-and-measure, and Android view attach stay later slices.
2. **Named set**: Embedder owns window, vsync, and input. Engine owns GPU. No Skia. No Flutter embedder. From [[rounds-01-chart-framework]] answers 3, 6, 8, and 11. Native default is the custom Rust engine canvas path. OEM is hatch. Thin Gradle shell. Android arm64-v8a plus x86_64 emulator. Tracing GC stays. Smallest reversible defaults: the Android window lives in the existing embedder crate as an android module, not a new empty crate. Shell path is `hosts/android/`. Vsync on Android is Choreographer from the embedder. Window is an Activity. GPU surface is ANativeWindow from a SurfaceView. Counter tracer is a native host binary that shows counter text through engine draw lists, not a JS bundle and not TextView as the default leaf. Do not fake a general LLVM lowerer. Emulator is the run oracle. arm64-v8a in scope is `aarch64-linux-android` plus Gradle abiFilters arm64-v8a, not a physical-device green. All tasks `mode: afk`.
3. **Ladder**: None. First task writes purpose, contract, and test only.
4. **Repeat**: Do not repeat desktop no-WebView or no-JS-engine oracles. Those live on [[purpose-desktop-embedder]]. Do not repeat iOS no-WebView or no-JS-engine oracles. Those live on [[purpose-ios-embedder]]. Do not repeat web counter DOM oracles. Those live on [[purpose-counter]]. Do not repeat workspace or empty-crate oracles. Those live on [[purpose-crate-workspace]] and [[purpose-git-package]]. Do not repeat canvas-default or platform-view slot oracles. Those live on [[purpose-oem-hatch]]. Android view attach stays on [[slice-84-platform-view-hatch]].
5. **Wait**: Store names and formats. `SemanticsNode` dump. `measureText`. UIView and Android view attach. Public `AndroidView`. WebView class lists as product API. A general LLVM lowerer. Physical device tap as an oracle.

### Candidate A

Dedicated Android embedder in the existing crate. Thin Gradle shell. Engine canvas is the counter host.

#### Problem

[[location-49-android-embedder]] wants an Android host with no WebView and no JS engine. [[location-50-xcode-gradle-shells]] wants a thin Gradle shell. [[location-52-android-triples]] wants arm64-v8a plus x86_64 emulator in scope, and forbids treating emulator-only as done. [[location-43-native-canvas-host]] wants draw lists into the Rust engine as the native default. The desktop embedder already owns macOS plus winit. The iOS embedder already owns UIWindow and CADisplayLink behind `hosts/ios/`. The web counter is DOM. This repo must not fake LLVM.

#### Usage (caller's view)

```js
import { h, Signal } from "dragonflame-ui";

function Counter() {
  const n = new Signal(0);
  return h("text", { text: n });
}
```

The Android tracer does not import that JS into Hermes. A thin Gradle shell at `hosts/android/` links the embedder crate. The embedder owns an Activity and one Choreographer vsync. The engine owns the GPU surface. Tests run:

```
node --test tests/android-embedder/no-webview-no-js-engine.test.mjs
node --test tests/android-embedder/arm64-v8a-in-scope.test.mjs
node --test tests/android-embedder/counter-on-emulator.test.mjs
```

Callers do not import WebView. They do not import Hermes. They do not import TextView as the counter leaf. Android view attach is not this slice.

#### Shape

Public surface is the existing embedder crate plus a thin Gradle app target. Android window, vsync, and input stay behind that embedder. Engine crate still owns wgpu. Counter text is a packed scene draw list, same submit path as desktop and iOS. Complexity hidden: how Choreographer becomes one vsync, how the Gradle target links the shared lib, how emulator and arm64-v8a share one shell. Invariants: no WebView, no Hermes, JSC, or V8 as app runtime, tracing GC stays in the runtime crate, Android views are not the default host, no empty new crate.

#### Red flags

- **Shallow**: avoided. Callers get a host binary. Window and vsync policy stay in the embedder.
- **Leakage**: avoided if Android View types and Gradle settings stay inside the android module and shell. Exporting `TextView` as the counter API would leak.
- **Temporal**: one Android embedder owns window plus vsync plus input, not public open-activity then bind-vulkan then tick stages.
- **Pass-through**: a public `openAndroidWindow()` that only forwards winit would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green host honesty, then arm64-v8a in scope, then counter on emulator.

### Candidate B

Extend winit to Android. One window module for macOS and phone. Gradle shell optional or generated.

#### Problem

Same destinations. Candidate A splits Android window policy into a dedicated module. Candidate B would lift the desktop `compile_error` and treat Android as another winit target via cargo-ndk.

#### Usage (caller's view)

```
cargo ndk -t x86_64 -o app/src/main/jniLibs build -p embedder --bin vsync-window
```

The counter would be the desktop vsync bin on a phone. Callers keep winit event-loop types. A thin Gradle shell is leftover packaging, not the host.

#### Shape

One public window API across desktop and Android. Interface reuses winit. Location-50's Gradle shell is not the embedder. Android input and vsync leak as winit events. Emulator-only cargo targets can look done without arm64-v8a abiFilters.

#### Red flags

- **Shallow**: callers must know winit Android event-loop rules to finish one frame.
- **Leakage**: winit types become the Android product surface. Contradicts a per-OS embedder.
- **Temporal**: cargo-ndk build, then optional Gradle wrap, as public stages.
- **Pass-through**: Android module that only forwards winit `EventLoop` adds a layer without policy.

#### Next implementation step

Remove the macOS-only compile_error and teach winit Android. Contradicts [[location-50-xcode-gradle-shells]] thin Gradle shell as the Android host wrapper.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it makes winit the Android embedder and leaves the Gradle shell optional.

Tradeoffs accepted:

- We accept a native host binary for the counter, not compiling the JS demo through Hermes, in exchange for not faking LLVM.
- We accept Choreographer, Activity, SurfaceView to ANativeWindow, and `hosts/android/` as sitting defaults in exchange for freezing without a HITL name-the-shell task.
- We accept arm64-v8a in scope as ABI membership, not a physical-device tap, in exchange for every task staying AFK.
- We accept leaving Android view attach to [[slice-84-platform-view-hatch]] in exchange for proving canvas default on Android.

Alternatives considered:

- winit Android as the embedder: leaks window types and weakens the Gradle shell, lost.
- TextView or Android View as the counter leaf: rewrites [[location-43-native-canvas-host]] and [[rounds-01-chart-framework]] answer 6, lost.
- WebView plus no-Hermes slogan: rewrites [[location-49-android-embedder]] no WebView, lost.
- Emulator-only as done: rewrites [[location-52-android-triples]], lost.

Open questions and risks:

- None the product peer cannot answer from [[location-49-android-embedder]], [[location-50-xcode-gradle-shells]], [[location-52-android-triples]], [[location-43-native-canvas-host]], and [[rounds-01-chart-framework]].

Next implementation step: write purpose, contract, and test for the Android embedder, then red-green no WebView and no JS engine, then arm64-v8a in scope, then counter on emulator.

### Tracer bullets

1. Spec ladder for the Android embedder. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green no WebView and no JS engine. blocked_by: spec. AFK. Thin Gradle shell at `hosts/android/`. Embedder android module. No WebView. No Hermes, JSC, or V8 as the app runtime. Tracing GC stays.
3. Red-green arm64-v8a in scope. blocked_by: host honesty. AFK. `aarch64-linux-android` plus Gradle abiFilters arm64-v8a. Emulator-only is not done.
4. Red-green counter on Android emulator. blocked_by: host honesty and arm64-v8a in scope. AFK. Counter text through engine draw lists. Android View is not the default leaf.

## Confirm

Confirmed.
