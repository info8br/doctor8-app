const express = require('express');

const app = express();

app.use(express.static("./export"));

  require('./csscompact');

app.get('/compact', (req, res) => {

  require('./csscompact');
  //require('./jscompact');

  res.send('Compactado!');

});



app.listen(8000, function () {
  console.log("rodando");
});
