
const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');

// Route to display doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.json(doctors);
  } catch (error) {
    console.error('Error retrieving doctors:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
