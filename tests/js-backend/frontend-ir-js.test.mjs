import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const skip = new Set([".git", "node_modules", "target"]);
const self = fileURLToPath(import.meta.url);
const leaked = /^(compile|Frontend|IR)$/;
const pipelineType =
	/\b(?:export\s+(?:default\s+)?(?:class|function|const|let|var)\s+|class\s+|function\s+)(?:Frontend|IR)\b/;

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

function isPipelinePath(r) {
	return /(^|\/)frontend(\.|\/|$)/i.test(r) || /(^|\/)compile[-_]?(api|helper)(\.|\/|$)/i.test(r);
}

test("web compile is Frontend to shared IR to the JS backend, and the browser runs that JavaScript", () => {
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.equal(pkg.name, "dragonflame-ui");
	assert.equal(pkg.type, "module");
	assert.match(pkg.exports["."], /\.m?js$/);
	assert.deepEqual(
		Object.values(pkg.exports ?? {}).filter((target) => !/\.m?js$/.test(target)),
		[],
	);
	assert.deepEqual(Object.keys(ui).filter((key) => leaked.test(key)), []);
	assert.deepEqual(
		Object.keys(pkg.exports ?? {}).filter((key) => leaked.test(key.replace(/^\.\//, ""))),
		[],
	);
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isPipelinePath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => pipelineType.test(readFileSync(path, "utf8"))),
		[],
	);
});
