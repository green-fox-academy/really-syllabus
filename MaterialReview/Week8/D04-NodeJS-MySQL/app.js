// dotenv module
require('dotenv').config();
// MySQL module
const mysql = require('mysql');
// Express module
const express = require('express');
const app = express();
const PORT = 3000;

// CONFIGURATION
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

// CONNECT
conn.connect(err => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});

// SERVER START
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// ENDPOINT WITH SQL QUERY
const getAllEmployees = 'SELECT * FROM employees';

app.get('/', (request, response) => {
  conn.query(getAllEmployees, (err, data) => {
    if (err) {
      response.status(500).send(err);
    }
    response.status(200).send(data);
  });
});

//CREATE
// const addEmployee = 'INSERT INTO employees SET ?';
// const employee = { name: 'Máté', role: 'Mentor' };

// conn.query(addEmployee, employee, (err, res) => {
//   if(err) {
//     console.log(err);
//     return;
//   }
//   console.log(res);
// });

// UPDATE
// const editEmployee = 'UPDATE employees SET name = ? WHERE id = ?';
// const newValues = ['Bence', '11'];

// conn.query(editEmployee, newValues, (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(res);
// });

// DELETE
// const deleteEmployee = 'DELETE FROM employees WHERE id = ?';
// const deleteId = 11;

// conn.query(deleteEmployee, deleteId, (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(res);
// });

// READ
// const findAllEmployees = 'SELECT * FROM employees';

// conn.query(findAllEmployees, (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('\n', res);
// });

// DISCONNECT
// conn.end(err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('\n', 'Disconnected from database');
// });
