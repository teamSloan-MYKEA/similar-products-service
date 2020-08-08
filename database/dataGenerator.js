const data = require('./data.js');
const db = require('./db.js');

const randomNumber = (array) => Math.floor(Math.random() * array.length);

const createRandomObj = (index, names, descriptions, prices, photos) => {
  const randomPhotoIndex = randomNumber(photos);
  const { AWS } = data;
  const newSimilarProduct = new db.SimilarProducts({
    id: index,
    name: names[randomNumber(names)],
    description: descriptions[randomNumber(descriptions)],
    price: prices[randomNumber(prices)],
    photo1: AWS + photos[randomPhotoIndex][0],
    photo2: AWS + photos[randomPhotoIndex][1],
  });
  return newSimilarProduct;
};

const generateData = () => {
  let i = 1200;
  let counter = 0;
  while (i >= 1) {
    if (i % 12 === 0) {
      // eslint-disable-next-line no-plusplus
      counter++;
    }
    // eslint-disable-next-line max-len
    const newProduct = createRandomObj(counter, data.names, data.descriptions, data.prices, data.photos);
    newProduct.save((err) => {
      if (err) {
        throw err;
      }
    });
    // eslint-disable-next-line no-plusplus
    i--;
  }
};

module.exports.generateData = generateData;
module.exports.createRandomObj = createRandomObj;
