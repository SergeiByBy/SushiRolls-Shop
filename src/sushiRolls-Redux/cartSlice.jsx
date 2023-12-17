import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(){
       const existingItem = state.find()
    },
    delItem: (state) => state - 1,
  },
});

export const { addItem, delItem } = cartSlice.actions;
export default cartSlice.reducer;
