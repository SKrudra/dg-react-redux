import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/conter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
