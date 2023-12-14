const express = require("express");
const { insertIntoNurseTable } = require("../services/nurseServices");

const router = express.Router();

router.route("/").get(insertIntoNurseTable);

module.exports = router;
