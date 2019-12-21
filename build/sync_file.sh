#!/bin/bash

cp manifest.json dist
cp icon.png dist

mkdir dist/popup
cp popup/index.html dist/popup
mv dist/plugin/popup.js dist/popup
mv dist/plugin/jquery.js dist/popup
mv dist/plugin/inject.js dist/popup
