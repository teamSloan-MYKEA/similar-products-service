const fs = require('fs');

const headers = 'id, name, description, stars, price, photo1, photo2';

// const headers = 'id, description, name, photo1, photo2, price, productid, stars';

const productNames = ['STRANDMON', 'SÖDERHAMN', 'KIVIK', 'GISTAD', 'MORABO', 'KOARP', 'PELLO', 'JÄPPLING', 'EKERÖ', 'EKTORP', 'VALLENTUNA', 'POÄNG', 'BINGSTA', 'MUREN', 'BUSKBO', 'FÄRLÖV', 'RÅDVIKEN', 'LIDHULT', 'MALM', 'HEMNES'];

const productDescriptions = ['Armchair', 'Modular loveseat', 'Wing chair', 'Sectional, 1-seat', 'Chaise', 'Chair', 'Rocking Chair', 'Swivel Recliner'];

const productPhotos = () => (`https://sdc-mykea.s3-us-west-1.amazonaws.com/sdc_mykea_photo_${Math.floor(Math.random() * 40) + 1}.webp`);

const randomProductInfo = (array) => Math.floor(Math.random() * array.length);

const generateOneRecord = () => (`
"${Math.floor(Math.random() * 100) + 1}","${productNames[randomProductInfo(productNames)]}","${productDescriptions[randomProductInfo(productDescriptions)]}","${Math.floor(Math.random() * 5) + 1}","${Math.floor(Math.random() * 1000) + 1}","${productPhotos()}","${productPhotos()}"`);

// const generateOneRecord = (i) => (`
// "${i}","${productDescriptions[randomProductInfo(productDescriptions)]}","${productNames[randomProductInfo(productNames)]}","${productPhotos()}","${productPhotos()}","${Math.floor(Math.random() * 1000) + 1}","${Math.floor(Math.random() * 100) + 1}","${Math.floor(Math.random() * 5) + 1}"`);

// const generateTenMilionRecords = () => {
//   const stream = fs.createWriteStream('postgres_records.csv');
//   // const stream = fs.createWriteStream('cassandra_records.csv');
//   stream.write(headers);

//   function writeToFile() {
//     for (let i = 0; i < 10000000; i++) {
//     // for (let i = 0; i < 1000; i++) {
//       const aRecord = generateOneRecord();
//       // const aRecord = generateOneRecord(i + 1);
//       stream.write(aRecord);
//     }
//   }
//   writeToFile();
//   console.log('DONE WRITING CSV FILE');
// };

// generateTenMilionRecords();

function generateTenMilionRecords() {
  const stream = fs.createWriteStream('./sv/db/csv-generator/postgres_records.csv');
  stream.write(headers);

  // let i = 100;
  let i = 10000000;
  function writeToFile() {
    let ok = true;
    while (i > 0 && ok) {
      i--;
      const aRecord = generateOneRecord();
      if (i === 0) {
        stream.write(aRecord, () => {
          stream.end();
        });
      } else {
        ok = stream.write(aRecord);
      }
    }
    if (i > 0) {
      stream.once('drain', writeToFile);
    }
  }
  writeToFile();
}

generateTenMilionRecords();

/* -------------------- STOPWATCH --------------------
POSTGRES: 38s, 1.8GB
CASSANDRA: 48s, 1.9GB
*/
