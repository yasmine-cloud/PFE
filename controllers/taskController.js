const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTask = async (req, res) => {
  const task = new Task({
    title: req.body.title,
    note: req.body.note,
    date: req.body.date,
    time: req.body.time,
    isFavorite: req.body.isFavorite,
    isCompleted: req.body.isCompleted
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.title = req.body.title || task.title;
    task.note = req.body.note || task.note;
    task.date = req.body.date || task.date;
    task.time = req.body.time || task.time;
    task.isFavorite = req.body.isFavorite || task.isFavorite;
    task.isCompleted = req.body.isCompleted || task.isCompleted;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (task == null) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      await task.deleteOne(); // Use deleteOne method instead of remove
      res.json({ message: 'Task deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  