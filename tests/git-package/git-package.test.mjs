import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const skip = new Set([".git", "node_modules", "target"]);
const startConfigs = new Set(["app.config.ts", "app.config.js"]);
const startDeps = new Set([
	"@tanstack/start",
	"@tanstack/react-start",
	"@tanstack/start-client",
	"@tanstack/start-server",
]);

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

function depsOf(pkg) {
	return { ...pkg.dependencies, ...pkg.devDependencies, ...pkg.peerDependencies };
}

function isSiteApp(pkg, dir) {
	return (
		Object.keys(depsOf(pkg)).some((name) => startDeps.has(name)) ||
		[...startConfigs].some((name) => existsSync(join(dir, name)))
	);
}

function proveSiteBoundary(dir) {
	const pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf8"));
	const files = walk(dir);
	const manifests = files
		.filter((path) => basename(path) === "package.json")
		.map((manifest) => ({ manifest, member: JSON.parse(readFileSync(manifest, "utf8")) }));
	const sites = manifests.filter(({ manifest, member }) => isSiteApp(member, dirname(manifest)));
	const wired = sites.filter(({ member }) => "dragonflame-ui" in depsOf(member));
	assert.equal(typeof pkg.exports?.["."], "string");
	assert.equal(pkg.exports["app.config"], undefined);
	assert.deepEqual(
		files.filter((path) => startConfigs.has(basename(path))),
		[],
	);
	assert.deepEqual(
		sites.map(({ manifest }) => manifest),
		[],
	);
	assert.deepEqual(
		wired.map(({ manifest }) => manifest),
		[],
	);
}

test("working product name, folder, git package, and GitHub repo are dragonflame-ui", () => {
	assert.equal(basename(root), "dragonflame-ui");
	const manifest = join(root, "package.json");
	assert.equal(existsSync(manifest), true);
	const pkg = JSON.parse(readFileSync(manifest, "utf8"));
	assert.equal(pkg.name, "dragonflame-ui");
	assert.match(readFileSync(join(root, ".git/config"), "utf8"), /dragonflame-ui/);
});

test("dragonflame-ui imports as a library product in this repo", async () => {
	const mod = await import("dragonflame-ui");
	assert.equal(typeof mod, "object");
});

test("public site stays TanStack Start and is not a rewrite destination", () => {
	proveSiteBoundary(root);
});
