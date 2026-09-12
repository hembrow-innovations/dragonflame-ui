import assert from "node:assert/strict";
import { test } from "node:test";
import { compile } from "./compile.mjs";

test("importing document from portable code hard-errors", () => {
	assert.throws(() => {
		compile(`import { document } from "dragonflame-ui/portable";`);
	});
});
