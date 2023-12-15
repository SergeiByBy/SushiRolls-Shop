import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: 0,
    reducers: {
addItem: state=>state+1,
delItem: state=>state-1,

    }
});

export const { addItem, delItem } = cartSlice.actions;
export default cartSlice.reducer;