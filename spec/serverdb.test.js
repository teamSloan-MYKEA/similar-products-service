/**
 * @jest-environment node
 */
const mongoose = require('mongoose');
const axios = require('axios');
const seed = require('../database/dataGenerator.js');
const data = require('../database/data.js');
const db = require('../database/db.js');
const Products = require('../database/Schema.js');

const mongoTestDB = 'mongodb://localhost/test-similar-products';
mongoose.connect(mongoTestDB);

describe('Random data generator test', () => {
  it('creates a unique object to store in database', () => {
    const result1 = seed.createRandomObj(null, data.names, data.descriptions, data.prices, data.photos, db.SimilarProducts);
    const result2 = seed.createRandomObj(null, data.names, data.descriptions, data.prices, data.photos, db.SimilarProducts);
    expect(result1).not.toBe(result2);
  });
});

describe('Similar Products model test', () => {
  beforeAll(async () => {
    await Products.remove({});
  });

  afterEach(async () => {
    await Products.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('has a module', () => {
    expect(Products).toBeDefined();
  });

  describe('save and find products', () => {
    it('finds product associated with an id',
      async () => {
        const product = seed.createRandomObj(1, data.names, data.descriptions, data.prices, data.photos, Products);
        await product.save();

        const foundProduct = await Products.findOne({ id: 1 });
        const expected = 1;
        const actual = foundProduct.id;
        expect(actual).toEqual(expected);
      });
  });
});

describe('returns accurate data from API request', () => {
  it('returns data from specific id', (done) => {
    axios.get('http://localhost:3001/photos/1').then((results) => {
      expect(results).toBeDefined();
      expect(results.data.length).toEqual(12);
      expect(results.data[0].id).toEqual(1);
      done();
    })
      .catch(done.fail);
  });
});
