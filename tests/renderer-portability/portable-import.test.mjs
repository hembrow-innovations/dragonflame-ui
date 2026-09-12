import assert from "node:assert/strict";
import { test } from "node:test";
import { h, text } from "dragonflame-ui/portable";
import * as portable from "dragonflame-ui/portable";

test("portable Program compiles against the portability API", () => {
	function Counter() {
		return h(text, { text: "0" });
	}
	assert.equal(Counter().type, text);
	assert.deepEqual(
		["Clock", "HostIO", "Metal", "Owner", "Signal", "StyleSheet", "compile", "createElement", "document", "render"].filter(
			(name) => name in portable,
		),
		[],
	);
});
