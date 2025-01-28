// src/pages/Cart.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleRemoveFromCart = (book) => {
    dispatch({ type: "cart/removeFromCart", payload: book });
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((book) => (
            <div key={book.id}>
              <h3>{book.title}</h3>
              <button onClick={() => handleRemoveFromCart(book)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
