const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin') //清除文件

module.exports = {
  entry: {
    'sdk': '@/index.js'
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, '../dist'), //发布到当前目录
    filename: '[name].min.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  devServer: {
    port: 9000,
    // 自动打开浏览器
    open: true,
    // 告诉服务器从哪里dist目录中提供内容
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html'
    })
  ]
}