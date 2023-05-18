import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarked: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addRemoveBookmark: (state, action) => {
      const index = state.bookmarked.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.bookmarked.splice(index, 1);
      } else {
        state.bookmarked.push(action.payload);
      }
    },
  },
});

export const { addRemoveBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
