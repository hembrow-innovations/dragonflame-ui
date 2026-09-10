import assert from "node:assert/strict";
import { test } from "node:test";
import { compile } from "dragonflame-ui/portable";

test("this checkout does not let a portable Program import Metal", () => {
	assert.throws(() => {
		compile(`import { Metal } from "dragonflame-ui/portable";`);
	});
});
