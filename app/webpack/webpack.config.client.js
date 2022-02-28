const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const common = require("./webpack.config.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevMod = process.env.NODE_ENV === "development";

module.exports = merge(common, {
  name: "client",
  target: "web",

  entry: [
    isDevMod && "webpack-hot-middleware/client",
    "./src/client.js",
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              modules: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    !isDevMod &&
      new CleanWebpackPlugin("./public", {
        root: path.resolve(__dirname, "../"),
      }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ].filter(Boolean),
});
