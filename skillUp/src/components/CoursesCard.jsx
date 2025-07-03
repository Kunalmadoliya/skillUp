import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link
      to={`/course/${course.id}`}
      className="w-full sm:w-[340px] md:w-[360px]"
    >
      <div className="flex flex-col bg-[#0f172a] text-white rounded-lg border border-gray-700 overflow-hidden shadow hover:shadow-lg transition duration-300">
        {/* Top: Image + Level + Price */}
        <div className="relative">
          <img
            src={course.img}
            alt={course.title}
            className="w-full h-44 object-cover"
          />
          {/* Level Badge */}
          <span
            className={`absolute top-2 left-2 px-2 py-0.5 text-xs font-medium rounded ${
              course.level === "Beginner"
                ? "bg-green-600"
                : course.level === "Intermediate"
                ? "bg-blue-600"
                : "bg-red-600"
            }`}
          >
            {course.level}
          </span>
          {/* Price */}
          <span className="absolute bottom-2 right-2 bg-white text-black text-xs font-semibold px-2 py-0.5 rounded">
            ${course.price}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          {/* Title */}
          <h3 className="text-lg font-semibold mb-1 leading-tight">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-3 line-clamp-2">
            {course.description}
          </p>

          {/* Instructor */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs font-semibold uppercase">
              {course.instructor?.[0] || "I"}
            </div>
            <span className="text-sm">{course.instructor}</span>
          </div>


          {/* Stats */}
          <div className="flex justify-between text-xs text-gray-400 mb-4">
            <span>⭐ {course.rating ?? "4.5"}</span>
            <span>⏱ {course.duration}</span>
            <span>👥 {course.students ?? "1000"}</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-auto">
            <button className="flex-1 border border-gray-600 rounded px-3 py-2 hover:bg-gray-700 transition">
              Wishlist
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 rounded px-3 py-2 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
