import ShinyText from "./ShinyText";
import {NavLink} from "react-router-dom";
import {IoSchoolOutline} from "react-icons/io5";
import {useSelector} from "react-redux";
import {useState} from "react";
import CreateProducts from "../pages/admin/CreateProducts";

const Nav = () => {
  const user = useSelector((state) => state.usersReducer.user);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
            className={({isActive}) =>
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
            <button
              onClick={() => setIsOpen(true)}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 border hover:text-white hover:bg-gray-700 transition"
            >
              <ShinyText
                text="Create Product"
                disabled={false}
                speed={3}
                className="font-semibold"
              />
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({isActive}) =>
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
                className={({isActive}) =>
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

      {isOpen && (
        <div
          className="
      fixed 
      inset-0 
      z-50 
      flex 
      items-center 
      justify-center 
      bg-black/20 
      backdrop-blur-md
    "
        >
          <div className="relative max-w-2xl w-full mx-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white rounded p-1"
            >
              ✕
            </button>
            <CreateProducts />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
