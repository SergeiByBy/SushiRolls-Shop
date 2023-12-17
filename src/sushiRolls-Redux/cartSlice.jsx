import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addItemToCart(state, actions){
    const {payload: item } = actions;
    const existingItem = state.cart.find((i)=>i.name === item.name);
    if (existingItem) {
      existingItem.count++;
    }
    else {
      state.cart.push({...item, count:1})
    }
    }
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
