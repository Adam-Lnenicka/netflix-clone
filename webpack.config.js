const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
<<<<<<< HEAD

=======
>>>>>>> 5dfb97092430b1ee5333740fc676832d8a32086c
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.js$|json/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin(),
  ],
};
