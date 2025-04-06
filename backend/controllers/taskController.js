const Task = require("../models/taskModel")

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      message: "Fetched successfully",
      tasks,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getTaskById = async (req, res) => {
    try {
      const id = req.params.id
      const task = await Task.findById(id);
      res.status(200).json({
        message: "Fetched successfully",
        task,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    if (task) {
      res.status(201).json({
        message: "task created successfully",
        task,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.updateTaskById = async (req, res) => {
    try {
      const id = req.params.id
      const updatedtask = req.body
      const updatedTask = await Task.findByIdAndUpdate(id,updatedtask)
      res.status(200).json({
        message: "Updated successfully",
        updatedTask,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };

  exports.deleteTaskById = async (req, res) => {
    try {
      const id = req.params.id
      const deletedTask = await Task.findByIdAndDelete(id)
      res.status(200).json({
        message: "Deleted successfully",
        deletedTask,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };