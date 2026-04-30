import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // ➕ aumentar
  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  // ➖ disminuir
  const decrease = (id) => {
    const updated = cart
      .map(item =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter(item => item.count > 0); // 👈 elimina si llega a 0

    setCart(updated);
  };

  // 💰 total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="container mt-5">
      <h2>🛒 Carrito</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex justify-content-between align-items-center border p-3 mb-3"
        >
          <div className="d-flex align-items-center gap-3">
            <img src={pizza.img} width="60" />
            <span className="text-capitalize">{pizza.name}</span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span>${pizza.price.toLocaleString()}</span>

            <button
              className="btn btn-danger"
              onClick={() => decrease(pizza.id)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              className="btn btn-primary"
              onClick={() => increase(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ${total.toLocaleString()}</h3>

      <button className="btn btn-success mt-3">
        Pagar 💳
      </button>
    </div>
  );
};

export default Cart;