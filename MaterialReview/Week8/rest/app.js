const express = require('express');
const bp = require('body-parser');

const app = express();

const mw = (req, res, next) => {
  req.alma = 5
  next();
}

app.use(mw)

app.use(bp())

const a = { alma: 5 };

app.get('/', (req, res) => {
  console.log(req.alma);
  res.send('szia');
})

app.listen(3000);

