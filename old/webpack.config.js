const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.zip$/, use: "zip-loader" }],
  },
};
