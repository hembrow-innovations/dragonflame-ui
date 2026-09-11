# When to Mock

Mock at **system boundaries** only:

- External APIs (payment, email)
- Databases (prefer a test DB when you control it)
- Time and randomness
- File system (sometimes)

Double what you do not control. Use the real crate modules and `.drac` exports you own.

## Rust

Pass the boundary in as a trait. Do not construct the host client inside the fn under test.

```rust
trait PaymentClient {
    fn charge(&self, total: i32) -> Charge;
}

fn process_payment(order: &Order, payment: &dyn PaymentClient) -> Charge {
    payment.charge(order.total)
}
```

Prefer one method per external operation, not a generic `call(&str)` that the test must branch on.

```rust
trait ShopApi {
    fn get_user(&self, id: UserId) -> User;
    fn get_orders(&self, user_id: UserId) -> Vec<Order>;
    fn create_order(&self, data: NewOrder) -> Order;
}
```

Each test double returns one shape. No match-on-path inside the double.

## Draconic

Pass the host client in. Host APIs stay free globals at the edge; the fn under test still takes the collaborator.

```
function processPayment(order, paymentClient) {
  return paymentClient.charge(order.total);
}
```

Prefer one function per external operation:

```
const api = {
  getUser: (id) => fetchUser(id),
  getOrders: (userId) => fetchOrders(userId),
  createOrder: (data) => postOrder(data),
};
```

A single `fetch(endpoint, options)` double needs conditionals. Split operations so each double returns one shape.
