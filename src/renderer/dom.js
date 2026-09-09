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
	const style = props.style;
	if (style != null && typeof style.get === "function") {
		follow(
			() => style.get(),
			(next) => {
				Object.assign(el.style, next);
			},
		);
	} else if (style) {
		Object.assign(el.style, style);
	}
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
	if (children != null && typeof children.get === "function") {
		follow(
			() => children.get(),
			(next) => {
				el.textContent = "";
				if (next) mount(next, el);
			},
		);
	} else if (children != null) {
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
