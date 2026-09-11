fn main() {
    engine::Adapter::native().hold(7);
    println!("default-host {}", engine::recorded_host());
}
