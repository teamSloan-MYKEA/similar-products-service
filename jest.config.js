module.export = {
  roots: ['<rootDir>/spec'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  // testEnvironment: "js-dom",
  testMatch: ['<rootDir>/spec/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    '<rootDir>/spec/setUpTests.js',
  ], // setupFiles before the tests are ran
};
