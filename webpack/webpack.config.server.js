const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  name: "server",
  target: "node",
  entry: "./src/serverRenderer.js",
  externals: [nodeExternals()],
  output: {
    filename: "js/serverRenderer.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            options: {
              modules: true,
              localIdentName: "[name]-[hash:5]",
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
});
