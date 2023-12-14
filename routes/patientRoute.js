const express = require("express");
const {
  insertIntoPatientTable,
} = require("../services/patientServices");

const router = express.Router();

router.route("/").get(insertIntoPatientTable);

module.exports = router;
