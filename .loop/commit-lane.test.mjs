import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { commitLane, laneAllows } from "./commit-lane.mjs";

function git(root, args) {
	const r = spawnSync("git", args, { cwd: root, encoding: "utf8" });
	assert.equal(r.status, 0, r.stderr || r.stdout);
	return r;
}

function repo() {
	const root = mkdtempSync(join(tmpdir(), "commit-lane-"));
	git(root, ["init"]);
	git(root, ["config", "user.email", "t@t"]);
	git(root, ["config", "user.name", "t"]);
	return root;
}

test("plan lane rejects product code and claimed tasks", () => {
	const root = repo();
	assert.equal(laneAllows("plan", "src/foo.ts", root), false);
	assert.equal(laneAllows("plan", "docs/specs/ui/purpose.md", root), false);
	assert.equal(
		laneAllows("plan", ".heio/planning/sprints/web-tracers/slice-69.md", root),
		true,
	);
	const task = ".heio/planning/tasks/task-86-spec.md";
	mkdirSync(join(root, ".heio/planning/tasks"), { recursive: true });
	writeFileSync(
		join(root, task),
		`---
status: claimed
---
`,
	);
	assert.equal(laneAllows("plan", task, root), false);
});

test("drain lane rejects map files", () => {
	const root = repo();
	assert.equal(laneAllows("drain", ".heio/planning/intent.md", root), false);
	assert.equal(
		laneAllows("drain", ".heio/planning/locations/location-17.md", root),
		false,
	);
	assert.equal(laneAllows("drain", "docs/specs/ui/purpose.md", root), true);
});

test("plan lane commits only planning files", async () => {
	const root = repo();
	const slice = ".heio/planning/sprints/web-tracers/slice-69.md";
	mkdirSync(join(root, ".heio/planning/sprints/web-tracers"), {
		recursive: true,
	});
	writeFileSync(join(root, slice), "# slice\n");
	writeFileSync(join(root, "src.ts"), "nope\n");
	git(root, ["add", "src.ts"]);
	git(root, ["commit", "-m", "seed"]);
	const out = await commitLane({
		root,
		lane: "plan",
		message: "chore(plan): slice-69",
		paths: [slice],
	});
	assert.match(out, /slice-69|committed|files? changed/i);
	await assert.rejects(
		() =>
			commitLane({
				root,
				lane: "plan",
				message: "bad",
				paths: ["src.ts"],
			}),
		/may not commit/,
	);
});
