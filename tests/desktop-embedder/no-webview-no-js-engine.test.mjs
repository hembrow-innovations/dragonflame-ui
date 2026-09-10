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

function isOracle(path) {
	return path.endsWith(".test.mjs");
}

function codeFiles() {
	return walk(root).filter((path) => path !== self && !isNote(path) && !isOracle(path));
}

function nativeSources() {
	return [
		...walk(join(root, "src")),
		...walk(root).filter((path) => path.endsWith(".rs") && !isNote(path)),
		...walk(root).filter((path) => path.endsWith("Cargo.toml") && !isNote(path)),
	];
}

function pkgKeys() {
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	return [
		...Object.keys(pkg.dependencies ?? {}),
		...Object.keys(pkg.devDependencies ?? {}),
		...Object.keys(pkg.optionalDependencies ?? {}),
		...Object.keys(pkg.exports ?? {}),
	];
}

function isWebViewPath(r) {
	return /webview|wkwebview|tauri|chromium[-_ ]?embed/i.test(r);
}

function isWebViewSource(src) {
	return /wkwebview|chromium embedded|tauri[-_]?webview|\bwebview\b|\btauri\b/i.test(src);
}

function isJsEnginePath(r) {
	return /hermes|javascriptcore|(^|\/|[-_])jsc([-_.\/]|$)|(^|\/|[-_])v8([-_.\/]|$)/i.test(r);
}

function isJsEngineSource(src) {
	return /\bhermes\b|\bjavascriptcore\b|\bjsc\b|\bv8\b/i.test(src);
}

function dropsTracingGc(src) {
	return /throw away tracing gc|no tracing gc/i.test(src);
}

test("desktop native is not a WebView shell", () => {
	assert.deepEqual(
		codeFiles().filter((path) => isWebViewPath(rel(path))),
		[],
	);
	assert.deepEqual(
		nativeSources().filter((path) => isWebViewSource(readFileSync(path, "utf8"))),
		[],
	);
	assert.deepEqual(
		pkgKeys().filter((key) => isWebViewPath(key)),
		[],
	);
});

test("desktop native has no Hermes, JSC, or V8", () => {
	assert.deepEqual(
		codeFiles().filter((path) => isJsEnginePath(rel(path))),
		[],
	);
	assert.deepEqual(
		nativeSources().filter((path) => isJsEngineSource(readFileSync(path, "utf8"))),
		[],
	);
	assert.deepEqual(
		pkgKeys().filter((key) => isJsEnginePath(key)),
		[],
	);
	assert.deepEqual(
		nativeSources().filter((path) => dropsTracingGc(readFileSync(path, "utf8"))),
		[],
	);
});
