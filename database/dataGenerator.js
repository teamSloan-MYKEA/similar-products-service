const data = require('./data.js');
const db = require('./db.js');


const randomNumber = (array) => {
  console.log(array, array.length)
  return Math.floor(Math.random() * array.length);
};

const createRandomObj = (names, descriptions, prices, photos) => {
  let randomPhotoIndex = randomNumber(photos);
  let AWS = data.AWS;
  let newSimilarProduct = new db.SimilarProducts({
    name: names[randomNumber(names)],
    description: descriptions[randomNumber(descriptions)],
    price: prices[randomNumber(prices)],
    photo1: AWS + photos[randomPhotoIndex][0],
    photo2: AWS + photos[randomPhotoIndex][1]
  });
  // console.log('newSimilarProduct', newSimilarProduct)
  //this is creating random obj data
  return newSimilarProduct;
};

const generateData = () => {
  let i = 100;
  while (i >= 0) {
    let newProduct = createRandomObj(data.names, data.descriptions, data.prices, data.photos);
    // console.log('newProduct', newProduct);
    //this is working too
    newProduct.save(err => {
      if (err) {
        console.log(err);
      }
    });
    i--;
  }
};



module.exports.generateData = generateData;
module.exports.createRandomObj = createRandomObj;



