import { configureStore } from "@reduxjs/toolkit";
// apislice
import { entertainmentApi } from "../features/api/apiSlice";
// bookmarkSlice
import bookmarkReducer from "../features/bookmark/bookmarkSlice";

export const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
    [entertainmentApi.reducerPath]: entertainmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(entertainmentApi.middleware),
});
