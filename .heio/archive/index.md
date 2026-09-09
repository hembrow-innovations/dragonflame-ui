# Archive

One-liners of what landed. Newest first.

- **task-101-red-green-raf**: rAF animation clock in the Framework library; ticks from requestAnimationFrame; signals are not the ticker.
- **task-100-spec-raf**: rAF clocks spec ladder; framework clocks, web vsync is requestAnimationFrame, signals do not replace tickers.
- **task-99-red-green-testid**: first-class test ID and a11y props; pressable found by test ID.
- **task-98-spec-testid**: a11y and test ID spec ladder; first-class props on web leaves.
- **task-97-red-green-input-pressable**: text input and pressable render on DOM; closed set complete.
- **task-96-red-green-image-scroll**: image and scroll leaves render on DOM.
- **task-95-red-green-view-text-style**: view and text on DOM with CSS and StyleSheet-shaped style.
- **task-94-spec-leaf-kit**: leaf kit spec ladder; closed set, CSS on web, StyleSheet-shaped style, host config at leaves, text is a leaf.
- **task-93-red-green-unmount**: unmount disposes effects and nested owners.
- **task-92-spec-owner**: owner spec ladder; unmount disposes effects and nested owners.
- **task-91-red-green-signal-patch**: ui.Signal write patches DOM text; component runs once.
- **task-90-red-green-static-h**: static h() text on DOM.
- **task-89-spec-counter**: counter spec ladder; run-once, ui.Signal, hyperscript, DOM only, JS backend.
- **task-88-green-package-import**: dragonflame-ui git package imports; no empty Rust crates.
- **task-87-red-package-import**: red tests for dragonflame-ui import and crate layout.
- **task-86-spec-git-package**: spec ladder for the dragonflame-ui git package.
- **ticket-16-gpu-library** — wgpu when native is funded.
- **ticket-15-crate-layout** — dragonflame-ui library first; no empty Rust crates; workspace when native is funded.
- **ticket-14-engine-home** — Rust engine lives in this repo; split later only if it hurts.
- **ticket-13-package-name** — git package name is dragonflame-ui; folder and repo match.
- **ticket-12-windowing-gpu** — embedder owns window; engine owns GPU; no Skia; no Flutter embedder.
- **ticket-11-public-site** — public site stays TanStack Start; not a rewrite destination.
- **ticket-10-threading** — framework on the Runtime job queue; engine raster and IO threads allowed; no shared signals.
- **ticket-09-mobile-packaging** — after desktop: thin Xcode and Gradle shells; iOS arm64 plus simulator; Android arm64-v8a plus x86_64 emulator.
- **ticket-08-layout-algorithm** — Taffy in the Rust engine; web keeps CSS.
- **ticket-07-native-default** — custom Rust engine; OEM widgets are an escape hatch.
- **ticket-06-web-renderer** — web is DOM only; never a canvas host.
- **ticket-05-jsx-vs-hyperscript** — hyperscript first; no JSX until a later human decision.
- **ticket-04-no-js-runtime** — no JS engine on native; tracing GC stays.
- **ticket-03-language-vs-library** — library product in this repo, not a language feature.
- **ticket-02-working-name** — working product name, folder, package, and repo are dragonflame-ui.
- **heio-planning-seed** — planning tree seeded from the UI-framework scribble; no completed work yet.
