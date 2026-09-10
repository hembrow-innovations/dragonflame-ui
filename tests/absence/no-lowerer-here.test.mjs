import assert from "node:assert/strict";
import { readdirSync, statSync } from "node:fs";
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

test("this repo does not fake a general LLVM lowerer", () => {
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => /lowerer/i.test(rel(path)) || /llvm/i.test(rel(path))),
		[],
	);
	assert.deepEqual(
		files.filter((path) => /\.tsx?$/.test(path) || /typescript/i.test(rel(path))),
		[],
	);
	assert.deepEqual(
		files.filter((path) => /(^|\/)ir(\/|$|\.)/i.test(rel(path)) || /ui-ir/i.test(rel(path))),
		[],
	);
	assert.deepEqual(
		files.filter((path) => /bytecode/i.test(rel(path)) || /(^|\/)vm(\/|$|\.)/i.test(rel(path))),
		[],
	);
});
