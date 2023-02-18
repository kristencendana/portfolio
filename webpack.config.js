const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/client/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 5000,
    open: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'public'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ts|tsx)$/i,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },        
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins:[
    new HtmlWebpackPlugin({
    template: './index.html'
    })
  ]
}