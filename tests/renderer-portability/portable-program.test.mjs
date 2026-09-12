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

test("a portable Program cannot import Metal or document directly", () => {
	function Counter() {
		return h(text, { text: "0" });
	}
	assert.equal(Counter().type, text);
	assert.deepEqual(
		["compile", "document", "Metal"].filter((name) => name in portable),
		[],
	);
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		Object.keys(pkg.exports).filter((key) => /Metal|document/.test(key)),
		[],
	);
	const fenceSrc = walk(portabilityDir)
		.filter(
			(path) =>
				path.endsWith(".drac") &&
				!path.includes("/web/") &&
				!path.includes("/native/") &&
				!path.includes("/gate/"),
		)
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.match(fenceSrc, /\bMetal\b/);
	assert.match(fenceSrc, /\bdocument\b/);
	assert.match(fenceSrc, /\bthrow\b/);
});
