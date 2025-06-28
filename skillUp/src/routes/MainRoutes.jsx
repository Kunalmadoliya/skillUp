import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";

import Courses from "../pages/Courses";
import SignUp from "../pages/SignUp";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
