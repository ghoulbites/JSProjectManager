const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  //devtool: "eval-source-map",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname + "public"),
    publicPath: "/public/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
      },
      {
        test: "/.css$/",
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: "/.html$/",
        use: { loader: "html-loader" },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
}
