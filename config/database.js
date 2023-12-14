const mysql = require("mysql");

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });
module.exports = connect;
