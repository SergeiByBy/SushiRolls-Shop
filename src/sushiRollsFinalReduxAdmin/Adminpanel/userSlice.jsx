import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
    email: null,
    token: null,
    id: null,
    },
    reducers: {
    setUsers(state, action) {
    state.email = action.payload.email;
    state.token = action.payload.token;
    state.id = action.payload.id;
    },
    removeUsers(state) {
    state.email = null;
    state.token = null;
    state.id = null;
    },
    },
    });
    

export const { setUsers, removeUsers } = userSlice.actions;
export default userSlice.reducer;
