import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: null,
  token: null,
  id: null,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.id = action.payload.uid;
    },
    removeUsers(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUsers, removeUsers } = usersSlice.actions;

export default usersSlice.reducer;
