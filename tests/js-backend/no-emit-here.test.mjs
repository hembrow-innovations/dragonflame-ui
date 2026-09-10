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

function isEmitPath(r) {
	return /js[-_]?emit/i.test(r) || /backend[-_]?js/i.test(r) || /(^|\/)emit(\.|\/|$)/i.test(r);
}

function isEmitSource(src) {
	return /js[-_]?emit|backend[-_]?js|emitJavaScript/i.test(src);
}

test("this repo does not copy JS emit from the sibling toolchain", () => {
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isEmitPath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => isEmitSource(readFileSync(path, "utf8"))),
		[],
	);
});
