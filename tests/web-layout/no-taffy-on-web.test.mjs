import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
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

function rel(path) {
	return relative(root, path).split("\\").join("/");
}

function isNote(path) {
	const r = rel(path);
	return r.startsWith("docs/") || r.startsWith(".heio/") || r.startsWith(".opencode/");
}

function isTaffyOnWebPath(r) {
	return /taffy/i.test(r);
}

function isTaffyOnWebSource(src) {
	return /\btaffy\b/i.test(src);
}

test("this checkout does not force Taffy on web", () => {
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isTaffyOnWebPath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => isTaffyOnWebSource(readFileSync(path, "utf8"))),
		[],
	);
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		[
			...Object.keys(pkg.dependencies ?? {}),
			...Object.keys(pkg.devDependencies ?? {}),
			...Object.keys(pkg.optionalDependencies ?? {}),
			...Object.keys(pkg.exports ?? {}),
		].filter((key) => /taffy/i.test(key)),
		[],
	);
});
