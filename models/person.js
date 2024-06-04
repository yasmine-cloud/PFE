const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  allergies: { type: String, required: true },
  medications: { type: String, required: true },
  pathologies: { type: String, required: true },
  medical_notes: { type: String, required: true },
  blood_type: { type: String, required: true },
});

module.exports = mongoose.model('Person', PersonSchema);
