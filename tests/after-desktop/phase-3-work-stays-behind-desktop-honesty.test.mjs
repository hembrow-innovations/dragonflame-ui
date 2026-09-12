import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const skip = new Set([".git", "node_modules", "target"]);
const self = fileURLToPath(import.meta.url);
const afterDesktopPurpose = join(root, "docs/specs/ui-framework/after-desktop/purpose.md");
const overview = join(root, "docs/overview/overview-ui-framework.md");
const phase3GateArea = join(root, "docs/specs/ui-framework/phase-3-gate");
const gate = /\b(Phase3Gate|mayStartPhase3)\b/;
const secondCrate = /gate|phase[-_]?3[-_]?gate|may[-_]?start[-_]?phase[-_]?3/i;
const qualifiers =
	/already[- ]true|after(?:-|\s+a\s+)human(?:-|\s+product\s+)decision|if[- ]native[- ]funded|only if native UI is funded|\boptional\b/i;

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

test("Phase 3 work stays behind desktop honesty", () => {
	assert.equal(existsSync(afterDesktopPurpose), true);
	assert.match(readFileSync(afterDesktopPurpose, "utf8"), /Phase 3 work stays behind desktop honesty/);
	assert.equal(existsSync(overview), true);
	const phase3 = readFileSync(overview, "utf8").match(/^- \*\*Phase 3\*\*: .+$/m);
	assert.equal(phase3 !== null, true);
	assert.doesNotMatch(phase3[0], qualifiers);
	assert.equal(existsSync(phase3GateArea), false);

	const crates = readdirSync(join(root, "crates")).filter((name) =>
		existsSync(join(root, "crates", name, "Cargo.toml")),
	);
	assert.deepEqual(
		crates.filter((name) => secondCrate.test(name)),
		[],
	);
	assert.doesNotMatch(readFileSync(join(root, "Cargo.toml"), "utf8"), secondCrate);

	assert.equal("Phase3Gate" in ui, false);
	assert.equal("mayStartPhase3" in ui, false);
	assert.deepEqual(
		productFiles()
			.filter((path) => /\.(rs|js|mjs)$/.test(path))
			.filter((path) =>
				/\bpub(?:\s*\([^)]*\))?\s+(?:struct|enum|type|fn|trait)\s+(?:Phase3Gate|mayStartPhase3)\b/.test(
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
