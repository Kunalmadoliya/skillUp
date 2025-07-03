import React from "react";
import { FaStar, FaUserFriends } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import {  useNavigate } from "react-router-dom";

const Home = () => {
  const navigate =  useNavigate()
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B0F1A] to-[#141B2D] text-white flex flex-col items-center justify-center px-4">
      {/* Welcome badge */}
      <div className="mb-4">
        <span className="px-4 py-1 bg-[#1F2937] rounded-full text-sm font-medium">
          🎓 Welcome to the future of learning
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight">
        Master New Skills
        <br />
        <span className="text-purple-500">with SkillUp Hub</span>
      </h1>

      {/* Subtext */}
      <p className="text-center text-gray-300 mt-4 max-w-2xl text-lg">
        Your comprehensive platform for tracking, managing, and excelling in online courses.
        Join thousands of learners on their journey to success.
      </p>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        <button  onClick={() => navigate("/signup")} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition">
          Get Started Free
          <HiArrowRight className="text-xl" />
        </button>
        <button onClick={() =>navigate("/courses")} className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition border border-white/10">
          Explore Courses
        </button>
      </div>

      {/* Features */}
      <div className="flex gap-6 mt-8 flex-wrap justify-center text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          💰 <span>30-day money back</span>
        </div>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          4.7/5 rating
        </div>
        <div className="flex items-center gap-2">
          <FaUserFriends />
          10k+ students
        </div>
      </div>
    </main>
  );
};

export default Home;

