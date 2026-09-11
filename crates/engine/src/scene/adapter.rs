use super::host::record_default;
use super::layer::{platform_view, record};

pub struct Adapter;

impl Adapter {
    pub fn native() -> Self {
        Self
    }

    pub fn kind(&self) -> &'static str {
        "native"
    }

    pub fn hold(&self, slot_id: u64) {
        record(platform_view(slot_id));
        record_default();
    }
}
