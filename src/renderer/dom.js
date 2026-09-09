import { Owner } from "../owner/owner.js";
import { follow } from "../signals/signal.js";

export function render(component, parent) {
	return Owner(() => {
		const tree = component();
		const el = document.createElement(tree.type);
		const text = tree.props.text;
		if (text != null && typeof text.get === "function") {
			follow(
				() => text.get(),
				(value) => {
					el.textContent = value;
				},
			);
		} else {
			el.textContent = text;
		}
		parent.appendChild(el);
	});
}
