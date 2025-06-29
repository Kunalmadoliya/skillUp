import ShinyText from "./ShinyText";
import { NavLink } from "react-router-dom";
import { IoSchoolOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Nav = () => {
  const user = useSelector((state) => state.usersReducer.user);
  console.log(user);

  return (
    <nav className="flex items-center justify-between px-8 md:px-16 py-5 backdrop-blur border-b border-gray-700 bg-[#0d1117]/90">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-md">
          <IoSchoolOutline className="text-white text-2xl" />
        </div>
        <ShinyText
          text="SkillUp Hub"
          disabled={false}
          speed={3}
          className="text-2xl font-semibold"
        />
      </div>

      {/* Links */}
      <div className="flex items-center space-x-4">
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition ${
              isActive
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`
          }
        >
          <ShinyText
            text="Browse Courses"
            disabled={false}
            speed={3}
            className="font-semibold"
          />
        </NavLink>

        {user.role === "admin" ? (
          <NavLink
            to="/admin/create-product"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`
            }
          >
            <ShinyText
              text="Create Product"
              disabled={false}
              speed={3}
              className="font-semibold"
            />
          </NavLink>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`
              }
            >
              <ShinyText
                text="Login"
                disabled={false}
                speed={3}
                className="font-semibold"
              />
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`
              }
            >
              <ShinyText
                text="Sign Up"
                disabled={false}
                speed={3}
                className="font-semibold"
              />
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
