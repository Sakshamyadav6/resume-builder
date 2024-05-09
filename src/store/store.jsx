import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "../slice/detailSlice";

export const store = configureStore({
  reducer: {
    detailSlice: detailSlice,
  },
});
