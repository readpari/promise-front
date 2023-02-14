const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("@promise-front/config/webpack.config");

module.exports = (env) =>
  merge(baseConfig(env), {
    output: {
      filename: "components.js",
    },
  });
