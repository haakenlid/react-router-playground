var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
module.exports = {
  // devtool: 'eval',
  entry: [
    path.resolve(__dirname, 'prod-server.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  target: 'node',
  externals: (
    fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .concat(['react-dom/server'])
    .reduce(function(ext, mod){
      ext[mod] = 'commonjs ' + mod
      return ext
    }, {})
  ),
  node: {
    __filename: true,
    __dirname: true
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
}