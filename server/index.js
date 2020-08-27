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

app.post('/:id/similar/:id', (req, res) => {
  const {_id, id, name, description, stars, price, photo1, photo2} = req.body;
  var id = path.basename(req.originalUrl);
  var query =
    {
      id: id,
      name: name,
      description: description,
      stars: stars,
      price: price,
      photo1: photo1,
      photo2: photo2,

    };
  db.Review.updateOne(query, (err, data) => {
    if (err) {
      throw err;
      res.status(500).send('db error');
    } else {
      res.status(200).send(data);
    }
  });
});

app.put('/:id/similar/:id', (req, res) => {
  const id = path.basename(req.originalUrl);
  var query = {name: req.body.name};
  db.Review.findByIdAndUpdate("5f473aff386ebc6a1cfbd029", query, (err, data) => {
    if (err) {
      throw err;
      res.status(500).send('db error');
    } else {
      res.status(200).send(data);
    }
  });
});

app.delete('/:id/similar/:id', (req, res) => {
  const id = path.basename(req.originalUrl);
  db.Review.findByIdAndDelete("5f473aff386ebc6a1cfbd029", (err, data) => {
    if (err) {
      throw err;
      res.status(500).send('db error');
    } else {
      res.status(200).send(data);
    }
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
