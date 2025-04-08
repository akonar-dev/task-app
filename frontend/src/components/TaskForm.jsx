import React from "react";

const TaskForm = () => {
  return (
    <form className="max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-xl bg-white shadow-md">
  <h2 className="text-xl font-semibold text-center mb-5 text-blue-900">Create Task</h2>

  {/* Title */}
  <div className="mb-4">
    <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
      Title
    </label>
    <input
      type="text"
      id="title"
      placeholder="Enter task title"
      className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-amber-50 text-sm"
    />
  </div>

  {/* Description */}
  <div className="mb-4">
    <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
      Description
    </label>
    <textarea
      id="description"
      rows={3}
      placeholder="Enter description"
      className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-amber-50 text-sm"
    ></textarea>
  </div>

  {/* Priority */}
  <div className="mb-4">
    <h3 className="text-gray-700 font-medium mb-2 text-sm">Priority</h3>
    <div className="flex gap-4">
      {["low", "medium", "high"].map((level) => (
        <label key={level} className="inline-flex items-center gap-1 text-gray-600 capitalize text-sm">
          <input type="radio" id={level} name="priority" className="accent-blue-600" />
          {level}
        </label>
      ))}
    </div>
  </div>

  {/* Task Status */}
  <div className="mb-5">
    <label htmlFor="task-status" className="block text-gray-700 font-medium mb-1">
      Task Status
    </label>
    <select
      id="task-status"
      name="completed"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
    >
      <option value="not completed">Not Completed</option>
      <option value="completed">Completed</option>
    </select>
  </div>

  {/* Submit Button */}
  <div className="text-center">
    <button
      type="submit"
      className="bg-amber-400 hover:bg-amber-500 text-white font-medium px-4 py-2 rounded-lg transition duration-300 text-sm"
    >
      Submit
    </button>
  </div>
</form>

  );
};

export default TaskForm;
