#[cfg(not(any(target_os = "ios", target_os = "android")))]
mod vsync;
#[cfg(not(any(target_os = "ios", target_os = "android")))]
mod window;
#[cfg(not(any(target_os = "ios", target_os = "android")))]
pub use vsync::open_vsync_window;

#[cfg(target_os = "ios")]
mod ios;

#[cfg(target_os = "android")]
mod android;
