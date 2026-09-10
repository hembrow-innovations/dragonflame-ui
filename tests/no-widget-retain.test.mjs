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

function isWidgetRetainPath(r) {
	return /widget/i.test(r);
}

function isWidgetRetainSource(src) {
	return /\b(?:Widget|StatefulWidget|StatelessWidget|InheritedWidget)\b/.test(src);
}

test("this checkout does not treat Flutter Widget as the retained node", () => {
	const files = walk(root).filter((path) => path !== self && !isNote(path));
	assert.deepEqual(
		files.filter((path) => isWidgetRetainPath(rel(path))),
		[],
	);
	assert.deepEqual(
		walk(join(root, "src")).filter((path) => isWidgetRetainSource(readFileSync(path, "utf8"))),
		[],
	);
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		[
			...Object.keys(pkg.dependencies ?? {}),
			...Object.keys(pkg.devDependencies ?? {}),
			...Object.keys(pkg.optionalDependencies ?? {}),
			...Object.keys(pkg.exports ?? {}),
		].filter((key) => /widget/i.test(key)),
		[],
	);
});
