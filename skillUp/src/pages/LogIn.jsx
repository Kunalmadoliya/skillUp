import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { asynclogindetails } from "../store/actions/userActions";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const loginUser = (users) => {
    users.role = "user"
    dispatch(asynclogindetails(users));
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <form
        className="space-y-6 w-full max-w-md bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-2xl"
        onSubmit={handleSubmit(loginUser)}
      >
        <div className="flex justify-center mb-4">
          <div className="bg-gray-800 rounded-full p-4">
            <IoBookSharp className="text-3xl text-blue-500" />
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold text-white">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400">
          Sign in to your SkillUp Hub account
        </p>

        <div>
          <label className="block text-gray-300 font-medium mb-1">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-300 font-medium mb-1">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm text-gray-400">
          <p className="mb-1 font-semibold">Demo Credentials:</p>
          <p>
            <span className="font-semibold">User:</span> john@example.com / password123
          </p>
          <p>
            <span className="font-semibold">Admin:</span> admin@skillup.com / admin123
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </button>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-blue-400 font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
