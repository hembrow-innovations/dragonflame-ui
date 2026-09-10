#[cfg(target_os = "macos")]
mod macos;
#[cfg(target_os = "macos")]
pub use macos::create_window;

#[cfg(not(target_os = "macos"))]
compile_error!("first desktop OS is macOS");
