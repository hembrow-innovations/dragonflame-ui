use winit::event_loop::ActiveEventLoop;
use winit::window::Window;

pub fn create_window(event_loop: &ActiveEventLoop) -> Result<Window, winit::error::OsError> {
    event_loop.create_window(
        Window::default_attributes()
            .with_title("dragonflame")
            .with_inner_size(winit::dpi::LogicalSize::new(64.0, 64.0)),
    )
}
