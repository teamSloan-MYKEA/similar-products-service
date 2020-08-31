const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'mysecretpassword',
  database: 'hrr47mykea',
});

const schema = `
DROP TABLE IF EXISTS mykea_similarproducts;
CREATE TABLE mykea_similarproducts (
  ID    SERIAL PRIMARY KEY  NOT NULL,
  PRODUCTID    INT          NOT NULL,
  NAME         VARCHAR(25)  NOT NULL,
  DESCRIPTION  VARCHAR(25)  NOT NULL,
  STARS        INT          NOT NULL,
  PRICE        INT          NOT NULL,
  PHOTO1       TEXT         NOT NULL,
  PHOTO2       TEXT         NOT NULL
);
COPY mykea_similarproducts(PRODUCTID, NAME, DESCRIPTION, STARS, PRICE, PHOTO1, PHOTO2)
FROM '/var/lib/postgresql/data/records.csv'
DELIMITER ','
CSV HEADER;
`;

client.connect(err => {
  if (err) {
    console.log('POSTGRES CONNECTING FAIL', err.stack);
  } else {
    console.log('POSTGRES CONNECTING SUCCESS');
    client.query(schema, (err, res) => {
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

// -------------------- DOCKER COMMAND LINES --------------------

// docker run --name postgresSDC -p 5432:5432 -v /Users/nathanvu/Downloads/zHackReactor/Github/SDC/similar-products-service/db/csv-generator:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=hrr47mykea -e PGDATA=/var/lib/postgresql/data/db-files/  -d postgres

// docker exec -it postgresSDC bash

// psql -U postgres

// select * from mykea_similarproducts;