const seed = require('../database/dataGenerator.js');
const data = require('../database/data.js');

test('creates a unique object', () => {
  const result1 = seed.createRandomObj(data.names, data.descriptions, data.prices, data.photos);
  const result2 = seed.createRandomObj(data.names, data.descriptions, data.prices, data.photos);
  expect(result1).not.toBe(result2);
});