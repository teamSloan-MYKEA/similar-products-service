const model = require('../models/model');

module.exports = {
  get: (req, res) => {
    const id = req.params.id;
    console.log('CONTROLLER-GET REQ ID', id);
    model.getLimit(id, (err, results) => {
      if (err) {
        res.send('CONTROLLER-GET FAILS', err);
      }
      res.send(results);
    });
  },
  post: (req, res) => {
    console.log('CONTROLLER-POST REQ BODY', req.body);
    const params = [req.body.id, req.body.name, req.body.description, req.body.stars, req.body.price, req.body.photo1, req.body.photo2];
    model.createOne(params, (err, results) => {
      if (err) {
        res.send('CONTROLLER-POST FAILS', err);
      }
      res.send('CONTROLLER-POST SUCCESS');
    });
  },
  put: (req, res) => {
    const id = req.params.id;
    const params = [req.body.id, req.body.name, req.body.description, req.body.stars, req.body.price, req.body.photo1, req.body.photo2];
    console.log('CONTROLLER-PUT REQ ID', id);
    console.log('CONTROLLER-PUT REQ BODY', req.body);
    model.putOne(id, params, (err, results) => {
      if (err) {
        res.send('CONTROLLER-PUT FAILS', err);
      }
      res.send('CONTROLLER-PUT SUCCESS');
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    console.log('CONTROLLER-DELETE REQ ID', id);
    model.deleteAll(id, (err, results) => {
      if (err) {
        res.send('CONTROLLER-DELETE FAILS', err);
      }
      res.send('CONTROLLER-DELETE SUCCESS');
    });
  },
};
