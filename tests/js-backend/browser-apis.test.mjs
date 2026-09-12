import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const skip = new Set([".git", "node_modules", "target"]);
const self = fileURLToPath(import.meta.url);
const leaked = /^(catalog|BrowserAPI|compile)$/;
const namedSet =
	/\b(?:export\s+(?:default\s+)?(?:class|function|const|let|var)\s+|class\s+|function\s+)(?:catalog|BrowserAPI|compile)\b/;

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

function isCatalogPath(r) {
	return (
		/api[-_]?catalog/i.test(r) ||
		/browser[-_]?api/i.test(r) ||
		/(^|\/)catalog(\.|\/|$)/i.test(r) ||
		/(^|\/)compile[-_]?(api|helper)(\.|\/|$)/i.test(r)
	);
}

test("that package uses browser APIs. The source does not name the API set", () => {
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.equal(pkg.name, "dragonflame-ui");
	assert.equal(pkg.type, "module");
	assert.match(pkg.exports["."], /\.m?js$/);
	assert.notEqual(Object.keys(ui).length, 0);
	assert.deepEqual(Object.keys(ui).filter((key) => leaked.test(key)), []);
	assert.deepEqual(
		Object.keys(pkg.exports ?? {}).filter((key) => leaked.test(key.replace(/^\.\//, ""))),
		[],
	);
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isCatalogPath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => namedSet.test(readFileSync(path, "utf8"))),
		[],
	);
});
