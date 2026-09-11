#[cfg(not(target_os = "ios"))]
mod vsync;
#[cfg(not(target_os = "ios"))]
mod window;
#[cfg(not(target_os = "ios"))]
pub use vsync::open_vsync_window;

#[cfg(target_os = "ios")]
mod ios;
