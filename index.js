const express = require("express");
const http = require('http');
const { Server } = require("socket.io");
const bodyparser = require("body-parser");
const config = require("config");
const cors = require("cors");
const multer = require("multer");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
   console.log("a user connected");
   socket.on("disconnect", () => {
     console.log("user disconnected");
   });
});

const patientRoutes = require("./routes/patient.routes");
const appointmentRoutes = require("./routes/appointment.routes");
const healthRoutes = require("./routes/health.routes");
const doctorRoutes = require("./routes/doctor.routes");
const userController = require("./controller/user.controller");
const authController = require("./controller/auth.controller");
const textController = require("./controller/text.controller");
const messageController = require("./controller/message.controller");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

require("./model/db");

app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

app.use("/api/v1/patients", patientRoutes);
app.use("/api/v1/appointments", appointmentRoutes);
app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/doctors", doctorRoutes);
app.use("/api/v1/users", userController);
app.use("/api/v1/auth", authController);
app.use("/api/v1/text", textController);
app.use("/api/v1/messages", messageController);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
    },
});

const upload = multer({ storage });

app.post("/api/v1/patients/upload/:id", upload.single("profilePicture"), patientController.createPatient);
app.get("/api/v1/patients/profilePicture/:id", patientController.getPatientProfilePicture);

// Similar routes for doctors

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = { io };
