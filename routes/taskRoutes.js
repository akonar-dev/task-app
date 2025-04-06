const express = require("express")
const taskRouter = express.Router();
const {getAllTasks,createTask} = require("../controllers/taskController")



//basic crud operations
taskRouter.get("/all-tasks", getAllTasks)
taskRouter.post("/create-task", createTask)
// taskRouter.get("/:id", getTaskById)
// taskRouter.put("/:id", updateTaskById)
// taskRouter.delete("/:id", deleteTaskById)


// //some complex apis
// taskRouter.get("/completed", getAllCompletedTasks)
// taskRouter.get("/priority/:priority", getTasksByPriority)
// taskRouter.get("/pending", getAllPendingTasks)
// taskRouter.get("/due-today", getAllTasksDueToday)
// taskRouter.get("/overdue" , getAllTasksOverdue)

module.exports = taskRouter;