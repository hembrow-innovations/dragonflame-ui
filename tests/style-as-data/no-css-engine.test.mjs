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

function isCssEnginePath(r) {
	return (
		/css[-_]?engine/i.test(r) ||
		/stylis/i.test(r) ||
		/lightningcss/i.test(r) ||
		/styled[-_]?components/i.test(r) ||
		/(^|\/)emotion(\.|\/|$)/i.test(r) ||
		/(^|\/)postcss(\.|\/|$)/i.test(r)
	);
}

function isCssEngineSource(src) {
	return (
		/\bcssEngine\b/i.test(src) ||
		/\bcss[-_]?engine\b/i.test(src) ||
		/\bstylis\b/i.test(src) ||
		/\blightningcss\b/i.test(src) ||
		/\bstyled[-_]?components\b/i.test(src) ||
		/\bpostcss\b/i.test(src) ||
		/\bemotion\b/i.test(src)
	);
}

test("this checkout does not map style objects through a CSS engine product", () => {
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isCssEnginePath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => isCssEngineSource(readFileSync(path, "utf8"))),
		[],
	);
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		[
			...Object.keys(pkg.dependencies ?? {}),
			...Object.keys(pkg.devDependencies ?? {}),
			...Object.keys(pkg.optionalDependencies ?? {}),
			...Object.keys(pkg.exports ?? {}),
		].filter((key) => /css[-_]?engine|stylis|lightningcss|styled[-_]?components|(^|\/)emotion$|(^|\/)postcss$/i.test(key)),
		[],
	);
});
