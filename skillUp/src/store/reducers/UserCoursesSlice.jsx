import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCourses: [],
};

const UserCoursesSlice = createSlice({
  name: "userCourses",
  initialState,
  reducers: {
    loadusercourses: (state, action) => {
      state.userCourses = action.payload;
    },
  },
});

export default UserCoursesSlice.reducer;
export const { loadusercourses } = UserCoursesSlice.actions;
