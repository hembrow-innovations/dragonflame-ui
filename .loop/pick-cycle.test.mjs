import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { pickCycle } from "./pick-cycle.mjs";
import { pickSlice } from "./pick-slice.mjs";

function ticketFile({
	id,
	status = "open",
	blocked = [],
	updated = "2026-09-11T06:00:00Z",
}) {
	const blockedYaml =
		blocked.length === 0
			? "blocked_by: []"
			: `blocked_by:\n${blocked.map((b) => `  - "${b}"`).join("\n")}`;
	return `---
id: "${id}"
title: "t"
kind: ticket
status: ${status}
ticket_type: observation
${blockedYaml}
tags: []
created_at: "2026-09-11T06:00:00Z"
updated_at: "${updated}"
---

# t
`;
}

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
tags: []
created_at: "2026-09-11T06:00:00Z"
updated_at: "2026-09-11T06:00:00Z"
---

# t
`;
}

function sliceFile({
	id,
	status = "frozen",
	blocked = [],
	pool = [],
	sprint = "native-if-funded",
}) {
	const blockedYaml =
		blocked.length === 0
			? "blocked_by: []"
			: `blocked_by:\n${blocked.map((b) => `  - "${b}"`).join("\n")}`;
	const links = pool.map((taskId) => `- [[${taskId}]]`).join("\n");
	return `---
id: "${id}"
title: "s"
kind: slice
status: ${status}
sprint: "${sprint}"
${blockedYaml}
tags: []
created_at: "2026-09-11T06:00:00Z"
updated_at: "2026-09-11T06:00:00Z"
---

# s

## Pool

${links}
`;
}

function seed({
	tickets = [],
	tasks = [],
	slices = [],
	ledger = [],
	archiveTasks = [],
} = {}) {
	const root = mkdtempSync(join(tmpdir(), "pick-cycle-"));
	const ticketDir = join(root, ".heio/planning/tickets");
	const taskDir = join(root, ".heio/planning/tasks");
	const roundDir = join(root, ".heio/planning/rounds");
	mkdirSync(ticketDir, { recursive: true });
	mkdirSync(taskDir, { recursive: true });
	mkdirSync(roundDir, { recursive: true });
	mkdirSync(join(root, ".heio/archive/planning/tasks"), { recursive: true });
	mkdirSync(join(root, ".heio/archive/planning/sprints/web-tracers"), {
		recursive: true,
	});
	for (const ticket of tickets) {
		writeFileSync(join(ticketDir, `${ticket.id}.md`), ticketFile(ticket));
	}
	for (const task of tasks) {
		writeFileSync(join(taskDir, `${task.id}.md`), taskFile(task));
	}
	for (const task of archiveTasks) {
		writeFileSync(
			join(root, ".heio/archive/planning/tasks", `${task.id}.md`),
			taskFile({ ...task, status: "completed" }),
		);
	}
	for (const slice of slices) {
		const live = slice.status !== "met";
		const sprint = slice.sprint || "native-if-funded";
		const base = live
			? join(root, ".heio/planning/sprints", sprint)
			: join(root, ".heio/archive/planning/sprints", sprint);
		mkdirSync(base, { recursive: true });
		writeFileSync(join(base, `${slice.id}.md`), sliceFile(slice));
	}
	if (ledger.length) {
		const lines = ledger.map((id) => `- **${id}**: HOLD. no tickets`);
		writeFileSync(
			join(roundDir, "rounds-99-afk-verify.md"),
			`# verify\n\n## Ledger\n${lines.join("\n")}\n`,
		);
	}
	return root;
}

test("pickSlice takes the lowest frozen slice with a ready afk task", () => {
	const root = seed({
		tasks: [
			{ id: "task-254-spec-gesture-arena" },
			{ id: "task-200-other" },
		],
		slices: [
			{
				id: "slice-79-oem-hatch-slot",
				status: "shaping",
				pool: ["task-200-other"],
			},
			{
				id: "slice-78-press-wins-arena",
				status: "frozen",
				blocked: ["slice-77-draw-a-rect"],
				pool: ["task-254-spec-gesture-arena"],
			},
			{
				id: "slice-77-draw-a-rect",
				status: "met",
				sprint: "web-tracers",
			},
		],
	});
	const result = pickSlice(root);
	assert.equal(result.ok, true);
	assert.equal(result.id, "slice-78-press-wins-arena");
});

test("pickCycle drains before planning when a frozen slice is runnable", () => {
	const root = seed({
		tickets: [{ id: "ticket-252-framework-not-draconic" }],
		tasks: [{ id: "task-254-spec-gesture-arena" }],
		slices: [
			{
				id: "slice-78-press-wins-arena",
				status: "frozen",
				pool: ["task-254-spec-gesture-arena"],
			},
		],
	});
	const result = pickCycle(root);
	assert.equal(result.command, "afk-slice");
	assert.equal(result.next, "slice-78-press-wins-arena");
});

test("pickCycle plans when drain is empty and a ticket is pickable", () => {
	const root = seed({
		tickets: [{ id: "ticket-252-framework-not-draconic" }],
	});
	const result = pickCycle(root);
	assert.equal(result.command, "afk-plan");
	assert.equal(result.next, "ticket-252-framework-not-draconic");
});

test("pickCycle verifies when drain and plan are idle", () => {
	const root = seed({
		slices: [{ id: "slice-77-draw-a-rect", status: "met", sprint: "web-tracers" }],
	});
	const result = pickCycle(root);
	assert.equal(result.command, "afk-verify");
	assert.equal(result.next, "slice-77-draw-a-rect");
});

test("pickCycle is idle when nothing remains", () => {
	const root = seed({
		slices: [{ id: "slice-77-draw-a-rect", status: "met", sprint: "web-tracers" }],
		ledger: ["slice-77-draw-a-rect"],
	});
	const result = pickCycle(root);
	assert.equal(result.command, null);
	assert.equal(result.reason, "idle");
});
