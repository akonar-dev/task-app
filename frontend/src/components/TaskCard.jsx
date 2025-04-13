import React from 'react'

const TaskCard = ({title,description}) => {
  return (
    <div className='bg-red-300 p-5 m-5 rounded-md'>
        <h2 className='text-xl'>{title}</h2>
        <p>{description}</p>
        <button className="bg-green-500 rounded-sm hover:brightness-50 text-gray-200 p-2 mx-1 my-2 w-full">Not Completed</button>
    </div>
  )
}

export default TaskCard