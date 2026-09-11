---
id: "rounds-160-fund-native"
title: "Fund native UI"
kind: round
sitting_kind: planning
status: published
tags: []
created_at: "2026-09-11T12:00:00Z"
updated_at: "2026-09-11T12:00:00Z"
---

# Fund native UI

Counterpart is the user in chat. Notebook is this round.

Pick: [[location-18-native-engine-desktop]]. Native UI funded. Freeze [[slice-76-desktop-vsync-window]] and [[slice-77-draw-a-rect]]. [[slice-78-press-wins-arena]] and [[slice-79-oem-hatch-slot]] stay shaping. Do not invent window crate or later gesture APIs.

## Vault pack

Query: fund native UI; name first FFI scene command set; freeze desktop vsync and draw a rect
Area: ui-framework

Must read:

- `.heio/planning/intent.md`
- `.heio/planning/roadmap.md`
- `.heio/planning/locations/location-18-native-engine-desktop.md`
- `.heio/planning/locations/location-40-ffi-scene-commands.md`
- `.heio/planning/sprints/native-if-funded/shape.md`
- `docs/overview/overview-ui-framework.md`
- `docs/architecture/architecture-layer-cake.md`
- `docs/overview/glossary.md`

Related:

- `.heio/planning/tickets/ticket-61-native-ui-unfunded.md`
- `.heio/planning/tickets/ticket-66-ffi-commands-unnamed.md`
- `.heio/planning/locations/location-22-crate-layout.md`
- `.heio/planning/locations/location-36-engine-home.md`
- `.heio/planning/locations/location-39-desktop-embedder.md`

Excluded: mobile, JSX, scribble, rewriting location destinations.

Next: freeze two native-if-funded slices. Do not write `docs/specs/`; drain writes the ladder.

No packer script exists. Assembled by hand. Open product questions on the overview are empty.

## Round 1

### Questions

1. **Funding**: Whether native UI is funded so [[ticket-61-native-ui-unfunded]] can promote.
2. **Freeze grain**: Whether the whole native-if-funded sprint freezes, or only slices the vault can oracle without inventing.
3. **FFI set**: What the first FFI scene command set is. Locked: `extern "C"`, unboxed numbers and structs, in-process and synchronous, draw list recorded then submitted on the raster thread, not a second IR or bytecode.

### Answers

1. **Funding**: Funded. Promote [[ticket-61-native-ui-unfunded]]. Workspace may exist because native is funded. Engine home is this repo.
2. **Freeze grain**: Freeze [[slice-76-desktop-vsync-window]] and [[slice-77-draw-a-rect]]. Leave press-wins-arena and OEM hatch shaping.
3. **FFI set**: One packed scene struct with a colored rect. One `extern "C"` submit. Engine records the draw list and rasters. Not a begin, fill-rect, end, submit stream.

### Candidate A

One scene submit. Packed scene struct. One submit entry.

#### Problem

[[ticket-66-ffi-commands-unnamed]] blocks freeze of draw-a-rect. The set must be named without a second IR.

#### Usage (caller's view)

Framework builds one unboxed scene struct that holds a colored rect. It calls one `extern "C"` submit. Engine records a draw list and GPU-submits on the raster thread.

#### Why this shape

Smaller public surface. Callers do not coordinate begin, command, end. Matches draw-list recording behind the engine, not as a caller protocol.

### Candidate B

Begin, fill-rect, end, submit command stream.

#### Why rejected

Temporal decomposition. Callers coordinate stages. Architect red flag.

### Synthesis

Candidate A. First-tracer set is one packed scene struct with a colored rect and one `extern "C"` submit. Not a second IR. Not UI bytecode. Not JSI. Not platform channels.

Do not name a window crate here. That stays a HITL task on [[slice-76-desktop-vsync-window]].

## Confirm

Confirmed.

## Objectives

Record funding. Name the first FFI set. Freeze desktop vsync and draw a rect. Publish TDD tasks. Do not implement.

## Decisions so far

- Native UI is funded.
- First FFI set is one packed scene submit of a colored rect.
- [[slice-78-press-wins-arena]] and [[slice-79-oem-hatch-slot]] stay shaping.

## Not yet specified

- First desktop OS and window crate.
- Later FFI commands beyond one colored-rect scene submit.
- Gesture recognizer APIs.
- OEM widget class list.

## Out of scope

- Mobile embedders
- JSX
- Faking an LLVM lowerer
- Second IR or UI bytecode
- Web canvas host
