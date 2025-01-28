// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";

// Example slice (can be for cart, user, etc.)
const initialState = {
  cart: [],
};

const cartSlice = {
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
};

const store = configureStore({
  reducer: {
    cart: (state = cartSlice.initialState, action) => {
      switch (action.type) {
        case "cart/addToCart":
          return cartSlice.reducers.addToCart(state, action);
        case "cart/removeFromCart":
          return cartSlice.reducers.removeFromCart(state, action);
        default:
          return state;
      }
    },
  },
});

export default store;
