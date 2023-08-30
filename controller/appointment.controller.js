const Appointment = require("../models/appointment.model");

// Create a new appointment
exports.createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        const savedAppointment = await appointment.save();
        res.status(201).json(savedAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creating appointment." });
    }
};

// Get all appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching appointments." });
    }
};

// Get an appointment by ID
exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: "Appointment not found." });
        }
        res.json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching appointment." });
    }
};

// Update an appointment by ID
exports.updateAppointmentById = async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedAppointment) {
            return res.status(404).json({ error: "Appointment not found." });
        }
        res.json(updatedAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating appointment." });
    }
};

// Delete an appointment by ID
exports.deleteAppointmentById = async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndRemove(req.params.id);
        if (!deletedAppointment) {
            return res.status(404).json({ error: "Appointment not found." });
        }
        res.json(deletedAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting appointment." });
    }
};
