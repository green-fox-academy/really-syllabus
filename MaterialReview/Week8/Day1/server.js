let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', function(req,bela) {
  bela.json({Hello:'World'});
});
app.get('/hola', (req,res) => {
  res.send(`Hola ${req.query.name||'Jorge'}!`);
});
app.get('/hola/:name', (req,res) => {
  res.send(`Hola ${req.params.name||'Jorgito'}!`);
});
app.get('/posts', (req,res) => {
  res.send(`Posts`);
});
app.get('/posts/:id', (req,res) => {
  res.send(`Post ${req.params.id}`);
});
app.get('/getSummerImage', (req,res) => res.sendFile(__dirname + '/static/summer.jpg'));
app.get('/index.html', (req,res) => res.sendFile(__dirname + '/index.html'))

app.get('/view', (req,res) => {
  res.render('view', {
    title: 'VIEW TITLE',
    pageTitle: 'Rendered View'
  });
});

app.listen( 3000, () => console.log('Application is listening on port 3000'));