import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

const ReviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    loadreviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export default ReviewSlice.reducer;
export const { loadreviews } = ReviewSlice.actions;
