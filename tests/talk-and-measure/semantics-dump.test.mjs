import assert from "node:assert/strict";
import { test } from "node:test";
import * as ui from "dragonflame-ui";
import { SemanticsNode, Signal, h, view } from "dragonflame-ui";

test("SemanticsNode dumps with toStringDeep", () => {
	assert.equal("SemanticsOwner" in ui, false);
	assert.equal("AccessibilityInfo" in ui, false);
	assert.equal("UIAccessibility" in ui, false);
	assert.equal("AccessibilityNodeInfo" in ui, false);

	const renderTree = h(view, {
		testID: "app",
		accessibilityLabel: "App",
		children: h(view, { testID: "save", accessibilityLabel: "Save" }),
	});
	const save = SemanticsNode({
		testID: renderTree.props.children.props.testID,
		accessibilityLabel: renderTree.props.children.props.accessibilityLabel,
	});
	const root = SemanticsNode({
		testID: renderTree.props.testID,
		accessibilityLabel: renderTree.props.accessibilityLabel,
		children: [save],
	});
	assert.notEqual(root, renderTree);
	assert.equal("toStringDeep" in renderTree, false);

	const dump = root.toStringDeep();
	assert.equal(
		dump,
		[
			"SemanticsNode",
			'  testID: "app"',
			'  accessibilityLabel: "App"',
			"  SemanticsNode",
			'    testID: "save"',
			'    accessibilityLabel: "Save"',
		].join("\n"),
	);
	assert.equal(dump.includes("aria-"), false);
	assert.equal(dump.includes("accessibilityHint"), false);
	assert.equal(dump.includes("liveRegion"), false);
	assert.equal("accessibilityHint" in root, false);
	assert.equal("liveRegion" in root, false);
	assert.equal("get" in root, false);
	assert.equal("set" in root, false);

	const count = Signal(0);
	count.set(1);
	assert.equal(root.toStringDeep(), dump);
	assert.equal("toStringDeep" in count, false);
	assert.equal(count.get(), 1);
});
