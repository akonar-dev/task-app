import React from "react";

const TaskForm = () => {
  return (
    <form className="border border-black-200 p-5 mx-100 my-5 rounded-xl bg-blue-100 bg-blend-color-burn">
      <div className="text-center m-5">
        <label className="p-5" htmlFor="title">
          Title
        </label>
        <input
          className="border border-b-blue-900 rounded-xl w-2/3 bg-amber-50"
          type="text"
          name=""
          id="title"
        />
      </div>
      <div className="text-center">
        <label className="p-5" htmlFor="description">
          Description
        </label>
        <textarea
          className="border border-b-blue-900 rounded-xl w-3/4 bg-amber-50"
          name=""
          id="description"
          cols={20}
          rows={3}
        ></textarea>
      </div>
      
      <div className="text-center flex flex-1/3 justify-self-center gap-1">
        <h2 className="px-10">Priority</h2>
        <div>
          <label className="p-5" htmlFor="low">Low</label>
          <input type="radio" id="low" name="priority"/>
        </div>
        <div>
          <label className="p-5" htmlFor="medium">Medium</label>
          <input type="radio" id="medium" name="priority"/>
        </div>
        <div>
          <label className="p-5" htmlFor="high">High</label>
          <input type="radio" id="high" name="priority"/>
        </div>
      </div>
      <div>
      <div className="border-amber-600 m-2 py-2 text-center">
      <label className="p-2"htmlFor="task-status">Task Status</label>
      <select className="border border-black rounded-xl"name="completed" id="task-status">
          <option value="completed">Not Completed</option>
          <option value="not completed">Completed</option>
        </select>
      </div>
      
      </div>
    </form>
  );
};

export default TaskForm;
