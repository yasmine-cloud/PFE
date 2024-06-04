// backend/models/medicationReminder.js
const mongoose = require('mongoose');

const medicationReminderSchema = new mongoose.Schema({
    medicationName: { type: String, required: true },
    reminderTime: { type: Date, required: true },
    // Add more fields as needed
});

module.exports = mongoose.model('MedicationReminder', medicationReminderSchema);
