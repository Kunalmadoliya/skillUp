import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex border">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Register</NavLink>
      </nav>
    </>
  );
};

export default Nav;
