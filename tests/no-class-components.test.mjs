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

function isClassComponentPath(r) {
	return /class[-_]?component/i.test(r) || /(^|\/)hooks(\.|\/|$)/i.test(r) || /(^|\/)Component\.(js|mjs|cjs|ts)$/.test(r);
}

function isClassComponentSource(src) {
	return /class\s+Component\b|extends\s+(?:React\.)?Component\b|\bPureComponent\b|\buse(?:State|Effect|Memo|Callback|Ref|Context|Reducer|LayoutEffect)\s*\(/.test(
		src,
	);
}

test("this checkout does not add class components for UI", () => {
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isClassComponentPath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => isClassComponentSource(readFileSync(path, "utf8"))),
		[],
	);
});
