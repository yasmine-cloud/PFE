/*// backend/routes/medicationReminder.js
const express = require('express');
const router = express.Router();
const MedicationReminder = require('../models/medicationReminder');

// Route to handle saving medication reminders
router.post('/medication-reminders', async (req, res) => {
    try {
        const medicationReminderData = req.body;
        const medicationReminder = await MedicationReminder.create(medicationReminderData);
        res.status(201).json(medicationReminder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
*/
// backend/routes/medicationReminder.js
const express = require('express');
const router = express.Router();
const MedicationReminder = require('../models/medicationReminder');

// Route to handle saving medication reminders
router.post('/medication-reminders', async (req, res) => {
    try {
        const medicationReminderData = req.body;
        const medicationReminder = await MedicationReminder.create(medicationReminderData);
        res.status(201).json({
            message: 'Medication reminder created successfully',
            medicationReminder: {
                id: medicationReminder._id,
                medicationName: medicationReminder.medicationName,
                reminderTime: medicationReminder.reminderTime,
                // Add more fields as needed
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
