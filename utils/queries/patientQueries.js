exports.createPatient =
  "CREATE TABLE IF NOT EXISTS Patient (patient_id INT PRIMARY KEY,"
    "patient_name VARCHAR(255), address VARCHAR(255),"
    "gender ENUM('male', 'female'),email VARCHAR(255),"
    "disease VARCHAR(255),marital_status VARCHAR(255),"
    "chronic_disease BOOLEAN,age VARCHAR(255),"
    "prescription_id INT,teatment VARCHAR(255),"
    "phone VARCHAR(255),room_id INT,doctor_id INT,"
    "FOREIGN KEY (room_id) REFERENCES Room(room_id),"
    "FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id))";

exports.insertPatient = (req) => {
  return `INSERT INTO patient (
    id,name,address,gender,
    email,disease,marital_status,
    chronic_disease,age,prescription_id,
    teatment,phone,room_id,doctor_id)
     VALUES
      ("${req.body.id}","${req.body.name}",
       "${req.body.address}","${req.body.gender}",
       "${req.body.email}","${req.body.disease}",
       "${req.body.marital_status}","${req.body.chronic_disease}",
       "${req.body.age}","${req.body.prescription_id}",
       "${req.body.teatment}","${req.body.phone}",
       "${req.body.room_id}","${req.body.doctor_id}")`;
};
