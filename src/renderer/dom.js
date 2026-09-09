export function render(component, parent) {
	const tree = component();
	const el = document.createElement(tree.type);
	el.textContent = tree.props.text;
	parent.appendChild(el);
}
