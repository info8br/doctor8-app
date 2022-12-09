const express = require('express');
const cors = require('cors');
const app = express();

console.log(__dirname);

app.use(express.static("./export"));
app.use(cors());
  require('./scripts/csscompact');
  require('./scripts/jscompact');
  require('./scripts/html.js');
  require('./scripts/htmlvercel.js');
// index.js



app.get('/', (req, res) => {


/*   res.setHeader('Access-Control-Allow-Origin', '*');
  res.sendFile('/home/runner/doctor8/export/devxx.html'); */

});

app.listen(3000, function () {
  console.log(__dirname);
}); 

/* 
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname + '/export/index.html'));
});

app.listen(3000, () => {
  console.log('server started');
});
 */