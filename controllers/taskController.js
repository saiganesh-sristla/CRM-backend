const Task = require('../models/Task');

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
}

const getAllTask = async (req, res) => {
  const tasks = await Task.find().populate('relatedTo');
  res.json(tasks);
}

const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  const data = req.body;

  await task.updateOne(data);
  res.status(200).json(task);
}

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  await task.deleteOne();
  res.status(200).json(task);
}

module.exports = {
    createTask,
    getAllTask,
    updateTask,
    deleteTask
}