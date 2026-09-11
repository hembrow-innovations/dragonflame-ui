# Good and Bad Tests

Characteristics of a good test:

- Tests behavior callers care about
- Uses the public API only
- Survives internal refactors
- Describes WHAT, not HOW
- One logical assertion per test

## Rust

**Good:** observable behavior at the crate seam.

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn submit_records_a_colored_rect() {
        submit(red_rect_scene());
        let list = recorded_draw_list();
        assert_eq!(list.len(), 1);
        assert_eq!(list[0].color, Color { r: 1.0, g: 0.0, b: 0.0, a: 1.0 });
    }
}
```

**Bad:** coupled to internals.

```rust
#[test]
fn submit_calls_queue_submit() {
    let queue = mock_queue();
    submit_with(red_rect_scene(), &queue);
    assert_eq!(queue.submit_calls(), 1);
}
```

**Bad:** bypasses the interface.

```rust
#[test]
fn create_user_writes_a_row() {
    create_user("Alice");
    let row = db::query("SELECT name FROM users WHERE name = 'Alice'");
    assert!(row.is_some());
}
```

**Good:** verifies through the interface.

```rust
#[test]
fn create_user_makes_user_retrievable() {
    let user = create_user("Alice").expect("create");
    let got = get_user(user.id).expect("get");
    assert_eq!(got.name, "Alice");
}
```

**Tautological:** expected value restates the implementation.

```rust
#[test]
fn calculate_total_sums_line_items() {
    let items = [Item { price: 10 }, Item { price: 5 }];
    let expected: i32 = items.iter().map(|i| i.price).sum();
    assert_eq!(calculate_total(&items), expected);
}
```

**Good:** independent literal.

```rust
#[test]
fn calculate_total_sums_line_items() {
    assert_eq!(calculate_total(&[Item { price: 10 }, Item { price: 5 }]), 15);
}
```

Red flags: mocking sibling modules, testing private fns, asserting call counts, names that describe HOW.

## Draconic

Host globals: `describe`, `it`, `expect`. Run with `draconic test <path>`.

**Good:** observable behavior at the Program seam.

```
describe("submit", () => {
  it("records a colored rect", () => {
    submit(redRectScene());
    const list = recordedDrawList();
    expect(list.length).toBe(1);
    expect(list[0].color.r).toBe(1);
  });
});
```

**Bad:** coupled to internals.

```
describe("submit", () => {
  it("calls queue.submit", () => {
    const queue = { submitCalls: 0, submit() { this.submitCalls = 1; } };
    submitWith(redRectScene(), queue);
    expect(queue.submitCalls).toBe(1);
  });
});
```

**Bad:** bypasses the interface.

```
describe("createUser", () => {
  it("saves to the database", () => {
    createUser({ name: "Alice" });
    const row = db.query("SELECT * FROM users WHERE name = ?", ["Alice"]);
    expect(row).toBeTruthy();
  });
});
```

**Good:** verifies through the interface.

```
describe("createUser", () => {
  it("makes the user retrievable", () => {
    const user = createUser({ name: "Alice" });
    const got = getUser(user.id);
    expect(got.name).toBe("Alice");
  });
});
```

**Tautological:** expected value restates the implementation.

```
it("sums line items", () => {
  const items = [{ price: 10 }, { price: 5 }];
  const expected = items.reduce((sum, i) => sum + i.price, 0);
  expect(calculateTotal(items)).toBe(expected);
});
```

**Good:** independent literal.

```
it("sums line items", () => {
  expect(calculateTotal([{ price: 10 }, { price: 5 }])).toBe(15);
});
```
