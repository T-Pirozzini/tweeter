const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist'),
  },
};