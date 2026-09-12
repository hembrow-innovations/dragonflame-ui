use super::host::record_default;
use super::layer::{platform_view, record};

#[repr(C)]
struct LeafDesc;

enum NativeLeaf {
    View,
    Text,
    Image,
    Scroll,
    TextInput,
    Pressable,
}

pub struct Adapter([LeafDesc; 6]);

impl Adapter {
    pub fn native() -> Self {
        Self([
            Self::describe(NativeLeaf::View),
            Self::describe(NativeLeaf::Text),
            Self::describe(NativeLeaf::Image),
            Self::describe(NativeLeaf::Scroll),
            Self::describe(NativeLeaf::TextInput),
            Self::describe(NativeLeaf::Pressable),
        ])
    }

    fn describe(leaf: NativeLeaf) -> LeafDesc {
        match leaf {
            NativeLeaf::View
            | NativeLeaf::Text
            | NativeLeaf::Image
            | NativeLeaf::Scroll
            | NativeLeaf::TextInput
            | NativeLeaf::Pressable => LeafDesc,
        }
    }

    pub fn kind(&self) -> &'static str {
        let Adapter(leaves) = self;
        let _ = leaves;
        "native"
    }

    pub fn hold(&self, slot_id: u64) {
        record(platform_view(slot_id));
        record_default();
    }
}
