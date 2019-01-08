const server = require('./routes');
const PORT = 3000;

server.listen(PORT, () => {
  console.log('App is listening on PORT', PORT);
});
