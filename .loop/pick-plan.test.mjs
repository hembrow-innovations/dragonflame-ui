import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { parsePlanArgs, pickPlan, planProgress } from "./pick-plan.mjs";

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

function roundFile({ id, tags = '["afk-plan"]', body = "" }) {
	return `---
id: "${id}"
title: "r"
kind: round
sitting_kind: planning
status: published
tags: ${tags}
created_at: "2026-09-11T16:00:00Z"
updated_at: "2026-09-11T16:00:00Z"
---

# r

${body}
`;
}

function sliceFile({ id, status = "met" }) {
	return `---
id: "${id}"
title: "s"
kind: slice
status: ${status}
sprint: "web-hygiene"
blocked_by: []
tags: []
created_at: "2026-09-11T06:00:00Z"
updated_at: "2026-09-11T06:00:00Z"
---

# s
`;
}

function seed({ tickets = [], tasks = [], rounds = [], slices = [] } = {}) {
	const root = mkdtempSync(join(tmpdir(), "pick-plan-"));
	const ticketDir = join(root, ".heio/planning/tickets");
	const taskDir = join(root, ".heio/planning/tasks");
	const roundDir = join(root, ".heio/planning/rounds");
	const archiveTasks = join(root, ".heio/archive/planning/tasks");
	mkdirSync(ticketDir, { recursive: true });
	mkdirSync(taskDir, { recursive: true });
	mkdirSync(roundDir, { recursive: true });
	mkdirSync(archiveTasks, { recursive: true });
	mkdirSync(join(root, ".heio/planning/sprints/web-hygiene"), {
		recursive: true,
	});
	mkdirSync(join(root, ".heio/archive/planning/sprints/web-tracers"), {
		recursive: true,
	});
	for (const ticket of tickets) {
		writeFileSync(join(ticketDir, `${ticket.id}.md`), ticketFile(ticket));
	}
	for (const task of tasks) {
		writeFileSync(join(taskDir, `${task.id}.md`), taskFile(task));
	}
	for (const round of rounds) {
		writeFileSync(join(roundDir, `${round.id}.md`), roundFile(round));
	}
	for (const slice of slices) {
		const base =
			slice.status === "met"
				? join(root, ".heio/archive/planning/sprints/web-tracers")
				: join(root, ".heio/planning/sprints/web-hygiene");
		mkdirSync(base, { recursive: true });
		writeFileSync(join(base, `${slice.id}.md`), sliceFile(slice));
	}
	return root;
}

test("picks the lowest open unblocked ticket with no plan sitting", () => {
	const root = seed({
		tickets: [
			{ id: "ticket-173-stale-paths" },
			{ id: "ticket-171-gesture-apis-unnamed" },
		],
	});
	const result = pickPlan(root);
	assert.equal(result.ok, true);
	assert.equal(result.kind, "ticket");
	assert.equal(result.id, "ticket-171-gesture-apis-unnamed");
});

test("idle when a ready afk task exists", () => {
	const root = seed({
		tasks: [{ id: "task-176-align" }],
		tickets: [{ id: "ticket-173-stale-paths" }],
	});
	const result = pickPlan(root);
	assert.equal(result.ok, false);
	assert.equal(result.code, 2);
	assert.match(result.error, /drain/i);
});

test("skips a ticket already sat on by afk-plan unless the ticket is newer", () => {
	const root = seed({
		tickets: [
			{
				id: "ticket-171-gesture-apis-unnamed",
				updated: "2026-09-11T06:00:00Z",
			},
		],
		rounds: [
			{
				id: "rounds-172-gesture-apis-unnamed",
				body: "Pick: [[ticket-171-gesture-apis-unnamed]]. Do not freeze.",
			},
		],
	});
	const result = pickPlan(root);
	assert.equal(result.ok, false);
	assert.equal(result.code, 2);
});

test("re-picks a sat-on ticket when the ticket is newer than the sitting", () => {
	const root = seed({
		tickets: [
			{
				id: "ticket-171-gesture-apis-unnamed",
				updated: "2026-09-12T09:00:00Z",
			},
		],
		rounds: [
			{
				id: "rounds-172-gesture-apis-unnamed",
				body: "Pick: [[ticket-171-gesture-apis-unnamed]]. Do not freeze.",
			},
		],
	});
	const result = pickPlan(root);
	assert.equal(result.ok, true);
	assert.equal(result.id, "ticket-171-gesture-apis-unnamed");
});

test("verify ledger mention does not consume the ticket", () => {
	const root = seed({
		tickets: [{ id: "ticket-173-stale-paths" }],
		rounds: [
			{
				id: "rounds-170-afk-verify",
				tags: "[afk-verify]",
				body: "- **slice-70-counter-on-dom**: GAP. ticket-173-stale-paths",
			},
		],
	});
	const result = pickPlan(root);
	assert.equal(result.ok, true);
	assert.equal(result.id, "ticket-173-stale-paths");
});

test("parked and promoted tickets are not pickable", () => {
	const root = seed({
		tickets: [
			{ id: "ticket-171-gesture-apis-unnamed", status: "parked" },
			{ id: "ticket-173-stale-paths", status: "promoted" },
		],
	});
	const result = pickPlan(root);
	assert.equal(result.ok, false);
	assert.equal(result.code, 2);
});

test("skips a ticket blocked by an unmet slice", () => {
	const root = seed({
		tickets: [
			{
				id: "ticket-67-store-formats-unnamed",
				blocked: ["slice-80-ios-counter"],
			},
		],
	});
	const result = pickPlan(root);
	assert.equal(result.ok, false);
	assert.equal(result.code, 2);
});

test("picks a ticket blocked by a met slice", () => {
	const root = seed({
		tickets: [
			{
				id: "ticket-67-store-formats-unnamed",
				blocked: ["slice-80-ios-counter"],
			},
		],
		slices: [{ id: "slice-80-ios-counter", status: "met" }],
	});
	const result = pickPlan(root);
	assert.equal(result.ok, true);
	assert.equal(result.id, "ticket-67-store-formats-unnamed");
});

test("planProgress is empty when idle and names the next ticket when pickable", () => {
	const idle = seed({
		tickets: [{ id: "ticket-171-gesture-apis-unnamed", status: "parked" }],
	});
	const idleProgress = planProgress(idle);
	assert.equal(idleProgress.remaining, 0);
	assert.equal(idleProgress.next, null);

	const live = seed({ tickets: [{ id: "ticket-173-stale-paths" }] });
	const liveProgress = planProgress(live);
	assert.equal(liveProgress.remaining, 1);
	assert.equal(liveProgress.next, "ticket-173-stale-paths");
});

test("status and --progress are progress mode", () => {
	assert.equal(parsePlanArgs(["status"]).progress, true);
	assert.equal(parsePlanArgs(["--progress"]).progress, true);
	assert.equal(parsePlanArgs(["ticket-171"]).progress, false);
	assert.equal(parsePlanArgs(["continue"]).id, null);
});
