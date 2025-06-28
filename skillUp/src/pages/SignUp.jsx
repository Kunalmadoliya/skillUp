import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {nanoid} from "nanoid";
import {asyncregisteruser} from "../store/actions/userActions";
import {IoBookSharp} from "react-icons/io5";
import {useDispatch} from "react-redux";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const signUpUser = (users) => {
    users.id = nanoid()
    users.role = "user"
    dispatch(asyncregisteruser(users));
    reset();
    toast.success("Account created successfully! Please Login Again")
    navigate("/login")
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b px-4 max-w-screen box-border overflow-x-hidden">
        <div className="border border-gray-200  max-w-md rounded-lg p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="flex justify-center mb-3">
          <div className="bg-white rounded-md p-3">
            <IoBookSharp className="text-4xl" />
          </div>
        </div>
            <h2 className="text-2xl font-semibold text-white mt-4">
              Create Your Account
            </h2>
            <p className="text-sm text-gray-400 text-center mt-1">
              Join SkillUp Hub and start tracking your learning journey today
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(signUpUser)}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                {...register("fullName")}
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-3 py-2 pr-10 bg-[#161b22] border border-[#30363d] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {/* Optionally add eye icon here */}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-3 py-2 pr-10 bg-[#161b22] border border-[#30363d] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {/* Optionally add eye icon here */}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-gray-400 mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-white underline hover:text-blue-400"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
