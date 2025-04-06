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

