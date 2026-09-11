import assert from "node:assert/strict";
import { test } from "node:test";
import * as ui from "dragonflame-ui";
import { loadFont, measureText } from "dragonflame-ui";

test("measureText is per-host and loadFont is not on the UI thread", () => {
	assert.equal("Paragraph" in ui, false);
	assert.equal("TextPainter" in ui, false);
	assert.equal(typeof measureText, "function");
	assert.equal(typeof loadFont, "function");

	const text = "Hello";
	const dom = measureText({ text, host: "dom" });
	const uikit = measureText({ text, host: "uikit", css: "font-size: 99px; width: 1px" });
	const engine = measureText({ text, host: "engine" });
	const uikitPlain = measureText({ text, host: "uikit" });

	assert.equal(dom.host, "dom");
	assert.equal(uikit.host, "uikit");
	assert.equal(engine.host, "engine");
	assert.equal(typeof dom.width, "number");
	assert.equal(typeof uikit.width, "number");
	assert.equal(typeof engine.width, "number");
	assert.notEqual(dom.width, uikit.width);
	assert.notEqual(uikit.width, engine.width);
	assert.notEqual(dom.width, engine.width);
	assert.deepEqual(uikit, uikitPlain);
	assert.equal("css" in uikit, false);

	const loaded = loadFont({ family: "Inter", source: "inter.ttf" });
	assert.equal(loaded.thread, "io");
	assert.notEqual(loaded.thread, "ui");
	assert.equal(loaded.family, "Inter");
});
