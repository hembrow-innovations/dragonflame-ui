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

function isCssLanguagePath(r) {
	return (
		/parse[-_]?css/i.test(r) ||
		/css[-_]?language/i.test(r) ||
		/tagged[-_]?css/i.test(r) ||
		/(^|\/)css(\.|\/|$)/i.test(r)
	);
}

function isCssLanguageSource(src) {
	return (
		/\bparseCss\b/.test(src) ||
		/\bcssText\b/.test(src) ||
		/\bcss\s*`/.test(src) ||
		/\bexport\s+(?:async\s+)?(?:const|let|var|function|class)\s+css\b/.test(src) ||
		/\bexport\s*\{[^}]*\bcss\b/.test(src)
	);
}

test("this checkout does not treat style as a CSS language in the framework", () => {
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isCssLanguagePath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => isCssLanguageSource(readFileSync(path, "utf8"))),
		[],
	);
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		[
			...Object.keys(pkg.dependencies ?? {}),
			...Object.keys(pkg.devDependencies ?? {}),
			...Object.keys(pkg.optionalDependencies ?? {}),
			...Object.keys(pkg.exports ?? {}),
		].filter((key) => /parse[-_]?css|(^|\/)css$|css[-_]?language|tagged[-_]?css/i.test(key)),
		[],
	);
});
