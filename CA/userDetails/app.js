const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  user: 'root',
  password: 'root',
  database: 'users',
  port: 3306,
});

app.use('/static', express.static('static'));
app.use('/details/static', express.static('static'));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/details/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'details.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (username && password) {
    conn.query('SELECT * FROM users;', (err, data) => {
      if (err) {
        res.status(500).send();
        console.log(err)
        return;
      }
      const usernameFromDatabase = data.find(res => res.username === username);
      if (usernameFromDatabase) {
        if (usernameFromDatabase.password === password) {
          res.json({
            message: 'Succeful',
            pathTo: '/details',
            id: usernameFromDatabase.id
          });
        } else {
          res.json({
            message: 'Wrong password'
          });
        }
      } else {
        res.json({
          message: 'NO such user',
          pathTo: '/register'
        });
      }
    });
  }
});

app.get('/api/details/:id', (req, res) => {
  const { id } = req.params;
  conn.query(`SELECT * FROM users WHERE id = '${id}';`, (err, data) => {
    if (err) {
      res.status(500).send();
      console.log(err)
      return;
    }
    console.log(data);
    res.json(data);
  });
});

app.post('/registry', (req, res) => {
  const { username, password, age, homecity, sex, fav_animal } = req.body;
  conn.query('INSERT INTO users (username, password, age, homecity, sex, fav_animal) VALUES (?, ?, ?, ?, ?, ?);', [username, password, age, homecity, sex, fav_animal],(err, data) => {
    if(err) {
      res.status(500).send();
      console.log(err);
      return;
    }
    res.json({
      message: 'New user added'
    });
  });
});

app.patch('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  conn.query(`UPDATE users SET username = '${username}' WHERE id = ${id};`, (err, data) => {
    if(err) {
      res.status(500).send();
      console.log(err);
      return;
    } 
    console.log(data);
  })
});

app.put('/apika/people/:id', (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  conn.query(`UPDATE users SET username = '${username}' WHERE id = ${id};`, (err, data) => {
    if(err) {
      res.status(500).send();
      console.log(err);
      return;
    } 
    console.log(data);
  })
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
