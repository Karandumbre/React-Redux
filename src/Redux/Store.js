import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import logger from "redux-logger";

// Combine reducers
const rootReducer = {
  cake: cakeReducer,
  iceCream: iceCreamReducer,
};

// Configure the store with reducers and middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production", // Enable DevTools in development mode only
});

// Export the store
export default store;
