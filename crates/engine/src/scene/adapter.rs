use crate::layout::layout_rect;

use super::draw::DrawRect;
use super::host::record_default;
use super::layer::{platform_view, record};
use super::packed::Scene;

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

    fn layout_and_measure(&self, desc: LeafDesc, scene: Scene) -> DrawRect {
        let _ = desc;
        let laid = layout_rect(
            scene.max_width,
            scene.max_height,
            scene.rect.width,
            scene.rect.height,
        );
        DrawRect {
            x: laid.x,
            y: laid.y,
            width: laid.width,
            height: laid.height,
            color: scene.rect.color,
        }
    }

    pub(super) fn record_packed(&self, scene: Scene) {
        let rect = self.layout_and_measure(LeafDesc, scene);
        super::draw::record(rect);
    }

    pub fn hold(&self, slot_id: u64) {
        record(platform_view(slot_id));
        record_default();
    }
}
