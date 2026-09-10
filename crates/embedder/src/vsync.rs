use winit::application::ApplicationHandler;
use winit::event::WindowEvent;
use winit::event_loop::{ActiveEventLoop, EventLoop};
use winit::window::{Window, WindowId};

use crate::window::create_window;

#[derive(Debug)]
pub enum EmbedderError {
    EventLoop,
    Window,
    Gpu,
    Vsync,
}

impl std::fmt::Display for EmbedderError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            EmbedderError::EventLoop => write!(f, "event loop"),
            EmbedderError::Window => write!(f, "window"),
            EmbedderError::Gpu => write!(f, "gpu"),
            EmbedderError::Vsync => write!(f, "vsync"),
        }
    }
}

impl std::error::Error for EmbedderError {}

struct Host {
    window: Option<Window>,
    vsyncs: u32,
    error: Option<EmbedderError>,
}

impl ApplicationHandler for Host {
    fn resumed(&mut self, event_loop: &ActiveEventLoop) {
        if self.window.is_some() {
            return;
        }
        match create_window(event_loop) {
            Ok(window) => {
                window.request_redraw();
                self.window = Some(window);
            }
            Err(_) => {
                self.error = Some(EmbedderError::Window);
                event_loop.exit();
            }
        }
    }

    fn window_event(&mut self, event_loop: &ActiveEventLoop, _id: WindowId, event: WindowEvent) {
        match event {
            WindowEvent::RedrawRequested => {
                if self.vsyncs >= 1 {
                    event_loop.exit();
                    return;
                }
                let Some(window) = self.window.as_ref() else {
                    self.error = Some(EmbedderError::Window);
                    event_loop.exit();
                    return;
                };
                let size = window.inner_size();
                if engine::present_one_vsync(window, size.width, size.height).is_err() {
                    self.error = Some(EmbedderError::Gpu);
                    event_loop.exit();
                    return;
                }
                self.vsyncs += 1;
                println!("gpu-surface");
                println!("vsync");
                event_loop.exit();
            }
            WindowEvent::CloseRequested => event_loop.exit(),
            _ => {}
        }
    }
}

pub fn open_vsync_window() -> Result<(), EmbedderError> {
    let event_loop = EventLoop::new().map_err(|_| EmbedderError::EventLoop)?;
    let mut host = Host {
        window: None,
        vsyncs: 0,
        error: None,
    };
    event_loop
        .run_app(&mut host)
        .map_err(|_| EmbedderError::EventLoop)?;
    if let Some(error) = host.error {
        return Err(error);
    }
    if host.vsyncs < 1 {
        return Err(EmbedderError::Vsync);
    }
    Ok(())
}
