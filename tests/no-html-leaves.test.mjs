import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skip = new Set([".git", "node_modules", "target"]);
const self = fileURLToPath(import.meta.url);
const htmlLeaf = "div|span|p|button|input|img|a|ul|li|section|article|header|footer|nav|main|label|form|textarea|select|table|html";

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

function isHtmlLeafPath(r) {
	return (
		/html[-_]?leaf/i.test(r) ||
		/(^|\/)html(\.|\/|$)/i.test(r) ||
		new RegExp(`(^|/)leaves/(?:${htmlLeaf})\\.`, "i").test(r)
	);
}

function isHtmlLeafSource(src) {
	return (
		/\bregisterLeaf\b/.test(src) ||
		/html[-_]?leaf/i.test(src) ||
		new RegExp(`\\bexport\\s+(?:const|let|var|function|class)\\s+(?:${htmlLeaf})\\b`).test(src) ||
		new RegExp(`\\bexport\\s*\\{[^}]*\\b(?:${htmlLeaf})\\b`).test(src) ||
		new RegExp(`(?:^|[{\\n,;])\\s*["']?(?:${htmlLeaf})["']?\\s*:`).test(src)
	);
}

test("this checkout does not add HTML leaves", () => {
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isHtmlLeafPath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => isHtmlLeafSource(readFileSync(path, "utf8"))),
		[],
	);
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		[
			...Object.keys(pkg.dependencies ?? {}),
			...Object.keys(pkg.devDependencies ?? {}),
			...Object.keys(pkg.optionalDependencies ?? {}),
			...Object.keys(pkg.exports ?? {}),
		].filter((key) => /html[-_]?leaf|(^|\/)(div|span|p|button|html)$/i.test(key)),
		[],
	);
});
