import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers"; // Assuming your reducer file exports the user reducer

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
