import assert from "node:assert/strict";
import { test } from "node:test";
import * as ui from "dragonflame-ui";
import { authoredFrameworkSources } from "./sources.mjs";

test("at least one public export is authored as Draconic", () => {
	assert.equal("view" in ui, true);
	assert.notEqual(authoredFrameworkSources().length, 0);
});
