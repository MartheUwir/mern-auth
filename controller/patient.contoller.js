const { Patient, Doctor } = require("../models/patient.model");

// Create a new patient with profile picture
exports.createPatient = async (req, res) => {
    try {
        const patient = new Patient(req.body);
        if (req.file) {
            patient.profilePictureUrl = req.file.path; // Save the profile picture URL
        }
        const savedPatient = await patient.save();
        res.status(201).json(savedPatient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creating patient record." });
    }
};

// Get a patient's profile picture by ID
exports.getPatientProfilePicture = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient || !patient.profilePictureUrl) {
            return res.status(404).json({ error: "Patient or profile picture not found." });
        }
        res.sendFile(patient.profilePictureUrl); // Send the profile picture as a file
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching patient profile picture." });
    }
};

// Similar updates for Doctor Controller
