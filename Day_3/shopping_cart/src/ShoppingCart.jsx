import React, { useState } from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Jollof Rice", price: 1500, quantity: 2 },
    { id: 2, name: "Plantain", price: 500, quantity: 1 },
    { id: 3, name: "Suya", price: 1200, quantity: 1 },
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
  };

  // Decrease quantity (not below 1)
  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updated);
  };

  // Remove item completely
  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>
                {item.name} - ₦{item.price.toLocaleString()} x {item.quantity} ={" "}
                <strong>₦{(item.price * item.quantity).toLocaleString()}</strong>
              </p>
              <div className="btn-group">
                <button onClick={() => increaseQty(item.id)}>+</button>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <button className="remove" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3 className="total">Total: ₦{total.toLocaleString()}</h3>
          <button className="clear" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
