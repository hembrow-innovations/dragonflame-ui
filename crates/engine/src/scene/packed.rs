#[repr(C)]
#[derive(Clone, Copy, Debug, PartialEq)]
pub struct Color {
    pub r: f32,
    pub g: f32,
    pub b: f32,
    pub a: f32,
}

#[repr(C)]
#[derive(Clone, Copy, Debug, PartialEq)]
pub struct Rect {
    pub width: f32,
    pub height: f32,
    pub color: Color,
}

#[repr(C)]
#[derive(Clone, Copy, Debug, PartialEq)]
pub struct Scene {
    pub max_width: f32,
    pub max_height: f32,
    pub rect: Rect,
}
