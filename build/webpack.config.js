"use strict";
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    // popup: path.resolve(__dirname, "../js/popup.js"),
    //jquery: path.resolve(__dirname, "../js/jquery.js"),
    inject: path.resolve(__dirname, "../js/inject.js"),
    drawGrad: path.resolve(__dirname, "../js/drawGrad.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist/js"),
    filename: "[name].js"
  }
};
