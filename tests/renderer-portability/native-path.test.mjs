import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { h, text } from "dragonflame-ui/portable";
import * as portable from "dragonflame-ui/portable";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const portabilityDir = join(root, "src/portability");

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

test("native path uses extern C and unboxed numbers and structs", () => {
	function Counter() {
		return h(text, { text: "0" });
	}
	assert.equal(Counter().type, text);
	assert.deepEqual(
		["Scene", "Rect", "Color", "JSI", "jsi", "HostObject", "NativeModules", "TurboModule", "Platform"].filter(
			(name) => name in portable,
		),
		[],
	);
	const surfaceSrc = readFileSync(join(portabilityDir, "surface.js"), "utf8");
	assert.doesNotMatch(surfaceSrc, /extern "C"/);
	const mappingSrc = walk(portabilityDir)
		.filter((path) => path.endsWith(".drac"))
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.match(mappingSrc, /extern "C"/);
	assert.match(mappingSrc, /\b(?:i32|i64|f32|f64)\b/);
	assert.match(mappingSrc, /\btype\s+\w+\s*=\s*\{/);
});
