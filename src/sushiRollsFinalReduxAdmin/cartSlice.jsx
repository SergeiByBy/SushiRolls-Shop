// import { createSlice } from "@reduxjs/toolkit";
// // JSON.parse(localStorage.getItem("cart")) || [],
// const cartSlice = createSlice({

//   const initialState2 = {
//     email: null,
//     token: null,
//     id: null,
//   };

//   name: "cart",
//   name: "user",
//   initialState: JSON.parse(localStorage.getItem("cart")) || [],
//   initialState2,
//   reducers: {
//     addItemToCart: (state, action) => {
//       const { payload: item } = action;
//       const existingItem = state.find((i) => i.name === item.name);
//       if (existingItem) {
//         existingItem.count++;
//       } else {
//         state.push({ ...item, count: 1 });
//       }
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     minusElFromCart: (state, action) => {
//       const { payload: item } = action;
//       const itemIndex = state.findIndex((cart) => cart.name === item.name);
//       const existingItem = state[itemIndex];
//       existingItem.count--;
//       if (existingItem.count === 0) {
//         state.splice(itemIndex, 1);
//       }
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     clearCart: (state) => {
//       state = [];
//       localStorage.removeItem("cart");
//     },
//     deleteElfromCart: (state, action)=>{
//         const {payload: item} = action;
//         const itemIndex = state.findIndex((cart) => cart.name === item.name);
//         state.splice(itemIndex, 1);
//         localStorage.setItem("cart", JSON.stringify(state));
//     },
//     setUsers(state, action) {
//       state.email = action.payload.email;
//       state.token = action.payload.token;
//       state.id = action.payload.id;
//     },
//     removeUsers(state) {
//       state.email = null;
//       state.token = null;
//       state.id = null;
//     },
//   },
// });

// export const { addItemToCart, minusElFromCart, deleteElfromCart } = cartSlice.actions;

// export default cartSlice.reducer;

////////////////////////////////////////////////////////

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addItemToCart: (state, action) => {
      const { payload: item } = action;
      const existingItem = state.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.count++;
      } else {
        state.push({ ...item, count: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    minusElFromCart: (state, action) => {
      const { payload: item } = action;
      const itemIndex = state.findIndex((cart) => cart.name === item.name);
      const existingItem = state[itemIndex];
      existingItem.count--;
      if (existingItem.count === 0) {
        state.splice(itemIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state = [];
      localStorage.removeItem("cart");
    },
    deleteElfromCart: (state, action) => {
      const { payload: item } = action;
      const itemIndex = state.findIndex((cart) => cart.name === item.name);
      state.splice(itemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItemToCart, minusElFromCart, deleteElfromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
