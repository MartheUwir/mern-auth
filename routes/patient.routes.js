// patient.routes.js

const express = require("express");
const router = express.Router();

// Define your routes here
router.get("/", (req, res) => {
  res.send("Patient routes are working!");
});

module.exports = router;
