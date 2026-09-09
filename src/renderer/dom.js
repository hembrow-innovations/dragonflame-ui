import { Owner } from "../owner/owner.js";
import { follow } from "../signals/signal.js";

const hostTag = {
	view: "div",
	text: "span",
	image: "img",
	scroll: "div",
	"text-input": "input",
	pressable: "button",
};

function mount(tree, parent) {
	if (typeof tree.type === "function") {
		mount(tree.type(tree.props ?? {}), parent);
		return;
	}
	const tag = hostTag[tree.type];
	if (!tag) throw new Error(tree.type);
	const el = document.createElement(tag);
	const props = tree.props ?? {};
	if (props.style) Object.assign(el.style, props.style);
	if (props.testID != null) el["data-testid"] = props.testID;
	if (props.accessibilityLabel != null) el["aria-label"] = props.accessibilityLabel;
	const value = props.text;
	if (value != null && typeof value.get === "function") {
		follow(
			() => value.get(),
			(next) => {
				el.textContent = next;
			},
		);
	} else if (value != null) {
		el.textContent = value;
	}
	const children = props.children;
	if (children != null) {
		for (const child of [].concat(children)) {
			if (child) mount(child, el);
		}
	}
	parent.appendChild(el);
}

export function render(component, parent) {
	return Owner(() => {
		mount(component(), parent);
	});
}
