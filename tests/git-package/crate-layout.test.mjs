import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
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

function emptyCrates() {
	return walk(root)
		.filter((path) => path.endsWith("Cargo.toml"))
		.filter((manifest) => {
			const rs = walk(dirname(manifest)).filter((path) => path.endsWith(".rs"));
			return rs.length === 0 || rs.every((path) => readFileSync(path, "utf8").trim() === "");
		});
}

test("the first package is the dragonflame-ui library", () => {
	const manifest = join(root, "package.json");
	assert.equal(existsSync(manifest), true);
	const pkg = JSON.parse(readFileSync(manifest, "utf8"));
	assert.equal(pkg.name, "dragonflame-ui");
});

test("there are no empty Rust crates", () => {
	assert.deepEqual(emptyCrates(), []);
});

test("tests live in spec-area subfolders", () => {
	assert.deepEqual(
		readdirSync(join(root, "tests")).filter((name) => name.endsWith(".test.mjs")),
		[],
	);
});
