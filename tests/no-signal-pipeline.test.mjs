import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skip = new Set([".git", "node_modules", "target"]);
const self = fileURLToPath(import.meta.url);
const pipeline =
	"constraint[-_]?layout|hit[-_]?test|layer[-_]?composit|gesture[-_]?arena|semantics";

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

function isSignalPipelinePath(r) {
	return (
		/layout[-_]?from[-_]?signal/i.test(r) ||
		new RegExp(`signal[-_]?(?:${pipeline})`, "i").test(r) ||
		new RegExp(`(?:${pipeline})[-_]?signal`, "i").test(r)
	);
}

function isSignalPipelineSource(src) {
	return (
		/\blayoutFromSignal\b/.test(src) ||
		/\bhitTestFromSignal\b/.test(src) ||
		/\bcompositeFromSignal\b/.test(src) ||
		/\bgestureArenaFromSignal\b/.test(src) ||
		/\bsemanticsFromSignal\b/.test(src) ||
		/\bSignal(?:ConstraintLayout|HitTest|Compositor|GestureArena|Semantics)\b/.test(src)
	);
}

test("this checkout does not use signals as constraint layout, hit-test, layer compositing, gesture arena, or semantics", () => {
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isSignalPipelinePath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => isSignalPipelineSource(readFileSync(path, "utf8"))),
		[],
	);
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		[
			...Object.keys(pkg.dependencies ?? {}),
			...Object.keys(pkg.devDependencies ?? {}),
			...Object.keys(pkg.optionalDependencies ?? {}),
			...Object.keys(pkg.exports ?? {}),
		].filter((key) =>
			new RegExp(`layout[-_]?from[-_]?signal|signal[-_]?(?:${pipeline})|(?:${pipeline})[-_]?signal`, "i").test(key),
		),
		[],
	);
});
