const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/js/app.js',                 // bundleの始点
  output: {                                   //出力先
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { //jsの変換(babel-loader), reactを変換に対応させる(presets)
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react']
          }
        }
      },
      { //cssをapp.jsに勝手に入れてくれる(style-loader)
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/style.css')
  ],
  resolve: { //import文にcssを書かなくて良いようにする
    extensions: ['.js', '.css']
  },
};
