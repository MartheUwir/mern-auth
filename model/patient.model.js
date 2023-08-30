const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    // Existing fields...
    profilePictureUrl: String, 
});

const doctorSchema = new mongoose.Schema({
    // Existing fields...
    profilePictureUrl: String, // profile picture URL
});

const Patient = mongoose.model("Patient", patientSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = { Patient, Doctor };
