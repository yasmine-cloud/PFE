/*const Caregiver = require('../models/caregiverModel');
const multer = require('multer');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const extension = file.mimetype.split('/')[1];
    cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
  },
});

const upload = multer({ storage: storage });

// Endpoint to handle caregiver creation with image upload
// Endpoint to handle caregiver creation with image upload
app.post('/caregivers', upload.single('image'), async (req, res) => {
  try {
    const { name, address, age, contact, note } = req.body;

    // Check if all required fields are present
    if (!name || !address || !age || !contact) {
      return res.status(400).json({ success: false, error: 'Please provide all required fields.' });
    }

    // Access uploaded file information
    const imageUrl = req.file ? req.file.path : null;

    // Create new caregiver instance with uploaded image URL
    const caregiver = new Caregiver({
      name,
      address,
      age,
      contact,
      note,
      imageUrl,
    });

    // Save caregiver to the database
    await caregiver.save();

    // Send success response
    res.status(201).json({ success: true, data: caregiver });
  } catch (error) {
    // Handle errors
    res.status(500).json({ success: false, error: error.message });
  }
});


exports.createCaregiver = async (req, res) => {
  try {
    // Create caregiver instance
    const caregiver = new Caregiver(req.body);
    // Save to database
    await caregiver.save();
    res.status(201).json({ success: true, data: caregiver });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getAllCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.status(200).json({ success: true, data: caregivers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getCaregiverById = async (req, res) => {
  try {
    const caregiver = await Caregiver.findById(req.params.id);
    if (!caregiver) {
      return res.status(404).json({ success: false, error: 'Caregiver not found.' });
    }
    res.status(200).json({ success: true, data: caregiver });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteCaregiverById = async (req, res) => {
  try {
    const caregiver = await Caregiver.findByIdAndDelete(req.params.id);
    if (!caregiver) {
      return res.status(404).json({ success: false, error: 'Caregiver not found.' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};*/
const Caregiver = require('../models/caregiverModel');

// Create a new caregiver
exports.createCaregiver = async (req, res) => {
  try {
    const { name, address, age, contact, note } = req.body;

    // Check if all required fields are present
    if (!name || !address || !age || !contact) {
      return res.status(400).json({ success: false, error: 'Please provide all required fields.' });
    }

    // Access uploaded file information
    const imageUrl = req.file ? req.file.path : null;

    // Create new caregiver instance with uploaded image URL
    const caregiver = new Caregiver({
      name,
      address,
      age,
      contact,
      note,
      imageUrl,
    });

    // Save caregiver to the database
    await caregiver.save();

    // Send success response
    res.status(201).json({ success: true, data: caregiver });
  } catch (error) {
    // Handle errors
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all caregivers
exports.getAllCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.status(200).json({ success: true, data: caregivers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single caregiver by ID
exports.getCaregiverById = async (req, res) => {
  try {
    const caregiver = await Caregiver.findById(req.params.id);
    if (!caregiver) {
      return res.status(404).json({ success: false, error: 'Caregiver not found.' });
    }
    res.status(200).json({ success: true, data: caregiver });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
exports.deleteCaregiver = async (req, res) => {
  try {
    const { id } = req.params;

    // Find caregiver by ID and delete it
    const deletedCaregiver = await Caregiver.findByIdAndDelete(id);

    if (!deletedCaregiver) {
      return res.status(404).json({ success: false, error: 'Caregiver not found.' });
    }

    // Send success response
    res.status(200).json({ success: true, data: deletedCaregiver });
  } catch (error) {
    // Handle errors
    res.status(500).json({ success: false, error: error.message });
  }
};
