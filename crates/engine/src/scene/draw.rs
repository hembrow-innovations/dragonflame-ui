use std::sync::Mutex;

use super::packed::Color;

#[derive(Clone, Copy, Debug, PartialEq)]
pub struct DrawRect {
    pub x: f32,
    pub y: f32,
    pub width: f32,
    pub height: f32,
    pub color: Color,
}

static DRAW_LIST: Mutex<Vec<DrawRect>> = Mutex::new(Vec::new());

pub fn record(rect: DrawRect) {
    let mut list = DRAW_LIST.lock().expect("draw list");
    list.clear();
    list.push(rect);
}

pub fn recorded_draw_list() -> Vec<DrawRect> {
    DRAW_LIST.lock().expect("draw list").clone()
}
