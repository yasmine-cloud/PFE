// controllers/personController.js
const Person = require('../models/person');

// Create and Save a new Person
exports.createPerson = async (req, res) => {
  const person = new Person(req.body);
  try {
    const savedPerson = await person.save();
    res.status(201).json(savedPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Retrieve all Persons
exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieve a single Person by name
exports.getPersonByName = async (req, res) => {
  try {
    const person = await Person.findOne({ name: req.params.name });
    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Delete a Person by name
exports.deleteAllPersons = async (req, res) => {
  try {
    const result = await Person.deleteMany({});
    res.json({ message: `${result.deletedCount} persons deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
