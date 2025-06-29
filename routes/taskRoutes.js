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

module.exports = router;
