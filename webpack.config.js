const path = require('path');

module.exports = {
  entry: {
    app: './src/js/script-1.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
