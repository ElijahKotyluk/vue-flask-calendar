const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/js/main.js',
    './src/styles/main.scss'
  ],
  output: {
    path: __dirname,
    filename: 'main.bundle.js'
  },
  mode: 'development',
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
      filename: 'main.bundle.css',
      allChunks: true
    })
  ],
  devServer: {
  port: 3000
}
}
