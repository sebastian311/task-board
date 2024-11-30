const express = require('express');
const User = require('../models/User.model');
const Task = require('../models/Task.model');
const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Assign a task to a user
router.put('/tasks/:taskId/assign/:userId', async (req, res) => {
  const { taskId, userId } = req.params;

  try {
    const task = await Task.findByPk(taskId);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    task.userId = userId;
    await task.save();

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
