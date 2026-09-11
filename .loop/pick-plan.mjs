#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { parseFrontmatter } from "./frontmatter.mjs";

export function parsePlanArgs(argv) {
	let root = process.cwd();
	let id = null;
	let progress = false;
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		if (arg === "--root") {
			root = argv[++i];
			continue;
		}
		if (arg === "--progress" || arg === "status") {
			progress = true;
			continue;
		}
		if (arg === "continue") continue;
		if (arg.startsWith("-")) throw new Error(`unknown flag ${arg}`);
		id = arg.replace(/\.md$/, "");
	}
	return { root, id, progress };
}

function walk(dir, names) {
	if (!existsSync(dir)) return;
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) walk(full, names);
		else names.push(full);
	}
}

function loadMd(dir, prefix) {
	const files = [];
	walk(dir, files);
	const out = [];
	for (const path of files) {
		const name = path.split("/").pop();
		if (!name.startsWith(prefix) || !name.endsWith(".md")) continue;
		const text = readFileSync(path, "utf8");
		out.push({ path, name, text, fm: parseFrontmatter(text) });
	}
	return out;
}

function stem(note) {
	return note.fm.id || note.name.replace(/\.md$/, "");
}

function ticketNumber(name) {
	const match = name.match(/ticket-(\d+)/);
	return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

function isAfkPlanRound(note) {
	const tags = Array.isArray(note.fm.tags)
		? note.fm.tags.join(" ")
		: String(note.fm.tags || "");
	return tags.includes("afk-plan");
}

function mentionsTicket(text, id) {
	return text.includes(`[[${id}]]`) || text.includes(`[[${id}|`);
}

function stamp(value) {
	return Date.parse(value || "") || 0;
}

function resolvedIds(root) {
	const ids = new Set();
	const slices = [
		...loadMd(join(root, ".heio/planning/sprints"), "slice-"),
		...loadMd(join(root, ".heio/archive/planning/sprints"), "slice-"),
	];
	for (const slice of slices) {
		if (slice.fm.status === "met") ids.add(stem(slice));
	}
	const tasks = [
		...loadMd(join(root, ".heio/planning/tasks"), "task-"),
		...loadMd(join(root, ".heio/archive/planning/tasks"), "task-"),
	];
	for (const task of tasks) {
		if (task.fm.status === "completed") ids.add(stem(task));
	}
	return ids;
}

function hasReadyAfk(root) {
	const live = loadMd(join(root, ".heio/planning/tasks"), "task-");
	const completed = resolvedIds(root);
	return live.some((task) => {
		if (task.fm.kind && task.fm.kind !== "task") return false;
		if (task.fm.status !== "ready" || task.fm.mode !== "afk") return false;
		const blockers = Array.isArray(task.fm.blocked_by)
			? task.fm.blocked_by
			: [];
		return blockers.every((id) => !id || completed.has(id));
	});
}

function sittingStamp(root, id) {
	const rounds = [
		...loadMd(join(root, ".heio/planning/rounds"), "rounds-"),
		...loadMd(join(root, ".heio/archive/planning/rounds"), "rounds-"),
	];
	let latest = 0;
	for (const round of rounds) {
		if (!isAfkPlanRound(round)) continue;
		if (!mentionsTicket(round.text, id)) continue;
		latest = Math.max(latest, stamp(round.fm.updated_at));
	}
	return latest;
}

function isUnblocked(ticket, completed) {
	const blockers = Array.isArray(ticket.fm.blocked_by)
		? ticket.fm.blocked_by
		: [];
	return blockers.every((id) => !id || completed.has(id));
}

function isPickableTicket(ticket, root, completed) {
	if (ticket.fm.kind && ticket.fm.kind !== "ticket") return false;
	if (ticket.fm.status !== "open") return false;
	if (!isUnblocked(ticket, completed)) return false;
	const id = stem(ticket);
	const sat = sittingStamp(root, id);
	if (sat && stamp(ticket.fm.updated_at) <= sat) return false;
	return true;
}

function matchId(note, id) {
	const name = stem(note);
	return name === id || note.name === `${id}.md` || name.startsWith(`${id}-`);
}

export function pickPlan(root, id) {
	if (hasReadyAfk(root)) {
		return { ok: false, code: 2, error: "drain owns ready tasks" };
	}
	const live = loadMd(join(root, ".heio/planning/tickets"), "ticket-");
	const completed = resolvedIds(root);
	const open = live
		.filter((ticket) => isPickableTicket(ticket, root, completed))
		.sort((a, b) => ticketNumber(a.name) - ticketNumber(b.name));
	const pick = id ? live.find((ticket) => matchId(ticket, id)) : open[0];
	if (!pick) {
		return {
			ok: false,
			code: 2,
			error: id ? `not found: ${id}` : "none freezeable",
		};
	}
	if (!isPickableTicket(pick, root, completed)) {
		return {
			ok: false,
			code: 2,
			error: `not pickable: ${stem(pick)} status=${pick.fm.status}`,
		};
	}
	return { ok: true, kind: "ticket", id: stem(pick), path: pick.path };
}

export function planProgress(root) {
	const pick = pickPlan(root, null);
	if (!pick.ok) {
		return { remaining: 0, next: null, reason: pick.error };
	}
	return { remaining: 1, next: pick.id, reason: pick.kind };
}

function printProgress(root) {
	const progress = planProgress(root);
	process.stdout.write(
		`remaining=${progress.remaining} next=${progress.next ?? "none"}\n`,
	);
}

async function main() {
	const { root, id, progress } = parsePlanArgs(process.argv.slice(2));
	if (progress) {
		printProgress(root);
		return;
	}
	const result = pickPlan(root, id);
	if (!result.ok) {
		process.stderr.write(`${result.error}\n`);
		process.exit(result.code);
	}
	process.stdout.write(`${result.path}\n`);
}

const isMain =
	import.meta.url === `file://${process.argv[1]}` ||
	process.argv[1]?.endsWith("pick-plan.mjs");

if (isMain) {
	main().catch((err) => {
		process.stderr.write(`${err.message || err}\n`);
		process.exit(1);
	});
}
