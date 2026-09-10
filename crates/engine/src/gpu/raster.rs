use std::sync::mpsc::{self, Sender};
use std::sync::{Mutex, OnceLock};
use std::thread::{self, ThreadId};

use crate::scene::{recorded_draw_list, DrawRect};

enum Job {
    Submit(Vec<DrawRect>, Sender<()>),
}

struct Raster {
    tx: Sender<Job>,
    thread_id: ThreadId,
}

struct Gpu {
    device: wgpu::Device,
    queue: wgpu::Queue,
}

static RASTER: OnceLock<Raster> = OnceLock::new();
static GPU_SUBMIT_THREAD: Mutex<Option<ThreadId>> = Mutex::new(None);

impl Gpu {
    fn init() -> Self {
        let instance = wgpu::Instance::default();
        let adapter = pollster::block_on(instance.request_adapter(&wgpu::RequestAdapterOptions {
            compatible_surface: None,
            ..Default::default()
        }))
        .expect("adapter");
        let (device, queue) = pollster::block_on(adapter.request_device(
            &wgpu::DeviceDescriptor {
                label: None,
                required_features: wgpu::Features::empty(),
                required_limits: wgpu::Limits::default(),
                memory_hints: Default::default(),
            },
            None,
        ))
        .expect("device");
        Self { device, queue }
    }

    fn submit_list(&self, list: &[DrawRect]) {
        let (width, height, color) = list
            .first()
            .map(|rect| {
                (
                    rect.width.max(1.0) as u32,
                    rect.height.max(1.0) as u32,
                    wgpu::Color {
                        r: rect.color.r as f64,
                        g: rect.color.g as f64,
                        b: rect.color.b as f64,
                        a: rect.color.a as f64,
                    },
                )
            })
            .unwrap_or((1, 1, wgpu::Color::BLACK));
        let texture = self.device.create_texture(&wgpu::TextureDescriptor {
            label: None,
            size: wgpu::Extent3d {
                width,
                height,
                depth_or_array_layers: 1,
            },
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::Bgra8UnormSrgb,
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            view_formats: &[],
        });
        let view = texture.create_view(&wgpu::TextureViewDescriptor::default());
        let mut encoder = self
            .device
            .create_command_encoder(&wgpu::CommandEncoderDescriptor::default());
        {
            let _pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &view,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Clear(color),
                        store: wgpu::StoreOp::Store,
                    },
                })],
                ..Default::default()
            });
        }
        self.queue.submit(std::iter::once(encoder.finish()));
        *GPU_SUBMIT_THREAD.lock().expect("gpu thread") = Some(thread::current().id());
    }
}

fn raster() -> &'static Raster {
    RASTER.get_or_init(|| {
        let (tx, rx) = mpsc::channel();
        let (id_tx, id_rx) = mpsc::channel();
        thread::Builder::new()
            .name("raster".to_string())
            .spawn(move || {
                id_tx.send(thread::current().id()).expect("raster id");
                let gpu = Gpu::init();
                while let Ok(job) = rx.recv() {
                    match job {
                        Job::Submit(list, done) => {
                            gpu.submit_list(&list);
                            done.send(()).expect("done");
                        }
                    }
                }
            })
            .expect("raster");
        Raster {
            tx,
            thread_id: id_rx.recv().expect("raster id"),
        }
    })
}

pub fn raster_thread_id() -> ThreadId {
    raster().thread_id
}

pub fn last_gpu_submit_thread() -> ThreadId {
    GPU_SUBMIT_THREAD
        .lock()
        .expect("gpu thread")
        .expect("submitted")
}

pub fn gpu_submit_recorded() {
    let (done_tx, done_rx) = mpsc::channel();
    raster()
        .tx
        .send(Job::Submit(recorded_draw_list(), done_tx))
        .expect("raster");
    done_rx.recv().expect("gpu submit");
}
