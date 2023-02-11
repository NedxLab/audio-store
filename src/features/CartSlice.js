import { createSlice } from "@reduxjs/toolkit";

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
      state.amount = state.amount + 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
