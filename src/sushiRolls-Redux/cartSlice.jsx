import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addItemToCart(){
      const { action.payload: item} = actions;
       const existingItem = state.cart.find(i=>i.name===  item.name)
    },Ы
    // delItem: (state) => state - 1,
  },
});

export const { addItem, delItem } = cartSlice.actions;
export default cartSlice.reducer;
