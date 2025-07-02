import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/UserSlice";
import CoursesSlice from "./reducers/CoursesSlice";

export const store = configureStore({
  reducer: {
    usersReducer: UserSlice,
    coursesReducer: CoursesSlice,
  },
});
