const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//use template engine
app.set('view engine', 'ejs');
// use static folder for the frontend script file
app.use('/static', express.static('static'));
// use body parser, for parsing the body (mostly for post requests)
app.use(express.json());

// serving a static html to / root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// serving an ejs file to /ejs endpoint
app.get('/ejs', (req, res) => {
  res.render('home', {
    name: req.query.name || 'CICA'
  });
});

// using id as a param
app.get('/hello/:id/:name', (req, res) => {
  res.json({
    hello: 'really',
    id: req.params.id,
  });
});

// using name as a query parameter
app.get('/bello', (req, res) => {
    res.json({
      hello: 'reallyke',
      query: req.query.name || 'query not found'
    });
});

// posting a request body from backend at /cica
app.post('/cica', (req, res) => {
  res.json({
    name: req.body.name,
    age: req.body.age,
  });
});

//listening on port 3000 
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});