// models/health.js
const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Reference to the Patient model
    required: true,
  },
  date: Date,
  condition: String,
  notes: String,
});

module.exports = mongoose.model('Health', healthSchema);
