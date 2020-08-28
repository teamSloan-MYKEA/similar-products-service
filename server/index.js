/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');
const db = require('../database/db.js');

app.use(cors());
// app.use('/:id', express.static('dist'));
app.use(express.json());
// app.use(express.text());
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

app.post('/:id/similar/:id/', (req, res) => {
  console.log('POST REQ BODY', req.body);
  // const newSimilarProducts = new db.SimilarProducts({
  //   id: req.body.id,
  //   name: req.body.name,
  //   description: req.body.description,
  //   stars: req.body.stars,
  //   price: req.body.price,
  //   photo1: req.body.photo1,
  //   photo2: req.body.photo2,
  // });
  const newSimilarProducts = new db.SimilarProducts(req.body);
  newSimilarProducts.save()
    .then(() => {
      res.status(200).send('POST REQUEST SUCCESS');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('POST REQUEST FAIL');
    });
});

app.put('/:id/similar/:id', (req, res) => {
  console.log('PUT REQ BODY', req.body);
  const productNumber = req.params.id;
  db.SimilarProducts.updateOne({ id: productNumber }, req.body)
    .then(() => {
      res.status(200).send('PUT REQUEST SUCCESS');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('PUT REQUEST FAIL');
    });
});

app.delete('/:id/similar/:id', (req, res) => {
  console.log('DELETE REQ BODY', req.body);
  const productNumber = req.params.id;
  db.SimilarProducts.deleteOne({ id: productNumber }, req.body)
    .then(() => {
      res.status(200).send('DELETE REQUEST SUCCESS');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('DELETE REQUEST FAIL');
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
