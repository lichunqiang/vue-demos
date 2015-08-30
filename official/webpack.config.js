var vue = require('vue-loader')

module.exports = {
  entry: {
    'main': './src/main.js',
    'a': './src/components/a.js'
  },

  output: {
    path: './build',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: vue.withLoaders({
          js: 'babel?optional[]=runtime'
        })
      }
    ]
  },

  devtool: 'source-map'
};
