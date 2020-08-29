// const { Client } = require('pg');

// const client = new Client({
//   host: 'localhost',
//   port: 5432,
//   user: 'postgres',
//   password: 'mysecretpassword',
//   database: 'hrr47_mykea',
// });

// const query = `
// DROP TABLE IF EXISTS mykea_similarproducts;
// CREATE TABLE mykea_similarproducts(
//   ID    SERIAL PRIMARY KEY  NOT NULL,
//   NAME         VARCHAR(25)  NOT NULL,
//   DESCRIPTION  VARCHAR(25)  NOT NULL,
//   STARS        INT          NOT NULL,
//   PRICE        INT          NOT NULL,
//   PHOTO1       TEXT         NOT NULL,
//   PHOTO2       TEXT         NOT NULL,
// );
// `;

// client
//   .connect()
//   .then(() => console.log('POSTGRES CONNECTING SUCCESS'))
//   .then(() => client.query(query, (err, res) => {
//     if (err) throw err
//     console.log('SEEDING SUCCESS', res)
//   })
//   .catch(err => console.log('ERROR', err.stack))
//   .finally(() => client.end(err => {
//     console.log('POSTGRES DISCONNECTING SUCCESS')
//     if (err) {
//       console.log('POSTGRES DISCONNECTING FAIL', err.stack)
//     }
//   }))

const { Client } = require('pg');

const client = new Client({
  // host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'mysecretpassword',
  // database: 'hrr47_mykea',
});

// const query = `
// DROP TABLE IF EXISTS mykea_similarproducts;
// CREATE TABLE mykea_similarproducts (
//   id SERIAL PRIMARY KEY,
//   name text,
//   description text,
//   stars int,
//   price int,
//   photo1 text,
//   photo2 text,
// );
// `;

client.connect(err => {
  if (err) {
    console.log('POSTGRES CONNECTING FAIL', err);
  } else {
    console.log('POSTGRES CONNECTING SUCCESS');
  }
});
// client.query(query, (err, res) => {
//   if (err) {
//     console.log('SEEDING DATA FAILS', err);
//   } else {
//     console.log('SEEDING DATA SUCCESS', res);
//   }
// });
