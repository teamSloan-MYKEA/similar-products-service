const { Client } = require('pg');
const postgresConfig = require('../db/config');

const client = new Client(postgresConfig);

client.connect(err => {
  if (err) {
    console.error('CONNECTING TO DOCKER-POSTGRES FAIL', err.stack);
  } else {
    console.log('CONNECTING TO DOCKER-POSTGRES SUCCESS');
  }
});

module.exports = {
  getLimit: (id, callback) => {
    const queryStr = `SELECT * FROM mykea_similarproducts WHERE productid=${id};`;
    client.query(queryStr, (err, results) => {
      callback(err, results);
    });
  },
  createOne: (params, callback) => {
    const queryStr = 'INSERT INTO mykea_similarproducts(id, name, description, stars, price, photo1, photo2) VALUES($1, $2, $3, $4, $5, $6, $7);';
    client.query(queryStr, params, (err, results) => {
      callback(err, results);
    });
  },
  putOne: (id, params, callback) => {
    const queryStr = `UPDATE mykea_similarproducts SET id=($1), name=($2), description=($3), stars=($4), price=($5), photo1=($6), photo2=($7) WHERE id=${id};`;
    client.query(queryStr, params, (err, results) => {
      callback(err, results);
    });
  },
  deleteAll: (id, callback) => {
    const queryStr = `DELETE FROM mykea_similarproducts WHERE id=${id};`;
    client.query(queryStr, (err, results) => {
      callback(err, results);
    });
  },
};
