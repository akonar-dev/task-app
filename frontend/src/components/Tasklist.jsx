import React from "react";

const Tasklist = () => {
  const btnArray = [
    {
      btnName: "Completed",
      btnColour: "amber",
      value:'completed'
    },
    {
      btnName: "Due Today",
      btnColour: "amber",
      value:'due today'
    },
    {
      btnName: "High Priority",
      btnColour: "amber",
      value:'high priority'
    },
  ];
  return (
    <div className="">
      {btnArray.map((item) => {
        return <button className={`bg bg-${item.btnColour}-200  p-2 m-2 rounded-2xl hover:brightness-150 cursor-pointer`}
        key={item.value}
        onClick={()=>console.log(item.value)}
        >
        {item.btnName}
        </button>
      })}
    </div>
  );
};

export default Tasklist;
