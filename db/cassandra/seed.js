const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  // keyspace: 'hrr47mykea',
});

client.connect()
  .then(() => {
    const query = 'CREATE KEYSPACE IF NOT EXISTS hrr47mykea WITH replication ='
      + "{'class': 'SimpleStrategy', 'replication_factor': '1' }";
    return client.execute(query);
  })
  .then(() => {
    const query = 'CREATE TABLE IF NOT EXISTS hrr47mykea.mykea_similarproducts'
      + ' (id INT PRIMARY KEY, productid INT, name TEXT, description TEXT, stars INT, price INT, photo1 TEXT, photo2 TEXT)';
    return client.execute(query);
  })
  // .then(() => {
  //   const query = "COPY hrr47mykea.mykea_similarproducts (description, name, photo1, photo2, price, productid, stars)"
  //   + " FROM '/var/lib/cassandra/cassandra_records.csv' WITH HEADER=TRUE";
  //   return client.execute(query);
  // })
  .then(() => client.metadata.getTable('hrr47mykea', 'mykea_similarproducts'))
  .then((table) => {
    console.log('TABLE INFORMATION');
    console.log('- NAME: %s', table.name);
    console.log('- COLUMNS:', table.columns);
    console.log('- PARTITION KEYS:', table.partitionKeys);
    console.log('- CLUSTERING KEYS:', table.clusteringKeys);
    console.log('SHUTTING DOWN');
    return client.shutdown();
  })
  .catch((err) => {
    console.error('THERE WAS AN ERROR', err);
    return client.shutdown().then(() => { throw err; });
  });

/* -------------------- CASSANDRA COMMAND LINES --------------------

docker run --name cassandraSDC -p 9042:9042 -v /Users/nathanvu/Downloads/zHackReactor/Github/SDC/similar-products-service/db/csv-generator:/var/lib/cassandra -d cassandra

docker exec -it cassandraSDC bash

cqlsh

DESCRIBE keyspaces;
USE hrr47mykea;
SELECT * FROM mykea_similarproducts;
(DROP KEYSPACE hrr47mykea;)

COPY hrr47mykea.mykea_similarproducts (id, description, name, photo1, photo2, price, productid, stars) FROM '/var/lib/cassandra/cassandra_records.csv' WITH HEADER=TRUE;

*/
