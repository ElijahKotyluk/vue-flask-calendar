const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
    './src/styles/index.scss'
  ],
  output: {
    path: __dirname,
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'src'),
      styles: path.resolve(__dirname, 'src', 'styles')
    }
  },
  plugins: [
  	new ExtractTextPlugin({
      filename: 'index.bundle.css',
      allChunks: true
    })
  ]
}
