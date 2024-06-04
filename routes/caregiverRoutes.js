/*const express = require('express');
const router = express.Router();
const caregiverController = require('../controllers/caregiverController');

// POST /caregivers
router.post('/', caregiverController.createCaregiver);

// GET /caregivers
router.get('/', caregiverController.getAllCaregivers);

// GET /caregivers/:id
router.get('/:id', caregiverController.getCaregiverById);

// DELETE /caregivers/:id
router.delete('/:id', caregiverController.deleteCaregiverById);

module.exports = router;
*/
/*const express = require('express');
const router = express.Router();
const caregiverController = require('../controllers/caregiverController');
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

// POST /caregivers - Create a new caregiver
router.post('/', upload.single('image'), caregiverController.createCaregiver);

// GET /caregivers - Get all caregivers
router.get('/', caregiverController.getAllCaregivers);

// GET /caregivers/:id - Get a single caregiver by ID
router.get('/:id', caregiverController.getCaregiverById);

// DELETE /caregivers/:id - Delete a caregiver by ID
router.delete('/:id', caregiverController.deleteCaregiverById);

module.exports = router;


/*const express = require("express");
const router = express.Router();
const caregiverController = require("../controllers/caregiverController");
const upload = require("../config/multerConfig");

router.post("/", upload.single("image"), caregiverController.createCaregiver);
router.get("/", caregiverController.getAllCaregivers);
router.get("/:id", caregiverController.getCaregiverById);
router.delete("/:id", caregiverController.deleteCaregiverById);

module.exports = router;
*/
const express = require('express');
const router = express.Router();
const caregiverController = require('../controllers/caregiverController');
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

// POST /caregivers - Create a new caregiver
router.post('/', upload.single('image'), caregiverController.createCaregiver);

// GET /caregivers - Get all caregivers
router.get('/', caregiverController.getAllCaregivers);

// GET /caregivers/:id - Get a single caregiver by ID
router.get('/:id', caregiverController.getCaregiverById);
// DELETE /caregivers
router.delete('/:id', caregiverController.deleteCaregiver);



module.exports = router;