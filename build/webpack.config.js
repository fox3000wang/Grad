"use strict";
const path = require("path");
//const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    entry: path.resolve(__dirname, "../plugin/entry.js"),
    drawGrad: path.resolve(__dirname, "../plugin/drawGrad.js"),
    popup: path.resolve(__dirname, "../popup/popup.js"),
    jquery: path.resolve(__dirname, "../popup/jquery.js"),
    inject: path.resolve(__dirname, "../popup/inject.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist/plugin"),
    filename: "[name].js"
  },
  plugins: [
    //new CleanWebpackPlugin(["dist"]),
    // new HtmlWebpackPlugin({
    //   title: "Hot Module Replacement"
    // }),
    //new webpack.NamedModulesPlugin(),
    //new webpack.HotModuleReplacementPlugin()
  ]
};
