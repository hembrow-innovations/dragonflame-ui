use std::sync::Mutex;

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum Kind {
    PlatformView,
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Layer {
    kind: Kind,
    slot_id: u64,
}

impl Layer {
    pub fn kind(self) -> &'static str {
        match self.kind {
            Kind::PlatformView => "platform-view",
        }
    }

    pub fn slot_id(self) -> u64 {
        self.slot_id
    }
}

static TREE: Mutex<Vec<Layer>> = Mutex::new(Vec::new());

pub fn record(layer: Layer) {
    let mut tree = TREE.lock().expect("layer tree");
    tree.clear();
    tree.push(layer);
}

pub fn recorded_layer_tree() -> Vec<Layer> {
    TREE.lock().expect("layer tree").clone()
}

pub(super) fn platform_view(slot_id: u64) -> Layer {
    Layer {
        kind: Kind::PlatformView,
        slot_id,
    }
}
