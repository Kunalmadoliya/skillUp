import React from "react";
import { useSelector } from "react-redux";
import CoursesCard from "../components/CoursesCard";

const Courses = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);
  console.log(courses);

  return (
    <div className="min-h-screen w-full px-4 py-6">
      {courses.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {courses.map((course, index) => (
            <CoursesCard key={index} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-white text-center">No courses loaded.</p>
      )}
    </div>
  );
};

export default Courses;
