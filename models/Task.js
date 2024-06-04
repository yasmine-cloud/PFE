const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  note: { type: String },
  date: { type: String },
  time: { type: String },
  isFavorite: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
