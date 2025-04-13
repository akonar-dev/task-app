import axios from "axios"

const BASE_URL = "http://localhost:8000/api/task"
export const getAllTasks = ()=> {
    return axios.get(`${BASE_URL}/all-tasks`)
}

export const getTaskById = ()=> {
    return axios.get(`BASE_URL+/${id}`)
}

export const createTask = (taskData)=> {
    return axios.post(`${BASE_URL}/create-task`, taskData)
}

export const updateTaskById = (id, taskdata)=> {
    return axios.put(`BASE_URL+/${id}`, taskdata)
}

export const deleteTaskById = (id)=> {
    return axios.delete(`BASE_URL+/${id}`)
}
