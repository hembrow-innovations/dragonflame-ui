#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { parseFrontmatter } from "./frontmatter.mjs";

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

function sliceNumber(name) {
	const match = name.match(/slice-(\d+)/);
	return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

function resolvedIds(root) {
	const ids = new Set();
	const slices = [
		...loadMd(join(root, ".heio/planning/sprints"), "slice-"),
		...loadMd(join(root, ".heio/archive/planning/sprints"), "slice-"),
	];
	for (const slice of slices) {
		if (slice.fm.status === "met" || slice.fm.status === "abandoned") {
			ids.add(stem(slice));
		}
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

function isReadyAfk(task, completed) {
	if (task.fm.kind && task.fm.kind !== "task") return false;
	if (task.fm.status !== "ready" || task.fm.mode !== "afk") return false;
	const blockers = Array.isArray(task.fm.blocked_by) ? task.fm.blocked_by : [];
	return blockers.every((id) => !id || completed.has(id));
}

function poolTaskIds(text) {
	const ids = [];
	for (const match of text.matchAll(/\[\[(task-[^\|\]]+)/g)) {
		ids.push(match[1]);
	}
	return ids;
}

function blockersMet(note, completed) {
	const blockers = Array.isArray(note.fm.blocked_by) ? note.fm.blocked_by : [];
	return blockers.every((id) => !id || completed.has(id));
}

export function pickSlice(root) {
	const completed = resolvedIds(root);
	const liveTasks = loadMd(join(root, ".heio/planning/tasks"), "task-");
	const byId = new Map(liveTasks.map((task) => [stem(task), task]));
	const slices = loadMd(join(root, ".heio/planning/sprints"), "slice-")
		.filter((slice) => {
			if (slice.fm.kind && slice.fm.kind !== "slice") return false;
			return slice.fm.status === "frozen" || slice.fm.status === "active";
		})
		.sort((a, b) => sliceNumber(stem(a)) - sliceNumber(stem(b)));
	for (const slice of slices) {
		if (!blockersMet(slice, completed)) continue;
		const runnable = poolTaskIds(slice.text).some((id) => {
			const task = byId.get(id);
			return task && isReadyAfk(task, completed);
		});
		if (runnable) {
			return { ok: true, id: stem(slice), path: slice.path };
		}
	}
	return { ok: false, code: 2, error: "none drainable" };
}

export function pickShaping(root) {
	const completed = resolvedIds(root);
	const slices = loadMd(join(root, ".heio/planning/sprints"), "slice-")
		.filter((slice) => {
			if (slice.fm.kind && slice.fm.kind !== "slice") return false;
			return slice.fm.status === "shaping";
		})
		.sort((a, b) => sliceNumber(stem(a)) - sliceNumber(stem(b)));
	for (const slice of slices) {
		if (!blockersMet(slice, completed)) continue;
		return { ok: true, kind: "slice", id: stem(slice), path: slice.path };
	}
	return { ok: false, code: 2, error: "none freezeable" };
}

async function main() {
	const root = process.cwd();
	const result = pickSlice(root);
	if (!result.ok) {
		process.stderr.write(`${result.error}\n`);
		process.exit(result.code);
	}
	process.stdout.write(`${result.path}\n`);
}

const isMain =
	import.meta.url === `file://${process.argv[1]}` ||
	process.argv[1]?.endsWith("pick-slice.mjs");

if (isMain) {
	main().catch((err) => {
		process.stderr.write(`${err.message || err}\n`);
		process.exit(1);
	});
}
