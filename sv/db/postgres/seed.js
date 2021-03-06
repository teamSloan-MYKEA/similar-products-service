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
  id           SERIAL       NOT NULL,
  productid    INT          NOT NULL,
  name         VARCHAR(25)  NOT NULL,
  description  VARCHAR(25)  NOT NULL,
  stars        INT          NOT NULL,
  price        INT          NOT NULL,
  photo1       TEXT         NOT NULL,
  photo2       TEXT         NOT NULL,
  PRIMARY KEY(id, productid)

);
COPY mykea_similarproducts(productid, name, description, stars, price, photo1, photo2)
FROM '/var/lib/postgresql/data/postgres_records.csv'
DELIMITER ','
CSV HEADER;
`;

client.connect(err => {
  if (err) {
    console.log('CONNECTING TO DOCKER-POSTGRES FAIL', err);
  } else {
    console.log('CONNECTING TO DOCKER-POSTGRES SUCCESS');
    client.query(query, (err, res) => {
      if (err) {
        console.log('SEEDING DATA FAIL', err);
      } else {
        console.log('SEEDING DATA SUCCESS');
        client.end(err => {
          if (err) {
            console.log('DISCONNECTING DOCKER-POSTGRES FAIL', err);
          }
          console.log('DISCONNECTING DOCKER-POSTGRES SUCCESS');
        });
      }
    });
  }
});

/* -------------------- DOCKER COMMAND LINES (ON LOCAL MACHINE)--------------------

docker run --name postgresSDC -p 5432:5432 -v /Users/nathanvu/Downloads/zHackReactor/Github/SDC/similar-products-service/sv/db/csv-generator:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=hrr47mykea -e PGDATA=/var/lib/postgresql/data/db-files/  -d postgres

docker exec -it postgresSDC bash

psql -U postgres

npm run seed (taking ~ 79 mins)

\l
\c hrr47mykea

   -------------------- DOCKER COMMAND LINES (ON AWS EC2)--------------------

docker run --name postgresSDC -p 5432:5432 -v /home/ec2-user/SDC/similar-products-service/sv/db/csv-generator:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=hrr47mykea -e PGDATA=/var/lib/postgresql/data/db-files/  -d postgres

(readlink -f postgres_records.csv)

*/
