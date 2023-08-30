// routes/health.js
const express = require('express');
const router = express.Router();
const Health = require('../models/health');

// Route to add a new health record
router.post('/', async (req, res) => {
  try {
    const newHealthRecord = await Health.create(req.body);
    res.status(201).json(newHealthRecord);
  } catch (error) {
    console.error('Error adding health record:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to retrieve health records for a specific patient
router.get('/patient/:patientId', async (req, res) => {
  const { patientId } = req.params;
  try {
    const healthRecords = await Health.find({ patient_id: patientId });
    res.json(healthRecords);
  } catch (error) {
    console.error('Error retrieving health records:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
