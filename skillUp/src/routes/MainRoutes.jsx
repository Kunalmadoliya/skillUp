import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Courses from "../pages/Courses";
import SignUp from "../pages/SignUp";
import SingleCourse from "../components/SingleCourse";
import { useSelector } from "react-redux";





const MainRoutes = () => {
  const user = useSelector((state) => state.userReducer)
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<SingleCourse />} />

        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
