---
id: "rounds-132-crate-workspace-honesty"
title: "Crate workspace honesty"
kind: round
sitting_kind: planning
status: published
tags: [afk-plan, design-tree]
created_at: "2026-09-10T10:15:00Z"
updated_at: "2026-09-10T10:15:00Z"
---

# Crate workspace honesty

Counterpart is the product peer. Notebook is this round.

Pick: [[location-22-crate-layout]]. Nested workspace honesty. Library first and no empty crates are named by [[slice-69-importable-package]]. Remaining unnamed nested bet: a Cargo workspace exists only when native is funded. Engine home stays [[location-36-engine-home]] and unfunded. [[location-17-web-component-library]] is funded. Sprint [[web-tracers]] may freeze. Open tickets are parked. Native and mobile sprints say do not freeze. [[location-20-authoring-sugar]] is unlinked but already covered by [[slice-85-first-version-without-sugar]]. [[location-21-git-package]] public-site nested grain is already locked by git-package oracles. [[location-23-components]] model honesty is named by [[slice-125-component-model-honesty]]. [[location-24-signals]] dirtying honesty is named by [[slice-129-signal-dirtying-honesty]].

## Vault pack

Query: Cargo workspace only when native is funded; do not treat a Cargo toolchain workspace as this UI product
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-22-crate-layout.md`
- `.heio/planning/locations/location-17-web-component-library.md`
- `.heio/planning/sprints/web-tracers/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`
- `docs/specs/ui-framework/git-package/purpose.md`
- `docs/specs/ui-framework/git-package/contract.md`

Related:

- `.heio/planning/sprints/web-tracers/slice-69-importable-package.md`
- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-36-engine-home.md`
- `.heio/planning/tickets/ticket-61-native-ui-unfunded.md`

Excluded: native window work, parked tickets as freeze targets, scribble.

Next: freeze one web-tracers slice for crate workspace honesty. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview and the matching purpose files are empty.

## Round 1

### Questions

1. **Next grain**: What vertical cut under [[location-22-crate-layout]] is still unnamed by a slice.
2. **Workspace later**: What that means on web while native is unfunded.
3. **Empty crates**: Whether workspace honesty repeats no-empty-crate oracles.
4. **Engine home**: Whether engine-in-this-repo is this slice.
5. **Public surface**: Whether callers get a workspace helper or Cargo members.

### Answers

1. **Next grain**: A Cargo workspace exists only when native is funded. Do not treat a Cargo toolchain workspace as this UI product. Library first and no empty crates already have oracles.
2. **Workspace later**: No `[workspace]` Cargo manifest in this checkout while [[ticket-61-native-ui-unfunded]] is parked. Architecture: must not treat a Cargo toolchain workspace as this UI product. Do not copy the sibling draconic workspace here.
3. **Empty crates**: Do not repeat. [[slice-69-importable-package]] O2 already locks no empty Rust crates.
4. **Engine home**: Out. [[location-36-engine-home]] is native-parented. Do not freeze engine split or engine-in-toolchain oracles here.
5. **Public surface**: None. Callers keep the dragonflame-ui git package. No public workspace API.

### Candidate A

Absence oracles. No new public API.

#### Problem

The git package already imports. Nested workspace honesty is unnamed: a Cargo workspace only when native is funded, and this checkout is not a Cargo toolchain workspace. [[slice-69-importable-package]] proves library first and no empty crates.

#### Usage (caller's view)

```js
import { h, render } from "dragonflame-ui";
```

Callers do not import a workspace. They do not open a Cargo.toml to use the library. Native crates stay absent until funded.

#### Shape

Public surface stays the existing git package. Honesty lives in tests that fail if this checkout adds a Cargo `[workspace]` while native is unfunded, or treats a Cargo toolchain workspace as this UI product. Complexity hidden: when a workspace is allowed versus when the JS library is the product. Invariants: no workspace now; no public workspace helper; do not repeat empty-crate oracles.

#### Red flags

- **Shallow**: avoided. Callers still import `dragonflame-ui`. Workspace policy stays behind tests.
- **Leakage**: avoided if tests do not export a crate path or workspace type.
- **Temporal**: one product layout, not a load-then-workspace-then-library pipeline.
- **Pass-through**: a public `workspace()` that only forwards `package.json` would be a pass-through. Do not add it.

#### Next implementation step

Spec ladder, then red-green absence tests for no Cargo workspace and no toolchain workspace as this UI product.

### Candidate B

Public Cargo workspace now. Callers depend on workspace members.

#### Problem

Same destinations, but Candidate A never shows a workspace. Candidate B would add `Cargo.toml` with `[workspace]` and a public `crates` entry.

#### Usage (caller's view)

```toml
[workspace]
members = ["crates/dragonflame-ui", "crates/engine"]
```

```js
import { workspace } from "dragonflame-ui";
workspace().members;
```

A later call could add empty engine members.

#### Shape

A public workspace and crate members. Callers coordinate library and engine paths. Interface grows by a Cargo layout the web package does not need. Native funding becomes a named path even if unimplemented. Workspace-later is a runtime default instead of a locked absence.

#### Red flags

- **Shallow**: callers pass workspace members to complete an import they already have.
- **Leakage**: Cargo workspace shape and toolchain crate layout leak into app code.
- **Temporal**: add workspace, then members, then library, as public stages.
- **Pass-through**: `workspace()` forwards package identity already proven by git-package tests.

#### Next implementation step

Add Cargo.toml `[workspace]`. Invents layout. Contradicts location-22 workspace-later and architecture toolchain-workspace fence.

## Synthesis

Base is Candidate A. Graft from B nothing. Reject B as the slice shape: it invents a Cargo workspace before native is funded.

Tradeoffs accepted:

- We accept absence oracles in exchange for no public workspace API.
- We accept not repeating empty-crate oracles in exchange for workspace-table absence checks.
- We accept leaving engine home on [[location-36-engine-home]] in exchange for not freezing native crate tasks.

Alternatives considered:

- Public Cargo workspace plus members: leaks toolchain layout and names unfunded native crates, lost.
- Folding these oracles into [[slice-69-importable-package]]: that slice already active as library-first and no empty crates, lost.
- Freezing engine-home split oracles: parent unfunded and would rewrite a native destination grain, lost.

Open questions and risks:

- None the product peer cannot answer from location destinations and `docs/`. Native workspace stay out until [[ticket-61-native-ui-unfunded]] is promoted.

Next implementation step: write purpose, contract, and test for crate workspace honesty, then red-green absence tests.

### Tracer bullets

1. Spec ladder for crate workspace honesty. blocked_by: none. AFK. Purpose, contract, and test only. No product code.
2. Red-green crate workspace honesty. blocked_by: spec. AFK. Tests fail if this checkout adds a Cargo `[workspace]` while native is unfunded, or treats a Cargo toolchain workspace as this UI product.

## Confirm

Confirmed.

Destination: [[location-22-crate-layout]] nested workspace later, and this checkout is not a Cargo toolchain workspace. Not a rewrite of the parent sentence.

Slice Done: tests fail if this checkout adds a Cargo `[workspace]` while native is unfunded, or treats a Cargo toolchain workspace as this UI product. No public workspace API.

Prefer AFK. Prefactoring is not required. First task is the spec ladder.
