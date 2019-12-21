"use strict";
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    // 入口文件不能参与混淆
    // drawGrad: path.resolve(__dirname, "../js/drawGrad.js"),
    popup: path.resolve(__dirname, "../js/popup.js"),
    jquery: path.resolve(__dirname, "../js/jquery.js"),
    inject: path.resolve(__dirname, "../js/inject.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist/js"),
    filename: "[name].js"
  }
};