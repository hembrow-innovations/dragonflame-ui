import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const hostDir = join(root, "hosts/android");
const engineDir = join(root, "crates/engine");
const embedderDir = join(root, "crates/embedder");
const androidModule = join(embedderDir, "src/android.rs");
const runner = join(hostDir, "scripts/run-counter-emulator.mjs");

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		if (name === "target" || name === "build" || name === ".gradle") continue;
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...walk(path));
		else out.push(path);
	}
	return out;
}

function rustSources(dir) {
	return walk(dir).filter((path) => path.endsWith(".rs"));
}

function rel(path) {
	return relative(root, path).split("\\").join("/");
}

function readAll(paths) {
	return paths.map((path) => readFileSync(path, "utf8")).join("\n");
}

test("counter text shows on Android emulator through engine draw lists", () => {
	assert.equal(existsSync(join(hostDir, "settings.gradle.kts")), true);
	assert.equal(existsSync(androidModule), true);
	assert.match(readFileSync(join(embedderDir, "src/lib.rs"), "utf8"), /\bmod android\b/);

	const hostSrc = readAll(walk(hostDir));
	const androidSrc = readFileSync(androidModule, "utf8");
	const engineSrc = readAll(rustSources(engineDir));
	const embedderSrc = readAll(rustSources(embedderDir));

	assert.match(hostSrc, /\bActivity\b/);
	assert.match(androidSrc, /\bAChoreographer_/);
	assert.match(hostSrc, /\bSurfaceView\b/);
	assert.match(androidSrc, /\bANativeWindow_/);
	assert.match(engineSrc, /\bwgpu\b/);
	assert.match(engineSrc, /\bpresent_one_vsync\b/);
	assert.match(androidSrc, /\bengine::submit\b|\bengine::present_one_vsync\b/);
	assert.match(androidSrc, /\bcounter-text\b/);
	assert.doesNotMatch(hostSrc, /\bTextView\b/);
	assert.doesNotMatch(androidSrc, /\bTextView\b/);
	assert.doesNotMatch(embedderSrc, /\bpub struct AndroidView\b/);
	assert.match(hostSrc, /\bx86_64\b/);

	assert.equal(existsSync(runner), true);
	const run = spawnSync("node", [runner], {
		cwd: root,
		encoding: "utf8",
		timeout: 900000,
	});
	assert.equal(run.status, 0, run.stderr || run.stdout);
	const out = `${run.stdout}\n${run.stderr}`;
	assert.match(out, /counter-text 0/);
	assert.match(out, /draw-list 1/);
	assert.match(out, /default-host canvas/);
	assert.match(out, /gpu-surface/);
	assert.match(out, /vsync/);
	assert.doesNotMatch(out, /default-host oem/i);
	void rel;
});
