mod draw;
mod host;
mod packed;
mod submit;

pub use draw::{last_record_thread, recorded_draw_list, DrawRect};
pub use host::recorded_host;
pub use packed::{Color, Rect, Scene};
pub use submit::submit;
