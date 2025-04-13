import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { getAllTasks } from "../apis/taskApi";
const Tasklist = () => {
  const [tasks, setAllTasks] = useState([]);

  const fetchTasks = async()=> {
    const response = await getAllTasks();
    setAllTasks(response.data.tasks);
  }
  useEffect(()=>{
    fetchTasks()
  },[tasks])

  const btnArray = [
    {
      btnName: "Completed",
      btnColour: "amber",
      value: "completed",
    },
    {
      btnName: "Due Today",
      btnColour: "amber",
      value: "due today",
    },
    {
      btnName: "High Priority",
      btnColour: "amber",
      value: "high priority",
    },
  ];

  return (
    <div>
      <div className="">
        {btnArray.map((item) => {
          return (
            <button
              className={`bg bg-${item.btnColour}-200  p-2 m-2 rounded-2xl hover:brightness-150 cursor-pointer`}
              key={item.value}
              onClick={() => console.log(item.value)}
            >
              {item.btnName}
            </button>
          );
        })}
      </div>
      <div className="flex">
        {tasks.map((item) => {
          return <TaskCard title={item.title} description={item.description} />;
        })}
      </div>
    </div>
  );
};

export default Tasklist;
