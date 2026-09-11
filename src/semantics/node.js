function dump(node, indent) {
	const lines = [`${indent}SemanticsNode`];
	if (node.testID != null) lines.push(`${indent}  testID: ${JSON.stringify(node.testID)}`);
	if (node.accessibilityLabel != null) {
		lines.push(`${indent}  accessibilityLabel: ${JSON.stringify(node.accessibilityLabel)}`);
	}
	for (const child of node.children) lines.push(dump(child, `${indent}  `));
	return lines.join("\n");
}

export function SemanticsNode(props = {}) {
	const node = {
		testID: props.testID,
		accessibilityLabel: props.accessibilityLabel,
		children: [...(props.children ?? [])],
		toStringDeep() {
			return dump(node, "");
		},
	};
	return node;
}
