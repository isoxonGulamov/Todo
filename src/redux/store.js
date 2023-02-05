import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./redusers/future"
export const store = configureStore(
  {
    reducer: {
      todo:todoSlice,
    }
  }
)