const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createPatient,
  insertPatient,
} = require("../utils/queries/patientQueries");

exports.insertIntoPatientTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    // Create Table
    let sql = createPatient;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    // sql = insertPatient(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record Inserted");
    });
    connect.end((err) => {
      if (err) {
        console.error("Error closing the connection: ", err);
      } else {
        console.log("Connection closed successfully.");
      }
    });
    // Close the connection after all queries are executed
  });
});
