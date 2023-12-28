import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../userSlices/userSlice";

export default configureStore({
  reducer: {
    user: usersReducer,
  },
});
