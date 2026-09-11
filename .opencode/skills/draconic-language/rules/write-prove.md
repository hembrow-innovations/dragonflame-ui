---
title: Prove with the sibling CLI
impact: CRITICAL
impactDescription: Unchecked .drac is guesswork; this repo has no Compiler
tags: [write, cli, prove]
---

## Prove with the sibling CLI

Language truth and the `draconic` binary live in `~/workbench/draconic`. Parse, check, then emit. This product's default emit is js. `build` requires `--target js` or `--target native`. `run` defaults to js.

**Incorrect:** shipping hand-written JavaScript as the framework source of truth, or treating `parse` as typecheck.

**Correct:**

```
draconic parse src/foo.drac
draconic check src/foo.drac
draconic build --target js src/foo.drac -o dist/foo.js
draconic run src/foo.drac
```

If `draconic` is not on `PATH`, from the sibling checkout: `cargo run -p draconic-cli -- check src/foo.drac`.

**Notes.** Omit `-o` only for throwaway emit (`{stem}.out.js` / `{stem}.out`, gitignored). Pass `-o` when the artifact is kept. `draconic check` can accept a Program that `build --target js` will hard-error (native-only features). If a required construct cannot compile, file a GitHub issue on the draconic repo and stop. See `cli-build-requires-target`, `cli-run-default-js`, `cli-scratch-out-name`, `write-here`.
