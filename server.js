const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const patientRoutes = require("./routes/patientRoute");
const doctorRoutes = require("./routes/doctorRoute");
const departmentRoute = require("./routes/departmentRoute");
const nurseRoute = require("./routes/nurseRoute");

dotenv.config({ path: "config.env" });

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/patient", patientRoutes);
app.use("/api/v1/doctor", doctorRoutes);
app.use("/api/v1/department", departmentRoute);
app.use("/api/v1/nurse", nurseRoute);

app.get("/", (req, res) => {
  res.send("Our Api V1");
});

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log("App Running on port " + Port);
});