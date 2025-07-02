import React from "react";
import {useSelector} from "react-redux";

const Courses = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);
  console.log("COURSES:", courses);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-5 px-4">
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id} className="p-4 border border-gray-300 rounded">
            {course.title}
          </div>
        ))
      ) : (
        <p>No courses loaded.</p>
      )}
    </div>
  );
};

export default Courses;
