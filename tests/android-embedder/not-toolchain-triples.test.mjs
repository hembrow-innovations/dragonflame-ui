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
const androidTriplesArea = join(root, "docs/specs/ui-framework/android-triples");
const skip = new Set([".git", "node_modules", "target", "build", ".gradle", "99_scribble"]);
const self = fileURLToPath(import.meta.url);
const leaked = /\b(?:TargetTriple|AndroidTriple|shippedTriples)\b/;
const rustcTriple =
	/(?:^|[^A-Za-z0-9_])(?:aarch64|x86_64|armv7|i686)-linux-android(?:eabi)?(?![A-Za-z0-9_])/;
const pubLeaked =
	/\bpub(?:\s*\([^)]*\))?\s+(?:struct|enum|type|fn|trait)\s+(?:TargetTriple|AndroidTriple|shippedTriples)\b/;
const pubUseLeaked = /\bpub use\b[\s\S]*\b(?:TargetTriple|AndroidTriple|shippedTriples)\b/;

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

function claimsLanguageRoadmap(src) {
	return (
		/(?:Android |these )?triples are language ROADMAP work/i.test(src) ||
		/(?:Android |these )?triples are toolchain D04/i.test(src)
	);
}

test("Android triples are this product's mobile packaging, not toolchain D04", () => {
	assert.equal(existsSync(hostDir), true);
	assert.equal(existsSync(androidModule), true);
	assert.equal(existsSync(embedderLib), true);
	assert.equal(existsSync(androidTriplesArea), false);
	const libSrc = readFileSync(embedderLib, "utf8");
	assert.match(libSrc, /\bmod android\b/);
	assert.doesNotMatch(libSrc, /\bpub mod android\b/);
	assert.doesNotMatch(libSrc, rustcTriple);
	assert.doesNotMatch(libSrc, leaked);
	const embedderRs = walk(embedderDir).filter((path) => path.endsWith(".rs"));
	assert.deepEqual(
		embedderRs.filter((path) => {
			const src = readFileSync(path, "utf8");
			return pubLeaked.test(src) || pubUseLeaked.test(src);
		}),
		[],
	);
	const claimed = [...walk(join(root, "docs")), ...walk(hostDir), ...embedderRs]
		.filter((path) => path !== self)
		.filter((path) => claimsLanguageRoadmap(readFileSync(path, "utf8")));
	assert.deepEqual(claimed.map(rel), []);
});
