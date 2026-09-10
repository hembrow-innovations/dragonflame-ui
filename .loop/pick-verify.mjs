#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { parseFrontmatter } from "./frontmatter.mjs";

export function parseVerifyArgs(argv) {
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
		if (arg === "continue") {
			continue;
		}
		if (arg.startsWith("-")) {
			throw new Error(`unknown flag ${arg}`);
		}
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

function sliceNumber(name) {
	const match = name.match(/slice-(\d+)/);
	return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

function stem(path, fm) {
	const base = path.split("/").pop().replace(/\.md$/, "");
	return fm.id || base;
}

function listSlices(root) {
	const files = [];
	walk(join(root, ".heio/planning/sprints"), files);
	walk(join(root, ".heio/archive/planning/sprints"), files);
	const slices = [];
	for (const path of files) {
		const name = path.split("/").pop();
		if (!name.startsWith("slice-") || !name.endsWith(".md")) continue;
		const text = readFileSync(path, "utf8");
		const fm = parseFrontmatter(text);
		if (fm.kind && fm.kind !== "slice") continue;
		slices.push({ id: stem(path, fm), path, fm });
	}
	slices.sort((a, b) => sliceNumber(a.id) - sliceNumber(b.id));
	return slices;
}

export function listMetSlices(root) {
	return listSlices(root).filter((slice) => slice.fm.status === "met");
}

export function ledgerSliceIds(root) {
	const ids = new Set();
	const files = [];
	walk(join(root, ".heio/planning/rounds"), files);
	walk(join(root, ".heio/archive/planning/rounds"), files);
	for (const path of files) {
		const name = path.split("/").pop();
		if (!name.includes("afk-verify") || !name.endsWith(".md")) continue;
		const text = readFileSync(path, "utf8");
		for (const m of text.matchAll(/^- \*\*(slice-[^*]+)\*\*:/gm)) {
			ids.add(m[1].trim());
		}
	}
	return ids;
}

export function verifyProgress(root) {
	const met = listMetSlices(root);
	const done = ledgerSliceIds(root);
	const remaining = met.filter((slice) => !done.has(slice.id));
	return {
		total: met.length,
		audited: met.filter((slice) => done.has(slice.id)).length,
		remaining: remaining.length,
		next: remaining[0]?.id ?? null,
	};
}

function matchId(slice, id) {
	return (
		slice.id === id ||
		slice.id.startsWith(`${id}-`) ||
		slice.path.endsWith(`/${id}.md`)
	);
}

export function pickVerify(root, id) {
	if (id) {
		const pick = listSlices(root).find((slice) => matchId(slice, id));
		if (!pick) {
			return { ok: false, code: 2, error: `not found: ${id}` };
		}
		if (pick.fm.status !== "met") {
			return {
				ok: false,
				code: 2,
				error: `not verifiable: ${pick.id} status=${pick.fm.status}`,
			};
		}
		return { ok: true, id: pick.id, path: pick.path };
	}
	const met = listMetSlices(root);
	const done = ledgerSliceIds(root);
	const pick = met.find((slice) => !done.has(slice.id));
	if (!pick) {
		return { ok: false, code: 2, error: "none due" };
	}
	return { ok: true, id: pick.id, path: pick.path };
}

function printProgress(root) {
	const progress = verifyProgress(root);
	process.stdout.write(
		`audited ${progress.audited}/${progress.total} remaining=${progress.remaining} next=${progress.next ?? "none"}\n`,
	);
}

async function main() {
	const { root, id, progress } = parseVerifyArgs(process.argv.slice(2));
	if (progress) {
		printProgress(root);
		return;
	}
	const result = pickVerify(root, id);
	if (!result.ok) {
		process.stderr.write(`${result.error}\n`);
		process.exit(result.code);
	}
	process.stdout.write(`${result.path}\n`);
}

const isMain =
	import.meta.url === `file://${process.argv[1]}` ||
	process.argv[1]?.endsWith("pick-verify.mjs");

if (isMain) {
	main().catch((err) => {
		process.stderr.write(`${err.message || err}\n`);
		process.exit(1);
	});
}
