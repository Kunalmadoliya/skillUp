import axios from "../../api/api";
import loadCourses from "../reducers/CoursesSlice";

export const asyncLoadCourse = () => async (dispatch, getState) => {
  try {
    const {data} = await axios.get("/courses");
    dispatch(loadCourses(data));
  } catch (error) {}
};
export const asyncCreateCourse = (courses) => async (dispatch, getState) => {
  try {
    await axios.post("/courses", courses);
    dispatch(asyncLoadCourse());
    console.log(courses);
  } catch (error) {}
};
