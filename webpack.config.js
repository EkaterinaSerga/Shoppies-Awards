const isDev = process.env.NODE_ENV === 'development'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader?url=false', 'sass-loader']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader?url=false']
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
