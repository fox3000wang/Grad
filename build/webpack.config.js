"use strict";
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "../"),

  entry: {
    app: path.resolve(__dirname, "../js/popup.js")
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "popup.js"
  },
  module: {
    rules: []
  }
};
