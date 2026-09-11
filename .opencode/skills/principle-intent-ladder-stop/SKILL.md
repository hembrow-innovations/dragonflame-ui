---
name: principle-intent-ladder-stop
description: "Apply when changing product behaviour or presentation, when purpose or contracts are missing, or when Open product questions is non-empty. AFK asserts a missing promise from location plus docs or the smallest reversible default. Do not contradict a locked promise."
disable-model-invocation: true
---

# Intent Ladder Stop

If purpose and contracts do not answer the question, assert a promise. AFK uses the location destination plus `docs/`, or the smallest reversible default. Do not contradict a locked promise.

**Why:** Prose that is not locked will drift. A plausible "just make it work" change is how agents invent a second product.

**Pattern:**

- Read purpose first. Out of scope is a hard fence.
- Name the contract promise ids the change must keep or edit.
- Empty ladder: AFK freeze still proceeds. The first drain task writes purpose, contract, and test from the location destination plus `docs/`, or the smallest reversible default. That asserts the promise.
- A non-empty Open product questions section: AFK product peer answers it in the same sitting with that default, then the heading becomes `(none)`.
- Changing behaviour means editing a promise line first, then the test, then the code.
- Do not "fix it so it just works" under an existing locked promise.

**AFK loops do not wait for a human.** Execution of a named promise proceeds. A missing promise is asserted as above. Do not contradict an existing promise.

**Delegate:** load `spec` for the folder, read order, and promise format. Load `vault-pack` for the pack. Do not restate them here.

**The test:** can you point at a promise id? If not, you are freestyling.
