import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

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
	assert.equal(existsSync(join(root, "app.config.ts")), false);
	assert.equal(existsSync(join(root, "app.config.js")), false);
});
