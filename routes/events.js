// routes/events.js
/*const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
router.use(express.json()); // Add this line to parse JSON request bodies

router.post('/events/add', async (req, res) => {
  try {
    const { title } = req.body;
    const newEvent = new Event({ title});
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
*/
////////////////work w/get
/*const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
router.use(express.json()); // Add this line to parse JSON request bodies

router.post('/events/add', async (req, res) => {
  try {
    const { title, date } = req.body; // Extract title and date from request body
    const newEvent = new Event({ title, date }); // Use both title and date when creating a new event
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Middleware to parse JSON request bodies
router.use(express.json()); 

// POST endpoint to add a new event
router.post('/events/add', async (req, res) => {
  try {
    const { title, date } = req.body;
    const newEvent = new Event({ title, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET endpoint to fetch all events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// DELETE endpoint to delete an event
router.delete('/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (deletedEvent) {
      res.status(200).json(deletedEvent);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
