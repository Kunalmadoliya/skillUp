import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "../store/reducers/UserSlice";
import CoursesSlice from "../store/reducers/CoursesSlice";
import ReviewSlice from "../store/reducers/ReviewSlice";
import NotesSlice from "../store/reducers/NotesSlice";
import PurchaseSlice from "../store/reducers/PurchaseSlice";
import UserCoursesSlice from "../store/reducers/UserCoursesSlice";

export const store = configureStore({ 
  reducer: {
    usersReducer: UserSlice,
    coursesReducer: CoursesSlice,
    reviewsReducer: ReviewSlice,
    userCoursesReducer: UserCoursesSlice,
    noteReducer: NotesSlice,
    purchasesReducer: PurchaseSlice,
  },
});
