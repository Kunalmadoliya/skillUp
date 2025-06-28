import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    loadcourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export default CoursesSlice.reducer;
export const { loadcourses } = CoursesSlice.actions;
