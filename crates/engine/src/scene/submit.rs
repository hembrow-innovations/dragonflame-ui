use crate::layout::layout_rect;

use super::draw::{record, DrawRect};
use super::packed::Scene;

#[no_mangle]
pub extern "C" fn submit(scene: Scene) {
    let laid = layout_rect(
        scene.max_width,
        scene.max_height,
        scene.rect.width,
        scene.rect.height,
    );
    record(DrawRect {
        x: laid.x,
        y: laid.y,
        width: laid.width,
        height: laid.height,
        color: scene.rect.color,
    });
}
