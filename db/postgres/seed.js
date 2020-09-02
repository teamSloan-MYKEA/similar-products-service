const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'mysecretpassword',
  database: 'hrr47mykea',
});

const query = `
DROP TABLE IF EXISTS mykea_similarproducts;
CREATE TABLE mykea_similarproducts (
  id    SERIAL PRIMARY KEY  NOT NULL,
  productid    INT          NOT NULL,
  name         VARCHAR(25)  NOT NULL,
  description  VARCHAR(25)  NOT NULL,
  stars        INT          NOT NULL,
  price        INT          NOT NULL,
  photo1       TEXT         NOT NULL,
  photo2       TEXT         NOT NULL
);
COPY mykea_similarproducts(productid, name, description, stars, price, photo1, photo2)
FROM '/var/lib/postgresql/data/postgres_records.csv'
DELIMITER ','
CSV HEADER;
`;

client.connect(err => {
  if (err) {
    console.log('POSTGRES CONNECTING FAIL', err.stack);
  } else {
    console.log('POSTGRES CONNECTING SUCCESS');
    client.query(query, (err, res) => {
      if (err) {
        console.log('CREATING TABLE FAIL', err.stack);
      } else {
        console.log('CREATING TABLE SUCCESS', res.rows);
        client.end(err => {
          if (err) {
            console.log('POSTGRES DISCONNECTING FAIL', err.stack);
          }
          console.log('POSTGRES DISCONNECTING SUCCESS');
        });
      }
    });
  }
});

/* -------------------- DOCKER COMMAND LINES --------------------

docker run --name postgresSDC -p 5432:5432 -v /Users/nathanvu/Downloads/zHackReactor/Github/SDC/similar-products-service/db/csv-generator:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=hrr47mykea -e PGDATA=/var/lib/postgresql/data/db-files/  -d postgres

docker exec -it postgresSDC bash

psql -U postgres

\l
\c hrr47mykea
SELECT * FROM mykea_similarproducts;
(DROP TABLE IF EXISTS mykea_similarproducts;)
(SELECT * FROM mykea_similarproducts WHERE id=10000000;)

*/
