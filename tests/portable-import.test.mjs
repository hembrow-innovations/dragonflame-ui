import assert from "node:assert/strict";
import { test } from "node:test";
import { compile, h, text } from "dragonflame-ui/portable";

test("portable Program compiles against the portability API", () => {
	function Counter() {
		return h(text, { text: "0" });
	}
	compile(`import { h, text } from "dragonflame-ui/portable";
function Counter() { return h(text, { text: "0" }); }`);
	assert.equal(Counter().type, text);
});
