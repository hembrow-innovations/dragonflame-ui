import { joinPressable } from "../gestures/join.js";
import { pressable } from "../leaves/pressable.js";

export function h(type, props) {
	if (type === pressable && typeof props?.onPress === "function") joinPressable(props.onPress);
	return { type, props };
}
