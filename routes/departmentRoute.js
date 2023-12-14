const express = require("express");
const { insertIntoDepartmentTable } = require("../services/departmentSevices");

const router = express.Router();

router.route("/").post(insertIntoDepartmentTable);

module.exports = router;
