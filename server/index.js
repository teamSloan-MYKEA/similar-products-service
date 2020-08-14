/* eslint-disable no-console */
const express = require('express');

const app = express();
const db = require('../database/db.js');

// app.use('/', express.static('dist'));
app.use('/:id', express.static('dist'));

app.get('/:id/photos/:id', (req, res) => {
  const productNumber = req.params.id;
  db.SimilarProducts.find({ id: productNumber })
    .then((similarProducts) => {
      res.json(similarProducts);
    })
    .catch((err) => {
      throw err;
    });
});

db.connect.on('error', console.error.bind(console, 'connection error:'));
db.connect.once('open', () => {
  console.log('Connected to DB!');
});

const port = 3001;

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});
