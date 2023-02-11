import { createSlice } from "@reduxjs/toolkit";
import { headphones } from "@/data/headphones";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, action) => {
      const itemId = action.payload;
      const filteredItem = headphones.find((item) => item.name === itemId);
      state.cartItems = [filteredItem, ...state.cartItems];
      state.amount = state.amount + 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.name !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.name === payload);
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.name === payload);
      cartItem.quantity = cartItem.quantity - 1;
      if (cartItem.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.name !== payload
        );
      }
    },
    total: (state) => {
      var amount = 0;
      var total = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { addToCart, removeItem, increase, decrease, total } =
  cartSlice.actions;
export default cartSlice.reducer;
