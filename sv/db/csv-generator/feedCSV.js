const fs = require('fs');

const headers = 'productid, name, description, stars, price, photo1, photo2';

// const headers = 'id, description, name, photo1, photo2, price, productid, stars';

const productNames = ['STRANDMON', 'SÖDERHAMN', 'KIVIK', 'GISTAD', 'MORABO', 'KOARP', 'PELLO', 'JÄPPLING', 'EKERÖ', 'EKTORP', 'VALLENTUNA', 'POÄNG', 'BINGSTA', 'MUREN', 'BUSKBO', 'FÄRLÖV', 'RÅDVIKEN', 'LIDHULT', 'MALM', 'HEMNES'];

const productDescriptions = ['Armchair', 'Modular loveseat', 'Wing chair', 'Sectional, 1-seat', 'Chaise', 'Chair', 'Rocking Chair', 'Swivel Recliner'];

const productPhotos = () => (`https://sdc-mykea.s3-us-west-1.amazonaws.com/sdc_mykea_photo_${Math.floor(Math.random() * 40) + 1}.webp`);

const randomProductInfo = (array) => Math.floor(Math.random() * array.length);

const generateOneRecord = (i) => (`
"${i}","${productNames[randomProductInfo(productNames)]}","${productDescriptions[randomProductInfo(productDescriptions)]}","${Math.floor(Math.random() * 5) + 1}","${Math.floor(Math.random() * 1000) + 1}","${productPhotos()}","${productPhotos()}"`);

// const generateOneRecord = (i) => (`
// "${i}","${productDescriptions[randomProductInfo(productDescriptions)]}","${productNames[randomProductInfo(productNames)]}","${productPhotos()}","${productPhotos()}","${Math.floor(Math.random() * 1000) + 1}","${Math.floor(Math.random() * 100) + 1}","${Math.floor(Math.random() * 5) + 1}"`);

// function generateTenMilionRecords() {
//   const stream = fs.createWriteStream('./sv/db/csv-generator/postgres_records.csv');
//   stream.write(headers);

//   // var i = 10000000;
//   var i = 100;
//   var j = 10;
//   function writeToFile() {
//     let ok = true;
//     while (i > 0 && ok) {
//       while (j > 0) {
//         const aRecord = generateOneRecord(i);
//         if (i === 0) {
//           stream.write(aRecord, () => {
//             stream.end();
//           });
//         } else {
//           ok = stream.write(aRecord);
//         }
//         j--;
//       }
//       j = 10;
//       i--;
//     }
//     if (i > 0) {
//       stream.once('drain', writeToFile);
//     }
//   }
//   writeToFile();
// }

function generateTenMilionRecords() {
  const stream = fs.createWriteStream('./sv/db/csv-generator/postgres_records.csv');
  stream.write(headers);

  var i = 1;
  var j = 1;
  function writeToFile() {
    let ok = true;
    while (i <= 10000000 && ok) {
    // while (i <= 100 && ok) {
      while (j <= 10) {
        const aRecord = generateOneRecord(i);
        if (i === 10000000) {
        // if (i === 100) {
          stream.write(aRecord, () => {
            stream.end();
          });
        } else {
          ok = stream.write(aRecord);
        }
        j++;
      }
      j = 1;
      i++;
    }
    if (i <= 10000000) {
    // if (i <= 100) {
      stream.once('drain', writeToFile);
    }
  }
  writeToFile();
}

generateTenMilionRecords();

/* -------------------- STOPWATCH --------------------
POSTGRES: ~2mins, 18.53GB

*/
