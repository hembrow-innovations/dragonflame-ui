use super::adapter::Adapter;
use super::packed::Scene;

#[no_mangle]
pub extern "C" fn submit(scene: Scene) {
    Adapter::native().record_packed(scene);
}
