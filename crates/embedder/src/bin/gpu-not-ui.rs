fn main() {
    let queue = runtime::Queue::new();
    queue.post(|| {
        println!("frame-job");
        println!("ui-thread {:?}", std::thread::current().id());
        engine::submit(engine::Scene {
            max_width: 80.0,
            max_height: 40.0,
            rect: engine::Rect {
                width: 100.0,
                height: 50.0,
                color: engine::Color {
                    r: 1.0,
                    g: 0.0,
                    b: 0.0,
                    a: 1.0,
                },
            },
        });
        println!("draw-list {}", engine::recorded_draw_list().len());
        println!("record-thread {:?}", engine::last_record_thread());
        engine::gpu_submit_recorded();
        println!("gpu-submit-thread {:?}", engine::last_gpu_submit_thread());
    });
    queue.run();
    println!("raster-thread {:?}", engine::raster_thread_id());
}
