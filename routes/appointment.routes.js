// appointment.routes.js

const express = require("express");
const router = express.Router();

// Mock data (you would typically connect to a database here)
const appointments = [];

// Create a new appointment
router.post("/", (req, res) => {
  const { patientName, doctorName, date } = req.body;

  if (!patientName || !doctorName || !date) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const appointment = { patientName, doctorName, date };
  appointments.push(appointment);

  return res.status(201).json({ message: "Appointment created successfully" });
});

// Get all appointments
router.get("/", (req, res) => {
  return res.status(200).json(appointments);
});

// Delete an appointment by index (you may want to use a unique identifier in a real application)
router.delete("/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= appointments.length) {
    return res.status(400).json({ error: "Invalid index" });
  }

  appointments.splice(index, 1);
  return res.status(204).send();
});

module.exports = router;
