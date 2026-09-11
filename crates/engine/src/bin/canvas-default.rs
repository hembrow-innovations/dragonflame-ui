fn main() {
    let scene = engine::Scene {
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
    };
    engine::submit(scene);
    let list = engine::recorded_draw_list();
    println!("packed-scene");
    println!("default-host {}", engine::recorded_host());
    println!("draw-list {}", list.len());
}
