import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const skip = new Set([".git", "node_modules", "target"]);
const toolchain = "~/workbench/draconic";

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

function uncomment(src) {
	return src
		.split("\n")
		.map((line) => line.split("#")[0])
		.join("\n");
}

function pullsToolchain(src) {
	return /\bdraconic\b/.test(uncomment(src));
}

test("this checkout does not treat a Cargo toolchain workspace as this UI product", () => {
	assert.notEqual(root, toolchain);
	assert.notEqual(basename(root), "draconic");
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.equal(pkg.name, "dragonflame-ui");
	assert.deepEqual(
		walk(root)
			.filter((path) => path.endsWith("Cargo.toml"))
			.filter((path) => pullsToolchain(readFileSync(path, "utf8"))),
		[],
	);
});
