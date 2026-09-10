use taffy::prelude::*;

pub struct LaidOut {
    pub x: f32,
    pub y: f32,
    pub width: f32,
    pub height: f32,
}

pub fn layout_rect(max_width: f32, max_height: f32, width: f32, height: f32) -> LaidOut {
    let mut tree: TaffyTree<()> = TaffyTree::new();
    let node = tree
        .new_leaf(Style {
            size: Size {
                width: length(width),
                height: length(height),
            },
            max_size: Size {
                width: percent(1.0),
                height: percent(1.0),
            },
            ..Default::default()
        })
        .expect("leaf");
    tree.compute_layout(
        node,
        Size {
            width: AvailableSpace::Definite(max_width),
            height: AvailableSpace::Definite(max_height),
        },
    )
    .expect("layout");
    let layout = tree.layout(node).expect("output");
    LaidOut {
        x: layout.location.x,
        y: layout.location.y,
        width: layout.size.width,
        height: layout.size.height,
    }
}
