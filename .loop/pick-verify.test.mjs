import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { parseVerifyArgs, pickVerify, verifyProgress } from "./pick-verify.mjs";

function sliceFile({ id, status = "met" }) {
	return `---
id: "${id}"
title: "t"
kind: slice
status: ${status}
sprint: "web-tracers"
blocked_by: []
tags: []
created_at: "2026-09-09T23:30:00Z"
updated_at: "2026-09-09T23:30:00Z"
---

# t
`;
}

function seed({ slices = [], ledger = [] } = {}) {
	const root = mkdtempSync(join(tmpdir(), "pick-verify-"));
	for (const slice of slices) {
		const base =
			slice.status === "met"
				? join(root, ".heio/archive/planning/sprints", slice.sprint || "web-tracers")
				: join(root, ".heio/planning/sprints", slice.sprint || "native-if-funded");
		mkdirSync(base, { recursive: true });
		writeFileSync(join(base, `${slice.id}.md`), sliceFile(slice));
	}
	if (ledger.length) {
		const dir = join(root, ".heio/planning/rounds");
		mkdirSync(dir, { recursive: true });
		const lines = ledger.map((id) => `- **${id}**: HOLD. no tickets`);
		writeFileSync(
			join(dir, "rounds-99-afk-verify.md"),
			`# verify\n\n## Ledger\n${lines.join("\n")}\n`,
		);
	}
	return root;
}

test("picks the lowest numbered met slice not in the ledger", () => {
	const root = seed({
		slices: [
			{ id: "slice-70-counter-on-dom" },
			{ id: "slice-69-importable-package" },
			{ id: "slice-76-desktop-vsync-window", status: "frozen" },
		],
	});
	const result = pickVerify(root, null);
	assert.equal(result.ok, true);
	assert.equal(result.id, "slice-69-importable-package");
});

test("skips met slices already in the ledger", () => {
	const root = seed({
		slices: [
			{ id: "slice-69-importable-package" },
			{ id: "slice-70-counter-on-dom" },
		],
		ledger: ["slice-69-importable-package"],
	});
	const result = pickVerify(root, null);
	assert.equal(result.ok, true);
	assert.equal(result.id, "slice-70-counter-on-dom");
});

test("named met slice is re-auditable even if ledged", () => {
	const root = seed({
		slices: [{ id: "slice-69-importable-package" }],
		ledger: ["slice-69-importable-package"],
	});
	const result = pickVerify(root, "slice-69-importable-package");
	assert.equal(result.ok, true);
	assert.equal(result.id, "slice-69-importable-package");
});

test("named frozen slice is not claimable", () => {
	const root = seed({
		slices: [{ id: "slice-76-desktop-vsync-window", status: "frozen" }],
	});
	const result = pickVerify(root, "slice-76-desktop-vsync-window");
	assert.equal(result.ok, false);
	assert.equal(result.code, 2);
});

test("none due returns code 2", () => {
	const root = seed({
		slices: [{ id: "slice-69-importable-package" }],
		ledger: ["slice-69-importable-package"],
	});
	const result = pickVerify(root, null);
	assert.equal(result.ok, false);
	assert.equal(result.code, 2);
});

test("status and --progress are progress mode", () => {
	assert.equal(parseVerifyArgs(["status"]).progress, true);
	assert.equal(parseVerifyArgs(["--progress"]).progress, true);
	assert.equal(parseVerifyArgs(["slice-69"]).progress, false);
	assert.equal(parseVerifyArgs(["continue"]).id, null);
});

test("named prefix matches the slice slug", () => {
	const root = seed({
		slices: [{ id: "slice-69-importable-package" }],
	});
	const result = pickVerify(root, "slice-69");
	assert.equal(result.ok, true);
	assert.equal(result.id, "slice-69-importable-package");
});

test("verifyProgress counts remaining met slices", () => {
	const root = seed({
		slices: [
			{ id: "slice-69-importable-package" },
			{ id: "slice-70-counter-on-dom" },
			{ id: "slice-76-desktop-vsync-window", status: "frozen" },
		],
		ledger: ["slice-69-importable-package"],
	});
	const progress = verifyProgress(root);
	assert.equal(progress.total, 2);
	assert.equal(progress.audited, 1);
	assert.equal(progress.remaining, 1);
	assert.equal(progress.next, "slice-70-counter-on-dom");
});
