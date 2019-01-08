const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const { cica } = req.query; //req.query.cica
  // const cica = req.query.cica; NEM JOO 
  if (cica) {
    res.status(200).json({cica: cica});
  } else {
    res.status(210).json({
      message: 'wrong query'
    });
  }
});

app.post('/api/macska', (req, res) => {
  const { cica } = req.body;
  if (cica) {
    res.status(200).json({ message: 'got it'});
  } else {
    res.status(210).json({
      message: 'wrong body'
    });
  }
});

module.exports = app;
