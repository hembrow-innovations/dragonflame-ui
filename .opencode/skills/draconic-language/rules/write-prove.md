---
title: Prove with PATH draconic
impact: CRITICAL
impactDescription: Unchecked .drac is guesswork; this repo has no Compiler
tags: [write, cli, prove]
---

## Prove with PATH draconic

The installed `draconic` on PATH is the stable CLI. Confirm with `which draconic` and `draconic --version`. Parse, check, then emit. This product's default emit is js. `build` requires `--target js` or `--target native`. `run` defaults to js.

Do not `cargo run` the sibling checkout. That tree is in-development language docs and compiler source, not the prove tool. If `draconic` is missing from PATH, stop and install the CLI; do not build it from the live tree.

**Incorrect:** shipping hand-written JavaScript as the framework source of truth, treating `parse` as typecheck, or `cargo run -p draconic-cli` from `~/workbench/draconic`.

**Correct:**

```
which draconic
draconic --version
draconic parse src/foo.drac
draconic check src/foo.drac
draconic build --target js src/foo.drac -o dist/foo.js
draconic run src/foo.drac
```

**Notes.** Omit `-o` only for throwaway emit (`{stem}.out.js` / `{stem}.out`, gitignored). Pass `-o` when the artifact is kept. `draconic check` can accept a Program that `build --target js` will hard-error (native-only features). If a required construct cannot compile, file a GitHub issue on the draconic repo and stop. See `cli-build-requires-target`, `cli-run-default-js`, `cli-scratch-out-name`, `write-here`.
