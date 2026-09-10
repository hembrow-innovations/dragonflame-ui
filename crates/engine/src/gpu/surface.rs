#[derive(Debug)]
pub enum GpuError {
    Surface,
    Adapter,
    Device,
    Present,
}

impl std::fmt::Display for GpuError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            GpuError::Surface => write!(f, "gpu surface"),
            GpuError::Adapter => write!(f, "gpu adapter"),
            GpuError::Device => write!(f, "gpu device"),
            GpuError::Present => write!(f, "gpu present"),
        }
    }
}

impl std::error::Error for GpuError {}

pub fn present_one_vsync(
    window: &impl wgpu::WindowHandle,
    width: u32,
    height: u32,
) -> Result<(), GpuError> {
    let instance = wgpu::Instance::default();
    let surface = instance
        .create_surface(window)
        .map_err(|_| GpuError::Surface)?;
    let adapter = pollster::block_on(instance.request_adapter(&wgpu::RequestAdapterOptions {
        compatible_surface: Some(&surface),
        ..Default::default()
    }))
    .ok_or(GpuError::Adapter)?;
    let (device, queue) = pollster::block_on(adapter.request_device(
        &wgpu::DeviceDescriptor {
            label: None,
            required_features: wgpu::Features::empty(),
            required_limits: wgpu::Limits::default(),
            memory_hints: Default::default(),
        },
        None,
    ))
    .map_err(|_| GpuError::Device)?;
    let caps = surface.get_capabilities(&adapter);
    let format = *caps.formats.first().ok_or(GpuError::Surface)?;
    let alpha = *caps.alpha_modes.first().ok_or(GpuError::Surface)?;
    surface.configure(
        &device,
        &wgpu::SurfaceConfiguration {
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            format,
            width: width.max(1),
            height: height.max(1),
            present_mode: wgpu::PresentMode::Fifo,
            alpha_mode: alpha,
            view_formats: vec![],
            desired_maximum_frame_latency: 2,
        },
    );
    let frame = surface.get_current_texture().map_err(|_| GpuError::Present)?;
    let view = frame.texture.create_view(&wgpu::TextureViewDescriptor::default());
    let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor::default());
    {
        let _pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                view: &view,
                resolve_target: None,
                ops: wgpu::Operations {
                    load: wgpu::LoadOp::Clear(wgpu::Color::BLACK),
                    store: wgpu::StoreOp::Store,
                },
            })],
            ..Default::default()
        });
    }
    queue.submit(std::iter::once(encoder.finish()));
    frame.present();
    Ok(())
}
