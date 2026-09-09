#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
	claimTaskText,
	parseFrontmatter,
	taskNumber,
} from "./frontmatter.mjs";
import { withLaneLock } from "./lane-lock.mjs";

export function parseClaimArgs(argv) {
	let root = process.cwd();
	let id = null;
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		if (arg === "--root") {
			root = argv[++i];
			continue;
		}
		if (arg.startsWith("-")) {
			throw new Error(`unknown flag ${arg}`);
		}
		id = arg.replace(/\.md$/, "");
	}
	return { root, id };
}

function loadTasks(dir) {
	if (!existsSync(dir)) return [];
	return readdirSync(dir)
		.filter((name) => name.startsWith("task-") && name.endsWith(".md"))
		.map((name) => {
			const path = join(dir, name);
			const text = readFileSync(path, "utf8");
			return { name, path, text, fm: parseFrontmatter(text) };
		});
}

function stem(task) {
	return task.fm.id || task.name.replace(/\.md$/, "");
}

function completedIds(archiveDir, live) {
	const ids = new Set();
	for (const task of [...loadTasks(archiveDir), ...live]) {
		if (task.fm.status === "completed") ids.add(stem(task));
	}
	return ids;
}

function isReady(task, completed) {
	if (task.fm.kind && task.fm.kind !== "task") return false;
	if (task.fm.status !== "ready") return false;
	if (task.fm.mode !== "afk") return false;
	const blockers = Array.isArray(task.fm.blocked_by) ? task.fm.blocked_by : [];
	return blockers.every((id) => !id || completed.has(id));
}

function matchId(task, id) {
	const name = stem(task);
	return name === id || task.name === `${id}.md` || name.startsWith(`${id}-`);
}

export function claimReady(root, id) {
	const liveDir = join(root, ".heio/planning/tasks");
	const archiveDir = join(root, ".heio/archive/planning/tasks");
	const live = loadTasks(liveDir);
	const completed = completedIds(archiveDir, live);
	const ready = live
		.filter((task) => isReady(task, completed))
		.sort((a, b) => taskNumber(a.name) - taskNumber(b.name));
	const pick = id ? live.find((task) => matchId(task, id)) : ready[0];
	if (!pick) {
		return {
			ok: false,
			code: 2,
			error: id ? `not found: ${id}` : "none ready",
		};
	}
	if (!isReady(pick, completed)) {
		return {
			ok: false,
			code: 2,
			error: `not claimable: ${stem(pick)} status=${pick.fm.status}`,
		};
	}
	writeFileSync(pick.path, claimTaskText(pick.text));
	return { ok: true, id: stem(pick), path: pick.path };
}

async function main() {
	const { root, id } = parseClaimArgs(process.argv.slice(2));
	const result = await withLaneLock(() => claimReady(root, id), { root });
	if (!result.ok) {
		process.stderr.write(`${result.error}\n`);
		process.exit(result.code);
	}
	process.stdout.write(`${result.path}\n`);
}

const isMain =
	import.meta.url === `file://${process.argv[1]}` ||
	process.argv[1]?.endsWith("claim-ready.mjs");

if (isMain) {
	main().catch((err) => {
		process.stderr.write(`${err.message || err}\n`);
		process.exit(1);
	});
}
