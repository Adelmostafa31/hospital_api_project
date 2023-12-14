const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createDepartment,
  insertDepartment,
} = require("../utils/queries/departmentQueries");

exports.insertIntoDepartmentTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;
    // Create Table
    let sql = createDepartment;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    sql = insertDepartment(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record Inserted");
      console.log(req.body);
      // connect.end((err) => {
      //   if (err) {
      //     console.error("Error closing the connection: ", err);
      //   } else {
      //     console.log("Connection closed successfully.");
      //   }
      // });
    });
    // Close the connection after all queries are executed
    return res.status(201);
  });
});
