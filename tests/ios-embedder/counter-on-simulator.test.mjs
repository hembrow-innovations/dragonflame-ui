import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const hostDir = join(root, "hosts/ios");
const engineDir = join(root, "crates/engine");
const embedderDir = join(root, "crates/embedder");
const iosModule = join(embedderDir, "src/ios.rs");
const runner = join(hostDir, "scripts/run-counter-simulator.mjs");

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		if (name === "target" || name === "build" || name === "DerivedData") continue;
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

test("counter text shows on iOS simulator through engine draw lists", () => {
	assert.equal(existsSync(join(hostDir, "Dragonflame.xcodeproj/project.pbxproj")), true);
	assert.equal(existsSync(iosModule), true);
	assert.match(readFileSync(join(embedderDir, "src/lib.rs"), "utf8"), /\bmod ios\b/);

	const hostSrc = readAll(walk(hostDir));
	const iosSrc = readFileSync(iosModule, "utf8");
	const engineSrc = readAll(rustSources(engineDir));
	const embedderSrc = readAll(rustSources(embedderDir));

	assert.match(iosSrc, /\bUIWindow\b/);
	assert.match(iosSrc, /\bCADisplayLink\b/);
	assert.match(engineSrc, /\bwgpu\b/);
	assert.match(engineSrc, /\bpresent_one_vsync\b/);
	assert.match(iosSrc, /\bengine::submit\b|\bengine::present_one_vsync\b/);
	assert.match(iosSrc, /\bcounter-text\b/);
	assert.doesNotMatch(hostSrc, /\bUILabel\b/);
	assert.doesNotMatch(iosSrc, /\bUILabel\b/);
	assert.doesNotMatch(embedderSrc, /\bpub struct UiKitView\b/);

	assert.equal(existsSync(runner), true);
	const run = spawnSync("node", [runner], {
		cwd: root,
		encoding: "utf8",
		timeout: 900000,
		env: {
			...process.env,
			DEVELOPER_DIR: process.env.DEVELOPER_DIR ?? "/Applications/Xcode.app/Contents/Developer",
		},
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
