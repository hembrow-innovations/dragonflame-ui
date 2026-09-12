import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const here = dirname(fileURLToPath(import.meta.url));
const self = fileURLToPath(import.meta.url);

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function rel(path) {
	return relative(root, path).split("\\").join("/");
}

function isTaffyCasePath(r) {
	return /taffy/i.test(r);
}

function isTaffyCaseSource(src) {
	return /\btaffy\b/i.test(src) || /\bcompute_layout\b/.test(src) || /\bLayoutEngine\b/.test(src);
}

test("this tests location does not invent a Taffy test list", () => {
	assert.equal(rel(here), "tests/layout-tests");
	const files = walk(here).filter((path) => path !== self);
	assert.deepEqual(
		files.filter((path) => isTaffyCasePath(rel(path))),
		[],
	);
	assert.deepEqual(
		files.filter((path) => isTaffyCaseSource(readFileSync(path, "utf8"))),
		[],
	);
	assert.equal(existsSync(join(root, "tests/ffi-scene-commands/taffy-rect.test.mjs")), true);
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		[
			...Object.keys(pkg.dependencies ?? {}),
			...Object.keys(pkg.devDependencies ?? {}),
			...Object.keys(pkg.optionalDependencies ?? {}),
			...Object.keys(pkg.exports ?? {}),
		].filter((key) => /layoutengine|yoga/i.test(key)),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => /\bLayoutEngine\b|\bYoga\b/.test(readFileSync(path, "utf8"))),
		[],
	);
});
