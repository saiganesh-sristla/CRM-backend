const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

router.get('/', async (req, res) => {
  const tasks = await Task.find().populate('relatedTo');
  res.json(tasks);
});

router.put('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  const data = req.body;

  await task.updateOne(data);
  res.status(200).json(task);
})

router.delete('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);

  await task.deleteOne();
  res.status(200).json(task);
})

module.exports = router;
