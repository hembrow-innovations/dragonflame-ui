import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const iosModule = join(root, "crates/embedder/src/ios.rs");
const bin = join(root, "crates/engine/src/bin/hatch-not-default.rs");

test("occupying the hatch does not make OEM the default host", () => {
	assert.equal(existsSync(iosModule), true);
	assert.equal(existsSync(bin), true);
	assert.match(readFileSync(bin, "utf8"), /\.hold\(/);
	const iosSrc = readFileSync(iosModule, "utf8");
	assert.match(iosSrc, /Adapter::native/);
	assert.match(iosSrc, /\.hold\(/);
	assert.match(iosSrc, /default-host/);
	assert.match(iosSrc, /recorded_host/);
	assert.doesNotMatch(iosSrc, /default-host oem/i);

	const run = spawnSync(
		"cargo",
		["run", "-p", "engine", "--bin", "hatch-not-default", "--quiet"],
		{ cwd: root, encoding: "utf8", timeout: 600000 },
	);
	assert.equal(run.status, 0, run.stderr);
	assert.match(run.stdout, /default-host canvas/);
	assert.doesNotMatch(run.stdout, /default-host oem/i);
});
