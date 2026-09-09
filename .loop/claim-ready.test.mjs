import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { claimReady } from "./claim-ready.mjs";
import { parseFrontmatter } from "./frontmatter.mjs";

function taskFile({ id, status = "ready", mode = "afk", blocked = [] }) {
	const blockedYaml =
		blocked.length === 0
			? "blocked_by: []"
			: `blocked_by:\n${blocked.map((b) => `  - "${b}"`).join("\n")}`;
	return `---
id: "${id}"
title: "t"
kind: task
status: ${status}
mode: ${mode}
${blockedYaml}
sprint: "web-tracers"
slice: "slice-69-importable-package"
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# t
`;
}

function seed(tasks) {
	const root = mkdtempSync(join(tmpdir(), "claim-ready-"));
	const dir = join(root, ".heio/planning/tasks");
	mkdirSync(dir, { recursive: true });
	mkdirSync(join(root, ".heio/archive/planning/tasks"), { recursive: true });
	for (const task of tasks) {
		writeFileSync(join(dir, `${task.id}.md`), taskFile(task));
	}
	return root;
}

test("claims the lowest unblocked ready afk task", () => {
	const root = seed([
		{ id: "task-87-red", blocked: ["task-86-spec"] },
		{ id: "task-86-spec" },
		{ id: "task-88-green", blocked: ["task-87-red"] },
	]);
	const result = claimReady(root, null);
	assert.equal(result.ok, true);
	assert.equal(result.id, "task-86-spec");
	const fm = parseFrontmatter(readFileSync(result.path, "utf8"));
	assert.equal(fm.status, "claimed");
});

test("skips hitl and blocked tasks", () => {
	const root = seed([
		{ id: "task-86-spec", mode: "hitl" },
		{ id: "task-87-red", blocked: ["task-86-spec"] },
		{ id: "task-90-ok" },
	]);
	const result = claimReady(root, null);
	assert.equal(result.ok, true);
	assert.equal(result.id, "task-90-ok");
});

test("named id that is not ready fails", () => {
	const root = seed([{ id: "task-86-spec", status: "claimed" }]);
	const result = claimReady(root, "task-86-spec");
	assert.equal(result.ok, false);
	assert.equal(result.code, 2);
});

test("none ready returns code 2", () => {
	const root = seed([{ id: "task-86-spec", status: "claimed" }]);
	const result = claimReady(root, null);
	assert.equal(result.ok, false);
	assert.equal(result.code, 2);
});
