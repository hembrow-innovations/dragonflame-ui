---
name: tdd
description: TDD for cargo and `.drac`. Use when writing crate `#[test]` or Draconic `describe`/`it`, or when another skill needs red-green.
---

# Test-Driven Development

TDD is the red → green loop for **Rust crates** and **Draconic Programs**. Red is `cargo test` or `draconic test` failing. Every section applies on every cycle.

Load **rust-development** when the seam is a crate. Load **draconic-language** when the seam is a `.drac` Program.

Match test names to `docs/overview/glossary.md` and ADRs in the area.

## Loop

1. Name the seam (crate public fn, or `.drac` export). Done when that boundary is written down. AFK drain: the Agent Brief and named promise ids are the seams.
2. Write one failing test at that seam. Done when `cargo test -p <crate>` or `draconic test <path>` is red on that case.
3. Write only enough code to pass it. Done when that same command is green.
4. Next slice. Refactor is review, not this loop.

Crate units live in the same `.rs` file (`#[cfg(test)]`). `.drac` suites live under `tests/<spec-area>/`.

## What a good test is

Tests verify behavior through public interfaces. A good test reads like a specification ("submit records a colored rect") and survives refactors because it does not care about internal structure.

See [tests.md](tests.md) for examples and [mocking.md](mocking.md) for boundary doubles. When the seam is a crate, copy the Rust examples. When the seam is a Program, copy the Draconic examples.

## Seams

A **seam** is the public boundary you test at. Tests live at seams.

**Test only at pre-agreed seams.** Before writing any test, write down the seams under test. AFK drain: do not ask the user. A live user sitting may still confirm seams in chat.

## Anti-patterns

- **Implementation-coupled**: doubles internal collaborators, tests private items, or verifies through a side channel. The tell: the test breaks when you refactor but behavior has not changed.
- **Tautological**: the assertion recomputes the expected value the way the code does, so it passes by construction. Expected values come from a known-good literal, a worked example, or the spec.
- **Horizontal slicing**: writing all tests first, then all implementation. Work in **vertical slices** instead: one test → one implementation → repeat, each test a **tracer bullet**.

## Rules of the loop

- **Red before green.** Write the failing test first, then only enough code to pass it.
- **One slice at a time.** One seam, one test, one minimal implementation per cycle.
- **Refactoring is not part of the loop.** It belongs to the review stage.
