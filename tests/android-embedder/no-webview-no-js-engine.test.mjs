import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const hostDir = join(root, "hosts/android");
const embedderDir = join(root, "crates/embedder");
const androidModule = join(embedderDir, "src/android.rs");
const embedderLib = join(embedderDir, "src/lib.rs");
const self = fileURLToPath(import.meta.url);

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function rel(path) {
	return relative(root, path).split("\\").join("/");
}

function androidNativeFiles() {
	assert.equal(existsSync(hostDir), true);
	assert.equal(existsSync(androidModule), true);
	assert.equal(existsSync(embedderLib), true);
	return [...walk(hostDir), androidModule, embedderLib].filter((path) => path !== self);
}

function hostSources() {
	return androidNativeFiles().map((path) => ({ path, src: readFileSync(path, "utf8") }));
}

function isWebViewPath(r) {
	return /webview|webkit|cordova|capacitor|\bexpo\b|chromium/i.test(r);
}

function isWebViewSource(src) {
	return /webview|webkit|cordova|capacitor|\bexpo\b|chromium/i.test(src);
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

test("Android native is not a WebView shell", () => {
	const files = androidNativeFiles();
	assert.equal(
		files.some((path) => rel(path).endsWith("hosts/android/settings.gradle.kts")),
		true,
	);
	assert.match(readFileSync(embedderLib, "utf8"), /\bmod android\b/);
	assert.equal(
		hostSources().some(({ src }) => /(?:-p[\s",]+embedder|-lembedder|\bembedder\b)/.test(src)),
		true,
	);
	assert.deepEqual(
		files.filter((path) => isWebViewPath(rel(path))),
		[],
	);
	assert.deepEqual(
		hostSources().filter(({ src }) => isWebViewSource(src)).map(({ path }) => path),
		[],
	);
});

test("Android native has no Hermes, JSC, or V8", () => {
	const files = androidNativeFiles();
	assert.deepEqual(
		files.filter((path) => isJsEnginePath(rel(path))),
		[],
	);
	assert.deepEqual(
		hostSources().filter(({ src }) => isJsEngineSource(src)).map(({ path }) => path),
		[],
	);
	assert.deepEqual(
		hostSources().filter(({ src }) => dropsTracingGc(src)).map(({ path }) => path),
		[],
	);
});
