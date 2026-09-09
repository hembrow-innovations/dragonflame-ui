---
id: "ticket-63-do-not-fake-llvm"
title: "Do not fake a general LLVM lowerer here"
kind: ticket
status: parked
ticket_type: observation
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# Do not fake a general LLVM lowerer here

## Signal

A general LLVM lowerer is a toolchain problem. This repo must not fake it, emit TypeScript, fork IR, or ship Draconic bytecode on a VM.

## Fit

Never promotes into a lowerer task here. If the toolchain grows a lowerer, that sitting lives in the sibling draconic checkout.

## Notes

[[location-59-llvm-lowerer]]. Absence locked by [[slice-85-first-version-without-sugar]].
