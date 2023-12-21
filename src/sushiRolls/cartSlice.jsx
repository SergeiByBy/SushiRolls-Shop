import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const { payload: item } = action;
      const existingItem = state.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.count++;
      } else {
        state.push({ ...item, count: 1 });
      }
    },
    deleteFromToCart: (state, action) => {
      const { payload: item } = action;
      const itemIndex = state.findIndex((cart) => cart.name === item.name);
      const existingItem = state[itemIndex];
      existingItem.count--;
      if (existingItem.count === 0) {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addItemToCart, deleteFromToCart } = cartSlice.actions;

export default cartSlice.reducer;
