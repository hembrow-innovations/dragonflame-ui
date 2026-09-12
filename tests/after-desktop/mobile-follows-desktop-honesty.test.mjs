import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const skip = new Set([".git", "node_modules", "target"]);
const self = fileURLToPath(import.meta.url);
const embedderDir = join(root, "crates/embedder");
const embedderLib = join(embedderDir, "src/lib.rs");
const iosModule = join(embedderDir, "src/ios.rs");
const androidModule = join(embedderDir, "src/android.rs");
const iosHost = join(root, "hosts/ios");
const androidHost = join(root, "hosts/android");
const gate = /\b(AfterDesktop|mayStartMobile)\b/;
const mobileStart = /\bdragonflame_ios_start\b|\bJava_ui_dragonflame_host_MainActivity_onNativeSurface\b/;
const secondCrate = /honesty|after[-_]?desktop|may[-_]?start[-_]?mobile/i;

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

function productFiles() {
	return walk(root).filter((path) => path !== self && !isNote(path));
}

function rustSources(dir) {
	return walk(dir).filter((path) => path.endsWith(".rs"));
}

function cfgMod(src, cfg, name) {
	return new RegExp(
		String.raw`#\[cfg\(${cfg}\)\]\s*(?:pub\s+)?mod ${name}\b`,
	).test(src);
}

test("mobile follows desktop honesty", () => {
	assert.equal(existsSync(embedderLib), true);
	assert.equal(existsSync(iosModule), true);
	assert.equal(existsSync(androidModule), true);
	assert.equal(existsSync(join(iosHost, "scripts/build-embedder.mjs")), true);
	assert.equal(existsSync(join(androidHost, "scripts/build-embedder.mjs")), true);

	const lib = readFileSync(embedderLib, "utf8");
	assert.equal(
		cfgMod(lib, String.raw`not\(any\(target_os = "ios", target_os = "android"\)\)`, "vsync"),
		true,
	);
	assert.equal(
		cfgMod(lib, String.raw`not\(any\(target_os = "ios", target_os = "android"\)\)`, "window"),
		true,
	);
	assert.equal(cfgMod(lib, String.raw`target_os = "ios"`, "ios"), true);
	assert.equal(cfgMod(lib, String.raw`target_os = "android"`, "android"), true);
	assert.doesNotMatch(lib, /\bmod webview\b/);
	assert.doesNotMatch(lib, /#\[cfg\(not\(any\(target_os = "ios", target_os = "android"\)\)\)\]\s*(?:pub\s+)?mod (?:ios|android)\b/);

	const desktopSrc = rustSources(embedderDir)
		.filter((path) => !/\/(ios|android)\.rs$/.test(rel(path)))
		.map((path) => readFileSync(path, "utf8"))
		.join("\n");
	assert.doesNotMatch(desktopSrc, mobileStart);
	assert.match(readFileSync(iosModule, "utf8"), /\bdragonflame_ios_start\b/);
	assert.match(
		readFileSync(androidModule, "utf8"),
		/\bJava_ui_dragonflame_host_MainActivity_onNativeSurface\b/,
	);

	const crates = readdirSync(join(root, "crates")).filter((name) =>
		existsSync(join(root, "crates", name, "Cargo.toml")),
	);
	assert.deepEqual(
		crates.filter((name) => secondCrate.test(name)),
		[],
	);
	assert.doesNotMatch(readFileSync(join(root, "Cargo.toml"), "utf8"), secondCrate);
	assert.deepEqual(
		productFiles()
			.filter((path) => path.endsWith("Cargo.toml") && rel(path) !== "crates/embedder/Cargo.toml")
			.filter((path) => mobileStart.test(readFileSync(path, "utf8"))),
		[],
	);
	assert.deepEqual(
		productFiles()
			.filter((path) => path.endsWith(".rs") && !rel(path).startsWith("crates/embedder/"))
			.filter((path) => mobileStart.test(readFileSync(path, "utf8"))),
		[],
	);

	assert.match(readFileSync(join(iosHost, "scripts/build-embedder.mjs"), "utf8"), /-p", "embedder"/);
	assert.match(readFileSync(join(androidHost, "scripts/build-embedder.mjs"), "utf8"), /-p", "embedder"/);

	assert.equal("AfterDesktop" in ui, false);
	assert.equal("mayStartMobile" in ui, false);
	assert.deepEqual(
		productFiles()
			.filter((path) => /\.(rs|js|mjs)$/.test(path))
			.filter((path) =>
				/\bpub(?:\s*\([^)]*\))?\s+(?:struct|enum|type|fn|trait)\s+(?:AfterDesktop|mayStartMobile)\b/.test(
					readFileSync(path, "utf8"),
				),
			),
		[],
	);
	assert.deepEqual(
		productFiles()
			.filter((path) => path.endsWith(".js") || path.endsWith(".mjs"))
			.filter((path) => gate.test(readFileSync(path, "utf8"))),
		[],
	);
	const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
	assert.deepEqual(
		Object.keys(pkg.exports ?? {}).filter((key) => gate.test(key)),
		[],
	);
});
