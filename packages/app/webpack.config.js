const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("@promise-front/config/webpack.config");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) =>
  merge(baseConfig(env), {
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      open: true,
    },
    plugins: [new HtmlWebpackPlugin({template: 'src/html/index.html'})],
    watch: true,
    output: {
      filename: "app.js",
    },
  });
