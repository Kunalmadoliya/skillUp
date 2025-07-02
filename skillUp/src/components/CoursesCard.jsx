import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col bg-[#0f172a] text-white rounded-lg border border-gray-700 overflow-hidden w-full max-w-xs">
      {/* Top: Image + Level + Price */}
      <div className="relative">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-40 object-cover"
        />
        {/* Level Badge */}
        <span
          className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded ${
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
        <span className="absolute bottom-2 right-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded">
          ${course.price}
        </span>
      </div>

      {/* Middle: Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold">{course.title}</h3>
        {/* Description */}
        <p className="text-sm text-gray-400 mt-1 flex-1">{course.description}</p>
        
        {/* Instructor */}
        <div className="flex items-center gap-2 mt-3">
          <div className="w-6 h-6 rounded-full bg-gray-600"></div>
          <span className="text-sm">{course.instructor}</span>
        </div>

        

        {/* Stats */}
        <div className="flex justify-between text-xs text-gray-400 mt-3">
          <span>⭐ {course.rating ?? "4.5"}</span>
          <span>⏱ {course.duration}</span>
          <span>👥 {course.students ?? "1000"}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 border border-gray-600 rounded px-3 py-1 hover:bg-gray-700">
            Wishlist
          </button>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 rounded px-3 py-1">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
