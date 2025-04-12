import React, { useState } from "react";
import { createTask } from "../apis/taskApi";

const TaskForm = () => {
  const [task, setTask] = useState({});
  const handleChange= (e)=> {
    setTask({
      ...task,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    console.log("event");
    if(!task) return
    try {
      // await createTask(task)
      console.log("task",task);
    } catch (error) {
      console.error("Error creating a task",e)
    }
  }
  return (
    <form className="max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-xl bg-white shadow-md">
      <h2 className="text-xl font-semibold text-center mb-5 text-blue-900">
        Create Task
      </h2>

      {/* Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
          Title
        </label>
        <input
          onChange={handleChange}
          value={task.title}
          //required
          name="title"
          type="text"
          id="title"
          placeholder="Enter task title"
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-amber-50 text-sm"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-1"
        >
          Description
        </label>
        <textarea
          onChange={handleChange}
          value={task.description}
          name="description"
          id="description"
          rows={3}
          placeholder="Enter description"
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-amber-50 text-sm"
        ></textarea>
      </div>

      {/* Priority */}
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
          Due Date
        </label>
        <input
          onChange={handleChange}
          value={task.dueDate}
          //required
          type="date"
          name="dueDate"
          id="date"
          className="w-full p-2 bg-amber-50 border border-blue-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 font-medium mb-2 text-sm">Priority</h3>
        <div className="flex gap-4">
          {["low", "medium", "high"].map((level) => (
            <label
              key={level}
              className="inline-flex items-center gap-1 text-gray-600 capitalize text-sm"
            >
              <input
                onChange={handleChange}
                type="radio"
                id={level}
                name="priority"
                value={level}
                className="accent-blue-600"
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          onClick={handleSubmit}
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
