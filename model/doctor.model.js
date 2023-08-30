const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    profilePictureUrl: String, // URL to the patient's profile picture
});

const doctorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
    matriculation: String,
    designation: String,
    schedule: [String], // An array of strings representing the doctor's schedule
    profilePictureUrl: String, // URL to the doctor's profile picture
});

const Patient = mongoose.model("Patient", patientSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = { Patient, Doctor };
