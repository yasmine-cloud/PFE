const mongoose = require('mongoose');

const caregiverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  age: { type: Number, required: true },
  contact: { type: String, required: true },
  note: { type: String },
  imageUrl: { type: String },
});

module.exports = mongoose.model('Caregiver', caregiverSchema);

