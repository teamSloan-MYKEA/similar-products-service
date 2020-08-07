const express = require('express');
const app = express();
const db = require('../database/db.js');
const dataGenerator = require('../database/dataGenerator.js');

app.use(express.static('dist'));

app.get('/get', (req, res) => {
  // dataGenerator.generateData();
  db.SimilarProducts.find().then(products => {
    res.send(products);
  }).catch(() => console.log('Did not find products'));
});


db.connect.on('error', console.error.bind(console, 'connection error:'));
db.connect.once('open', function() {
  console.log('Connected to DB!');
});


const port = 3001;

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});