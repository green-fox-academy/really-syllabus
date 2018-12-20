const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  user: 'root',
  password: 'root',
  database: 'bookstore',
  port: 3306,
});

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/author', (req, res) => {
  const sql = 'SELECT  * FROM author;';
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

app.post('/author', (req, res) => {
  const { aut_id, aut_name, country, home_city } = req.body;
  if (
    aut_id === undefined || aut_id === '' ||
    aut_name === undefined || aut_name === '' ||
    country === undefined || country === '' ||
    home_city === undefined || home_city === '') {
    res.json({
      message: 'All fields are required'
    });
  } else {
    conn.query('INSERT INTO author (aut_id, aut_name, country, home_city) VALUES (?, ?, ?, ?);', [aut_id, aut_name, country, home_city], (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      res.json({
        message: 'Succefully added'
      });
    });
  }
});

app.delete('/author', (req, res) => {
  const { aut_id } = req.body;
  const sql = 'SELECT * FROM author;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    if (rows.find(data => data.aut_id === aut_id)) {
      conn.query(`DELETE FROM author WHERE aut_id = '${aut_id}';`, (err, data) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'Internal server error'
          });
          return;
        }
        res.json({
          message: 'Succesfully deleted'
        });
      });
    } else {
      res.json({
        message: 'Wrong ID'
      });
    }
  });

});


app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
