import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { authoredFrameworkSources } from "./sources.mjs";

test("PATH draconic check and build prove the authored export", () => {
	const sources = authoredFrameworkSources();
	assert.notEqual(sources.length, 0);
	const bin = execFileSync("which", ["draconic"], { encoding: "utf8" }).trim();
	assert.match(bin, /draconic$/);
	assert.equal(bin.includes("workbench/draconic"), false);
	const file = sources[0];
	execFileSync(bin, ["check", file], { encoding: "utf8" });
	const out = join(mkdtempSync(join(tmpdir(), "df-ui-")), "view.out.js");
	execFileSync(bin, ["build", "--target", "js", file, "-o", out], { encoding: "utf8" });
});
