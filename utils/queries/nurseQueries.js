exports.createNurse =
  "CREATE TABLE IF NOT EXISTS Nurse(nurse_id INT PRIMARY KEY, nurse_name VARCHAR(255), phone VARCHAR(255), shift DATE,doctor_id INT,FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id))";
