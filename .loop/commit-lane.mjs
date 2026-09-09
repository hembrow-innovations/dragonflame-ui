#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { isAbsolute, relative, resolve } from "node:path";
import { parseFrontmatter } from "./frontmatter.mjs";
import { withLaneLock } from "./lane-lock.mjs";

const PLAN_ALLOW = [
	".heio/planning/sprints/",
	".heio/planning/tasks/",
	".heio/planning/tickets/",
	".heio/planning/rounds/",
	".heio/archive/planning/tickets/",
	".heio/archive/planning/rounds/",
];

const DRAIN_DENY = [
	".heio/planning/intent.md",
	".heio/planning/roadmap.md",
	".heio/planning/locations/",
];

export function parseCommitArgs(argv) {
	let root = process.cwd();
	let lane = null;
	let message = null;
	const paths = [];
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		if (arg === "--root") {
			root = argv[++i];
			continue;
		}
		if (arg === "-m" || arg === "--message") {
			message = argv[++i];
			continue;
		}
		if (arg === "--") {
			paths.push(...argv.slice(i + 1));
			break;
		}
		if (!lane && (arg === "plan" || arg === "drain")) {
			lane = arg;
			continue;
		}
		if (arg.startsWith("-")) throw new Error(`unknown flag ${arg}`);
		paths.push(arg);
	}
	return { root, lane, message, paths };
}

function norm(rel) {
	return rel.replace(/\\/g, "/");
}

export function laneAllows(lane, rel, root) {
	const n = norm(rel);
	if (n.startsWith("..") || n.startsWith("/")) return false;
	if (lane === "plan") {
		if (n.startsWith("docs/specs/")) return false;
		if (!PLAN_ALLOW.some((p) => n === p.slice(0, -1) || n.startsWith(p))) {
			return false;
		}
		if (n.includes("/tasks/task-")) {
			try {
				const fm = parseFrontmatter(readFileSync(resolve(root, n), "utf8"));
				if (fm.status && fm.status !== "ready" && fm.status !== "draft") {
					return false;
				}
			} catch {
				return false;
			}
		}
		return true;
	}
	if (lane === "drain") {
		if (DRAIN_DENY.some((p) => n === p || n.startsWith(p))) return false;
		if (n.endsWith("/shape.md") && n.startsWith(".heio/planning/sprints/")) {
			return false;
		}
		return true;
	}
	return false;
}

function git(root, args) {
	return spawnSync("git", args, { cwd: root, encoding: "utf8" });
}

export async function commitLane({ root, lane, message, paths }) {
	if (!lane || !message || paths.length === 0) {
		throw new Error(
			"Usage: node .loop/commit-lane.mjs <plan|drain> -m <msg> -- <paths>",
		);
	}
	const rels = paths.map((p) => {
		const abs = isAbsolute(p) ? p : resolve(root, p);
		return relative(root, abs);
	});
	for (const rel of rels) {
		if (!laneAllows(lane, rel, root)) {
			throw new Error(`lane ${lane} may not commit ${rel}`);
		}
	}
	return withLaneLock(() => {
		const add = git(root, ["add", "--", ...rels]);
		if (add.status !== 0) {
			throw new Error((add.stderr || add.stdout || "git add failed").trim());
		}
		const commit = git(root, ["commit", "-m", message, "--", ...rels]);
		const text = `${commit.stdout || ""}${commit.stderr || ""}`;
		if (commit.status !== 0) {
			if (/nothing to commit|no changes added|nothing added/i.test(text)) {
				return "empty";
			}
			throw new Error(text.trim() || "git commit failed");
		}
		return (commit.stdout || "").trim() || "committed";
	}, { root });
}

async function main() {
	const args = parseCommitArgs(process.argv.slice(2));
	const out = await commitLane(args);
	process.stdout.write(`${out}\n`);
}

const isMain =
	import.meta.url === `file://${process.argv[1]}` ||
	process.argv[1]?.endsWith("commit-lane.mjs");

if (isMain) {
	main().catch((err) => {
		process.stderr.write(`${err.message || err}\n`);
		process.exit(1);
	});
}
