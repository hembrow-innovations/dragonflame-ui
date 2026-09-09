import assert from "node:assert/strict";
import { test } from "node:test";
import { compile } from "dragonflame-ui/portable";

test("importing document from portable code hard-errors", () => {
	assert.throws(() => {
		compile(`import { document } from "dragonflame-ui/portable";`);
	});
});
