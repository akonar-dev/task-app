import axios from "axios"

const BASE_URL = "http://localhost:8000/api/task"
export const getAllTasks = ()=> {
    axios.get(`BASE_URL+/all-tasks`)
}

export const getTaskById = ()=> {
    axios.get(`BASE_URL+/${id}`)
}

export const createTask = (taskData)=> {
    axios.post(`${BASE_URL}/create-task`, taskData)
}

export const updateTaskById = (id, taskdata)=> {
    axios.put(`BASE_URL+/${id}`, taskdata)
}

export const deleteTaskById = (id)=> {
    axios.delete(`BASE_URL+/${id}`)
}
