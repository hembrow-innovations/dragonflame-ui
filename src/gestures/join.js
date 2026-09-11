import { joinMember } from "./arena.js";
import { TapGestureRecognizer } from "./recognizers.js";

export function joinPressable(onPress) {
	joinMember(TapGestureRecognizer({ onPress }));
}
