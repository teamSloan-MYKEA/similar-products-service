const fs = require('fs');

const headers = `'PRODUCTID', 'NAME', 'DESCRIPTION', 'STARS', 'PRICE', 'PHOTO1', 'PHOTO2'`;

const productNames = ['STRANDMON', 'SÖDERHAMN', 'KIVIK', 'GISTAD', 'MORABO', 'KOARP', 'PELLO', 'JÄPPLING', 'EKERÖ', 'EKTORP', 'VALLENTUNA', 'POÄNG', 'BINGSTA', 'MUREN', 'BUSKBO', 'FÄRLÖV', 'RÅDVIKEN', 'LIDHULT', 'MALM', 'HEMNES'];

const productDescriptions = ['Armchair', 'Modular loveseat', 'Wing chair', 'Sectional, 1-seat', 'Chaise', 'Chair', 'Rocking Chair', 'Swivel Recliner'];

const productPhotos = () => (`https://sdc-mykea.s3-us-west-1.amazonaws.com/sdc_mykea_photo_${Math.floor(Math.random() * 40) + 1}.webp`);

const randomProductInfo = (array) => Math.floor(Math.random() * array.length);

const generateOneRecord = () => (`
"${Math.floor(Math.random() * 100) + 1}","${productNames[randomProductInfo(productNames)]}","${productDescriptions[randomProductInfo(productDescriptions)]}","${Math.floor(Math.random() * 5) + 1}","${Math.floor(Math.random() * 1000) + 1}","${productPhotos()}","${productPhotos()}"`);

const generateTenMilionRecords = () => {
  const stream = fs.createWriteStream('records.csv');
  stream.write(headers);

  function writeToFile() {
    // for (let i = 0; i < 10000000; i++) {
    for (let i = 0; i < 50; i++) {
      const aRecord = generateOneRecord();
      stream.write(aRecord);
    }
  }
  writeToFile();
};

generateTenMilionRecords();
