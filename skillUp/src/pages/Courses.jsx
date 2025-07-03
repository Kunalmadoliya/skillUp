import React from "react";
import { useSelector } from "react-redux";
import CoursesCard from "../components/CoursesCard";

const Courses = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);

  return (
    <div className="min-h-screen w-full bg-[#0b1120] px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">
          Browse Courses
        </h1>
        <p className="text-gray-400 mb-8">
          Discover and enroll in courses that match your learning goals
        </p>

        {courses.length > 0 ? (
          <div className="grid   sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <CoursesCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">No courses loaded.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;

