import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as ui from "dragonflame-ui";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const skip = new Set([".git", "node_modules", "target"]);
const self = fileURLToPath(import.meta.url);
const desktopPurpose = join(root, "docs/specs/ui-framework/desktop-embedder/purpose.md");
const fundingArea = join(root, "docs/specs/ui-framework/funding");
const gate = /\b(NativeFunded|mayPursueMobile)\b/;
const secondCrate = /funding|native[-_]?funded|may[-_]?pursue[-_]?mobile/i;

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

test("mobile is pursued only if native UI is funded", () => {
	assert.equal(existsSync(desktopPurpose), true);
	assert.match(readFileSync(desktopPurpose, "utf8"), /\*\*Funding\*\*: Native is funded\./);
	assert.equal(existsSync(join(root, "hosts/ios")), true);
	assert.equal(existsSync(join(root, "hosts/android")), true);
	assert.equal(existsSync(fundingArea), false);

	const crates = readdirSync(join(root, "crates")).filter((name) =>
		existsSync(join(root, "crates", name, "Cargo.toml")),
	);
	assert.deepEqual(
		crates.filter((name) => secondCrate.test(name)),
		[],
	);
	assert.doesNotMatch(readFileSync(join(root, "Cargo.toml"), "utf8"), secondCrate);

	assert.equal("NativeFunded" in ui, false);
	assert.equal("mayPursueMobile" in ui, false);
	assert.deepEqual(
		productFiles()
			.filter((path) => /\.(rs|js|mjs)$/.test(path))
			.filter((path) =>
				/\bpub(?:\s*\([^)]*\))?\s+(?:struct|enum|type|fn|trait)\s+(?:NativeFunded|mayPursueMobile)\b/.test(
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
