import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const skip = new Set([".git", "node_modules", "target"]);
const self = fileURLToPath(import.meta.url);

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		if (skip.has(name)) continue;
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

test("a Cargo workspace may exist because native is funded", () => {
	assert.deepEqual(
		walk(join(root, "tests"))
			.filter((path) => path.endsWith(".test.mjs") && path !== self)
			.filter((path) =>
				/\[workspace(?:\.[^\]]*)?\]/.test(readFileSync(path, "utf8")),
			),
		[],
	);
});
