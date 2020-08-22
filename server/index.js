/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');
const db = require('../database/db.js');

app.use(cors());
// app.use('/:id', express.static('dist'));
// app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
// app.use('/', express.static(path.join(__dirname, './../public')));
app.use('/:id', express.static(path.join(__dirname, './../public')));

app.get('/:id/similar/:id/', (req, res) => {
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
