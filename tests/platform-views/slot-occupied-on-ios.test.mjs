import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const iosModule = join(root, "crates/embedder/src/ios.rs");
const hostDir = join(root, "hosts/ios");
const runner = join(hostDir, "scripts/run-counter-simulator.mjs");
const main = join(hostDir, "app/main.m");

test("iOS embedder occupies the existing platform-view slot with no async Bridge", () => {
	assert.equal(existsSync(iosModule), true);
	const iosSrc = readFileSync(iosModule, "utf8");
	assert.match(iosSrc, /Adapter::native/);
	assert.match(iosSrc, /\.hold\(/);
	assert.match(iosSrc, /recorded_layer_tree/);
	assert.doesNotMatch(iosSrc, /\bBridge\b|\bJSI\b|platform.?channel/i);
	assert.doesNotMatch(readFileSync(main, "utf8"), /\bBridge\b/);

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
	assert.match(out, /layer-kind platform-view/);
	assert.match(out, /slot-id \d+/);
	assert.doesNotMatch(out, /js-bridge/i);
});
