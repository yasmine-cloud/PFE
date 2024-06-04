// routes/persons.js
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Create a new Person
router.post('/', personController.createPerson);

// Retrieve all Persons
router.get('/', personController.getAllPersons);
router.delete('/deleteAll', personController.deleteAllPersons);


module.exports = router;

