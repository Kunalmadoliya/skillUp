import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {IoBookSharp} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {asynclogindetails} from "../store/actions/userActions";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const loginUser = (users) => {
    console.log(users);
    
    dispatch(asynclogindetails(users));
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center  space-y-5 px-4">
      <form
        className=" space-y-3 border border-gray-200 w-full max-w-md rounded-lg p-6 shadow-lg"
        onSubmit={handleSubmit(loginUser)}
      >
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-md p-3">
            <IoBookSharp className="text-4xl" />
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold text-white mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Sign in to your SkillUp Hub account to continue your learning journey
        </p>

        <div className="mb-5">
          <label className="block font-semibold text-gray-300 mb-3">
            Email
          </label>
          <input
            className="w-full rounded border border-gray-600 text-white p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("Email", {required: "Email is required"})}
            placeholder="Enter your email"
            type="email"
          />
          {errors.Email && (
            <p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>
          )}
        </div>

        <div className="mb-6 relative">
          <label className="block font-semibold text-gray-300 mb-3">
            Password
          </label>
          <input
            className="w-full rounded border border-gray-600 text-white p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("Password", {required: "Password is required"})}
            type="password"
            placeholder="Enter your password"
          />

          {errors.Password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.Password.message}
            </p>
          )}
        </div>

        <div className="mb-6 font-semibold bg-gray-700 rounded p-3 text-sm text-gray-300">
          <p className="mb-1 font-semibold">Demo Credentials:</p>
          <p>
            <span className="font-semibold">User:</span> john@example.com /
            password123
          </p>
          <p>
            <span className="font-semibold">Admin:</span> admin@skillup.com /
            admin123
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-gray-900 font-semibold py-2 rounded hover:bg-gray-200 transition"
        >
          Sign In
        </button>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-white underline hover:text-blue-400"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
