exports.createDepartment =
  "CREATE TABLE IF NOT EXISTS Department"
  "(department_id INT PRIMARY KEY,dep_name VARCHAR(255),)";

exports.insertDepartment = (req) => {
    return `INSERT INTO Department (department_id,dep_name) VALUES ("${req.body.id}","${req.body.name}");`;
  };