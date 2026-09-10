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
    let draw = list.first().expect("draw list");
    println!("packed-scene");
    println!("taffy-layout {} {}", draw.width, draw.height);
    println!("draw-list {}", list.len());
    println!(
        "draw-color {} {} {} {}",
        draw.color.r, draw.color.g, draw.color.b, draw.color.a
    );
}
