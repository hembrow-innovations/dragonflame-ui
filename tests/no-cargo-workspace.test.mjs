import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skip = new Set([".git", "node_modules", "target"]);

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

function hasWorkspaceTable(src) {
	return src
		.split("\n")
		.some((line) => /^\s*\[workspace(?:\.[^\]]*)?\]/.test(line.split("#")[0]));
}

test("this checkout does not add a Cargo workspace while native is unfunded", () => {
	assert.deepEqual(
		walk(root)
			.filter((path) => path.endsWith("Cargo.toml"))
			.filter((path) => hasWorkspaceTable(readFileSync(path, "utf8"))),
		[],
	);
});
