fn main() {
    let adapter = engine::Adapter::native();
    adapter.hold(7);
    let layer = engine::recorded_layer_tree()
        .into_iter()
        .next()
        .expect("layer");
    println!("layer-kind {}", layer.kind());
    println!("slot-id {}", layer.slot_id());
    println!("adapter {}", adapter.kind());
}
