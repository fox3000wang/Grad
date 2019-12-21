"use strict";
const path = require("path");
//const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    Entry: path.resolve(__dirname, "../plugin/Entry.ts")
    // drawGrad: path.resolve(__dirname, "../plugin/drawGrad.js"),
    // popup: path.resolve(__dirname, "../popup/popup.js"),
    // jquery: path.resolve(__dirname, "../popup/jquery.js"),
    // inject: path.resolve(__dirname, "../popup/inject.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist/plugin"),
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  plugins: [
    //new CleanWebpackPlugin(["dist"]),
    // new HtmlWebpackPlugin({
    //   title: "Hot Module Replacement"
    // }),
    //new webpack.NamedModulesPlugin(),
    //new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [{
          loader: "babel-loader",
          options: {
            babelrc: true
          }
        },
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      ]
    }]
  }
};