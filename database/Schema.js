const mongoose = require('mongoose');

const similarProductsSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  stars: Number,
  price: Number,
  photo1: String,
  photo2: String,
});

module.exports = mongoose.model('Products', similarProductsSchema);
