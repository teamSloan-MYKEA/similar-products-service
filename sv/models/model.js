const { Client } = require('pg');
const redis = require('redis');
const portRedis = 6379;
const postgresConfig = require('../db/config');

const client = new Client(postgresConfig);

client.connect(err => {
  if (err) {
    console.error('CONNECTING TO DOCKER-POSTGRES FAIL', err.stack);
  } else {
    console.log('CONNECTING TO DOCKER-POSTGRES SUCCESS');
  }
});

const redisClient = redis.createClient(portRedis);
redisClient.on('connect', () => {
  console.log('CONNECTING TO REDIS SUCCESS');
}).on('error', (error) => {
  console.log('CONNECTING TO REDIS SUCCESS', error);
});

module.exports = {
  getLimit: (id, callback) => {
    redisClient.get(id, (err, data) => {
      if (err || !data) {
        console.log(`REDIS DATA NOT FOUND FOR ID ${id}, ACCESSING POSTGRESS DATABASE INSTEAD, PLEASE WAIT`);
        const queryStr = `SELECT * FROM mykea_similarproducts WHERE productid=${id};`;
        client.query(queryStr, (error, results) => {
          redisClient.set(id, JSON.stringify(results.rows));
          callback(error, results.rows);
        });
      } else {
        callback(err, JSON.parse(data));
      }
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

/* -------------------- DOCKER COMMAND LINES (ON LOCAL MACHINE)--------------------

docker run --name redisSDC -p 6379:6379 -d redis redis-server --appendonly yes

docker exec -it redisSDC bash

redis-cli
(pong)

(keys *)
(get #)
(flushall)

*/
