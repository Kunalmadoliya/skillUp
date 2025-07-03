import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {asyncCreateCourse} from "../../store/actions/courseAction"
import { nanoid } from "nanoid";

const CreateCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (courses) => {
    courses.id = nanoid()
    dispatch(asyncCreateCourse(courses));
    toast.success("Course Created");
    navigate("/courses");
    reset();

    console.log(courses);
    
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#0f172a] text-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-2">Create New Course</h2>
      <p className="text-gray-400 mb-4">
        Add a new course to the platform. Fill in all the required information.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Row 1: Course Title & Instructor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Course Title *</label>
            <input
              type="text"
              {...register("title", { required: "Course title is required" })}
              placeholder="Enter course title"
              className="w-full border border-gray-600 bg-transparent p-2 rounded"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Instructor *</label>
            <input
              type="text"
              {...register("instructor", {
                required: "Instructor name is required",
              })}
              placeholder="Enter instructor name"
              className="w-full border border-gray-600 bg-transparent p-2 rounded"
            />
            {errors.instructor && (
              <p className="text-red-500 text-sm">
                {errors.instructor.message}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description *</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Enter course description"
            className="w-full border border-gray-600 bg-transparent p-2 rounded"
            rows={3}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Row 2: Category, Level, Duration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Category *</label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full border border-gray-600 bg-gray-800 text-white p-2 rounded"
            >
              <option value="">Select category</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Level *</label>
            <select
              {...register("level", { required: "Level is required" })}
              className="w-full border border-gray-600 bg-gray-800 text-white p-2 rounded"
            >
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            {errors.level && (
              <p className="text-red-500 text-sm">{errors.level.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Duration *</label>
            <input
              type="text"
              {...register("duration", {
                required: "Duration is required",
              })}
              placeholder="e.g., 40 hours"
              className="w-full border border-gray-600 bg-transparent p-2 rounded"
            />
            {errors.duration && (
              <p className="text-red-500 text-sm">{errors.duration.message}</p>
            )}
          </div>
        </div>

        {/* Row 3: Price & Course Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Price ($) *</label>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: "Price is required" })}
              placeholder="99.99"
              className="w-full border border-gray-600 bg-transparent p-2 rounded"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Course Image</label>
            <input
              type="text"
              placeholder="Image URL"
              className="w-full border border-gray-600 bg-transparent p-2 rounded"
              {...register("img")}
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block mb-1 font-medium">Tags *</label>
          <input
            type="text"
            {...register("tags", { required: "At least one tag is required" })}
            placeholder="Add a tag"
            className="w-full border border-gray-600 bg-transparent p-2 rounded"
          />
          {errors.tags && (
            <p className="text-red-500 text-sm">{errors.tags.message}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 rounded border border-gray-600 hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
          >
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
