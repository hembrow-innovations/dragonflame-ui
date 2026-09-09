import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
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

function isWasmWebPath(r) {
	return (
		/\.wasm$/i.test(r) ||
		/canvaskit/i.test(r) ||
		/skwasm/i.test(r) ||
		/webassembly/i.test(r) ||
		/(^|\/)wasm(\.|\/|$)/i.test(r)
	);
}

function isWasmWebSource(src) {
	return /canvaskit|skwasm|webassembly|engine-in-wasm/i.test(src);
}

test("this checkout does not add CanvasKit, Skwasm, or engine-in-WASM as web UI", () => {
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isWasmWebPath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => isWasmWebSource(readFileSync(path, "utf8"))),
		[],
	);
});
