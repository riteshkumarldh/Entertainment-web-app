import { configureStore } from "@reduxjs/toolkit";
// apislice
import { entertainmentApi } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [entertainmentApi.reducerPath]: entertainmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(entertainmentApi.middleware),
});
