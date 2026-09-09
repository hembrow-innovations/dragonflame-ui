import { Owner } from "../owner/owner.js";
import { follow } from "../signals/signal.js";

const hostTag = { view: "div", text: "span" };

function mount(tree, parent) {
	const el = document.createElement(hostTag[tree.type] ?? tree.type);
	const props = tree.props ?? {};
	if (props.style) Object.assign(el.style, props.style);
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
